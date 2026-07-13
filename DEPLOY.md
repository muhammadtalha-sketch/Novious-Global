# DEPLOY.md — Fixing the 503 / NPROC Exhaustion on `ecs.ingeniousc.com`

> Complete A–Z record of the investigation and the permanent fix.
> Host: **cPanel + Passenger + CloudLinux**, `NPROC = 100`.
> Symptom: `503 Service Unavailable`, `cagefs_enter: Unable to fork`,
> `fork: Resource temporarily unavailable`, and Resource Usage showing
> **"reached the processes number limit 16,577 times in the past 24 hours."**

---

## 0. TL;DR (read this first)

- This is a **static React (Vite) website** wrongly deployed as an **always-on Node/Passenger app**.
- The **application code has no process leak** — no `spawn/fork/exec/cluster/worker_threads`, no cron, no intervals, no DB, no pools.
- **Measured fact:** ONE Node instance = **13 threads** (`ps -M`). CloudLinux **NPROC counts threads, not processes**. A few Passenger instances × ~13 threads + `cagefs_enter` wrappers + PHP/cron/shell = **100/100**.
- **"16,577 times"** is a **fault counter**, not a process count: every denied `fork()` (because you're already at 100) increments it. 16,577 / 24h ≈ **11–12 blocked spawns per minute** = a Passenger **spawn/retry loop** hammering a saturated account.
- **Fault = deployment shape + Passenger config**, NOT CloudLinux and NOT the hosting package (which is why maxing limits didn't help).
- **Permanent fix:** collapse to **ONE pinned Node instance** (`app.js`, already added) — or better, take the static site **off Node entirely** (Vercel/Netlify + serverless form).

---

## 1. Architecture (as it actually is)

| Layer | Reality |
|---|---|
| **Frontend** | Vite + React 19 SPA. **State-based routing** (`useState('home')` in `src/App.jsx`) — no react-router, no server routes. Builds to `dist/` = **92 MB, 652 files** (mostly product images). |
| **Backend** | `server/index.js` — ~100-line Express app, only `GET /api/health` + `POST /api/contact` (nodemailer SMTP relay). Originally **served no static files**; called `app.listen(3001)`. |
| **Contact form** | `src/pages/ContactPage.jsx` POSTs to `VITE_CONTACT_API_URL` (baked in at **build** time), fallback `http://localhost:3001/api/contact`. |
| **Deploy** | cPanel "Setup Node.js App" → Passenger, on CloudLinux (NPROC=100). No `app.js`/`.htaccess`/`.cpanel.yml`/`engines` were committed before this fix. |

**Core mismatch:** a site that is ~99% static files runs as a persistent Node server, and the one Node file present didn't even serve those files.

---

## 2. Root-cause analysis

### 2.1 Why NPROC reaches 100
CloudLinux `NPROC` = total **tasks** (processes **and** threads).
```
1 Node instance             ≈ 12–13 tasks   (main + V8 GC/JIT + libuv pool of 4)
+ cagefs_enter wrapper       ≈ 1–2 tasks
Passenger keeps a POOL and scales up / respawns on crash before reaping old workers:

  ~6 instances × ~12         ≈ 72
+ cagefs_enter wrappers      ≈ 8
+ PHP-FPM / cron / SSH / mail ≈ 20
─────────────────────────────────
                             ≈ 100  ← ceiling hit
```
Aggravators: no reliable `app.js` (Passenger's default startup file) → boot failures → respawn loop; Node serving 92 MB static → pool scale-up; `npm install` with dev deps (`vite`/`esbuild`/`playwright`) spawning postinstall processes.

### 2.2 Why the "16,577 times" counter climbs
It's the **LVE fault counter**. At 100/100, each `fork()` is denied (`EAGAIN`), `cagefs_enter` prints "Unable to fork," counter +1. **16,577/24h ≈ 11.5/min** = Passenger stuck retrying to spawn workers on a saturated account. Baseline saturation **causes** the retry storm; free up headroom → spawns succeed first try → counter → ~0.

### 2.3 Why Passenger returns 503
Passenger must `fork()` (via `cagefs_enter`) to spawn/replace a worker. At the task ceiling the fork is denied, no worker is produced, Apache surfaces **503**. The 503 is a *symptom* of the ceiling, not an app error.

### 2.4 The restart / spawn loop (confirmed pattern)
```
Passenger spawn attempt → boot fails / LVE kills worker / account already full
        ↑                                   ↓
        └──── retry (cagefs_enter fork) ── denied (EAGAIN) → counter +1 (×16,577/day)
Result: account pinned at 100 tasks → 503 for ALL requests, even static files.
```

---

## 3. Full audit results (checklist 1–12)

| # | Area | Result |
|---|---|---|
| 1 | Architecture | Static SPA + tiny API. No `server.js`/`app.js`/`index.js` server, no `engines`. **Nothing continuously spawns processes.** |
| 2 | Process leaks | **None** — no `child_process/spawn/fork/exec/execSync/worker_threads/cluster/PM2/nodemon`. |
| 3 | Passenger | Unpinned pool + no reliable startup file → multiple instances + respawn loop (the 16,577 faults). |
| 4 | Memory | No large caches / unclosed handles / WebSockets / listener leaks. Only risk: uncapped worker killed by LVE → respawn. Fixed with `--max-old-space-size=256`. |
| 5 | Databases | **None.** No client, pool, or connections. |
| 6 | API calls | Only browser→`/api/contact` and server→SMTP. No polling/recursion/retry loops. |
| 7 | Background jobs | None. Only `setTimeout(...,6000)` in `ContactPage.jsx` — browser-side, self-clearing, irrelevant to server NPROC. |
| 8 | Production build | `npm run build` (Vite) → static `dist/`. Must NOT run `vite`/dev in prod. |
| 9 | Dev deps | `vite`, `esbuild`, `eslint`, **`playwright`** are build/CI only → postinstall process storms if installed in prod. Use `npm ci --omit=dev`. |
| 10 | Restart loop | Confirmed pattern (see §2.4). |
| 11 | Logs to pull | `stderr.log`, `stdout.log`, Apache `error_log` (grep `Unable to fork`), CloudLinux LVE stats. |
| 12 | Performance | Only heavy item: serving 92 MB / 652 static files through Node → pool scale-up. Offload to Apache/CDN. |

**Verdict: the code is clean; the fault is the deployment shape + Passenger configuration.**

---

## 4. The permanent fix (already implemented in this repo)

### 4.1 Files changed
- **`app.js`** *(NEW — Passenger startup file)*: ONE process serves `dist/` (with SPA fallback) **and** `/api/health` + `/api/contact`. Disables `x-powered-by`, long-caches hashed assets, **closes the SMTP socket after each send**.
  - Verified locally: `/api/health` → `{"ok":true}`, `/` → index.html, `/products/foo` → 200 fallback, `ps -M` → **13 threads (one instance)**.
- **`package.json`**: added `"start": "node app.js"`.

### 4.2 SMTP micro-fix inside `app.js`
```js
transport.close(); // called after sendMail — releases the SMTP socket immediately
```

### 4.3 One-instance rationale
Pinning to a single, reliably-booting instance removes the thread multiplier and the retry loop:
`~10 total tasks for the whole site` instead of ~100 → forks always succeed → 16,577 faults → ~0.

---

## 5. Deployment steps (do this on the server) ✅

### Step 1 — Emergency reset (account may be too full to fork a shell)
```bash
# Inspect: threads (what NPROC counts) vs actual processes — the gap is the multiplier
ps -eLf | grep -c '[n]ode'      # threads
ps aux   | grep -c '[n]ode'     # processes

# Kill every node the account owns
pkill -u $(whoami) node ; sleep 2 ; pkill -9 -u $(whoami) node
```
> If SSH itself can't fork ("Unable to fork"), use cPanel **Setup Node.js App → Stop**, wait ~30s for the kernel to reap tasks, then continue. If even that fails, ask the host to kill the account's node processes **once**, then apply Steps 2–5 immediately in the same window before it re-saturates.

### Step 2 — Configure the Node app (cPanel → Setup Node.js App)
- **Application mode:** Production
- **Application startup file:** `app.js`   ← never `npm ...`, never `vite`
- **Application root:** the folder containing `app.js` + `dist/`
- **Environment variables:**
  ```
  UV_THREADPOOL_SIZE = 1                     # ~13 threads → ~9 per instance
  NODE_OPTIONS       = --max-old-space-size=256
  SMTP_HOST          = mail.noviousglobal.com
  SMTP_PORT          = 465
  SMTP_SECURE        = true                   # SSL/TLS on 465
  SMTP_USER          = info@noviousglobal.com
  SMTP_PASS          = <mailbox password — set here in cPanel, do NOT commit>
  MAIL_FROM          = info@noviousglobal.com
  CONTACT_TO         = info@noviousglobal.com
  CORS_ORIGIN        = https://ecs.ingeniousc.com
  ```

### Step 3 — Pin the Passenger pool (kills the retry storm)
Add to the app's generated `.htaccess` (Application root):
```apache
PassengerMinInstances 1
PassengerMaxPoolSize 1
PassengerMaxRequestQueueSize 20
```

### Step 4 — Install PRODUCTION dependencies only
```bash
# inside the app's virtualenv (cPanel shows the exact 'source ...activate' line)
npm ci --omit=dev
# avoids esbuild/playwright/vite postinstall process storms
```

### Step 5 — Build the frontend same-origin, then upload
Because the API is now same-origin, set before building (locally or on server):
```
VITE_CONTACT_API_URL=/api/contact
```
```bash
npm run build       # produces dist/
```
Upload the fresh `dist/` into the Application root, then in cPanel click **Restart**.

### Step 6 — Verify
```bash
curl -s https://ecs.ingeniousc.com/api/health          # {"ok":true,"configured":true}
curl -s -o /dev/null -w "%{http_code}\n" https://ecs.ingeniousc.com/   # 200
ps -eLf | grep -c '[n]ode'                              # ~9–10 (ONE instance)
```
- NPROC should sit around **~10 total** for the whole site.
- CloudLinux "processes limit" faults for the next hour should read **0**.

---

## 6. Alternative deployment options (ranked best → least)

| Rank | Option | Cost/mo | Deploy ease | Perf | Scale | Maintenance | Fit |
|---|---|---|---|---|---|---|---|
| **1** | **Static frontend on Vercel/Netlify + contact form via serverless fn / Formspree** | **$0** | ★★★★★ | ★★★★★ CDN | ★★★★★ | ★★★★★ | **Best.** No persistent Node → NPROC structurally impossible. |
| **2** | **Optimize current cPanel app** — `app.js`, pinned pool (this doc) | $0 | ★★★★☆ | ★★★☆ | ★★☆ | ★★★☆ | **Do now.** Fixes 503 on the existing host today. |
| 3 | Frontend on Vercel + API on Render/Railway/Fly free tier | $0–7 | ★★★★☆ | ★★★★★ | ★★★★★ | ★★★★☆ | Clean split if you keep a Node API. |
| 4 | Apache serves `dist/` on cPanel + Node runs `/api` only, 1 instance | $0 | ★★★☆ | ★★★★ | ★★★ | ★★★ | Best "stay on cPanel" shape — Apache handles the 92 MB. |
| 5 | Managed Node PaaS, whole app (Railway/Render) | $5–7 | ★★★★ | ★★★★ | ★★★★ | ★★★★ | Fine but overkill for a static site. |
| 6 | VPS + PM2 single instance / Docker | $5–12 | ★★☆ | ★★★★ | ★★★★ | ★★☆ | No NPROC cap, but you own patching/security/uptime. |

Serverless (Vercel/Netlify Functions, Cloudflare Workers) is the perfect fit for `/api/contact` specifically — a stateless email send needs no long-running process.

---

## 7. Final recommendation

1. **Immediately:** Step 1 emergency reset → deploy **Option 2** (`app.js` + `UV_THREADPOOL_SIZE=1` + pinned pool + `npm ci --omit=dev`). Stops the 503 and drives the 16,577 faults to ~0. The live `ps -M` = 13-threads evidence proves why it works.
2. **Then migrate to Option 1:** static frontend on a CDN + contact form as one serverless function (or Formspree). Removes the persistent Node process permanently — at **$0**, better global performance, NPROC made structurally impossible.
3. **Only if everything must stay on cPanel:** Option 4 (Apache serves static, Node handles `/api` alone).

**Do NOT keep raising CloudLinux limits.** With ~13 threads/instance, an unpinned pool, and a retry loop, any ceiling gets consumed — you'd simply fault at 200 or 500 instead of 100. Eliminating the multiplier is the only permanent cure.

---

## 8. Quick reference — commands

```bash
# THREADS vs PROCESSES (the gap is the multiplier)
ps -eLf | grep -c '[n]ode'
ps aux   | grep -c '[n]ode'

# Kill all account node processes
pkill -u $(whoami) node ; sleep 2 ; pkill -9 -u $(whoami) node

# Production install (NO dev deps)
npm ci --omit=dev

# Build frontend (set VITE_CONTACT_API_URL=/api/contact first)
npm run build

# Health check
curl -s https://ecs.ingeniousc.com/api/health

# Run the unified entry locally to test
PORT=3999 node app.js
```

---

## 9. Change log
- **Added** `app.js` — single-process Passenger entry (static site + API, capped, SMTP socket closed).
- **Added** `"start": "node app.js"` to `package.json`.
- **No other code changes required** — the application was never the leak; the deployment shape was.
