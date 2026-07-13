# Contact form email backend (SMTP)

The website is a static React (Vite) app, so it can't send SMTP mail from the
browser. This tiny Express service receives the contact-form submission and
relays it to `info@noviousglobal.com` over SMTP using **nodemailer**.

## Setup

1. Copy the environment template and fill in your real SMTP credentials:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env`:

   | Variable       | What to put                                                        |
   |----------------|--------------------------------------------------------------------|
   | `SMTP_HOST`    | Your mail host, e.g. `smtp.hostinger.com`, `smtp.gmail.com`        |
   | `SMTP_PORT`    | `587` (STARTTLS) or `465` (SSL)                                     |
   | `SMTP_SECURE`  | `true` only for port 465; otherwise leave blank                    |
   | `SMTP_USER`    | Mailbox login, usually `info@noviousglobal.com`                    |
   | `SMTP_PASS`    | Mailbox / app password                                             |
   | `MAIL_FROM`    | From address (often must equal `SMTP_USER`)                        |
   | `CONTACT_TO`   | Where messages are delivered (`info@noviousglobal.com`)           |
   | `CORS_ORIGIN`  | Your site origin(s) in production, comma-separated                 |

   > `.env` is gitignored — never commit real credentials.

2. Start the backend:

   ```bash
   npm run server
   ```

   Check it's up and configured: <http://localhost:3001/api/health>
   → `{"ok":true,"configured":true}`

3. Point the frontend at the backend. In `.env` set:

   ```
   VITE_CONTACT_API_URL=http://localhost:3001/api/contact   # local dev
   # In production, use your deployed backend URL, e.g.
   # VITE_CONTACT_API_URL=https://api.noviousglobal.com/api/contact
   ```

## Deploying

Host `server/index.js` anywhere that runs Node (Render, Railway, a VPS, etc.),
set the same environment variables there, and set `VITE_CONTACT_API_URL` to that
server's public `/api/contact` URL before building the frontend (`npm run build`).

Until real SMTP credentials are provided, the endpoint returns a clear
`503 — Email service is not configured yet` and the form shows a friendly error
(it never fakes success).
