/**
 * Passenger entry point (cPanel "Setup Node.js App" → Application startup file: app.js)
 *
 * ONE process serves the whole site:
 *   - static React build in ./dist  (with SPA fallback)
 *   - /api/health and /api/contact  (SMTP relay via nodemailer)
 *
 * Why one process: CloudLinux NPROC counts every THREAD of every process.
 * A single Node instance already costs ~7-11 tasks (V8 + libuv threadpool +
 * GC). Running multiple Node apps, or letting Passenger scale a pool, multiplies
 * that and exhausts the 100-task account limit → `cagefs_enter: Unable to fork`
 * → 503. Keeping exactly one small, single-threaded-pool process is the fix.
 *
 * IMPORTANT — also set these in the cPanel Node app "Environment variables"
 * (they must exist BEFORE the process starts; setting them in code is too late
 * for libuv):
 *   UV_THREADPOOL_SIZE = 1
 *   NODE_OPTIONS       = --max-old-space-size=256
 * and set Passenger min instances to 1 (or 0) so it never scales the pool.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '50kb' }));

const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);
app.use(cors(allowedOrigins.length ? { origin: allowedOrigins } : {}));

const CONTACT_TO = process.env.CONTACT_TO || 'info@noviousglobal.com';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;

function isConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

// Fresh transport per request; nodemailer pooling is intentionally OFF so no
// SMTP sockets/processes linger between submissions.
function createTransport() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, configured: isConfigured() });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ ok: false, error: 'Please fill in your name, email, subject, and message.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please provide a valid email address.' });
  }
  if (!isConfigured()) {
    return res.status(503).json({
      ok: false,
      error: 'Email service is not configured yet. Please add SMTP credentials in .env.',
    });
  }

  const safe = (v) => String(v || '').replace(/[<>]/g, '');
  const html = `
    <h2>New contact form submission — Novious Global</h2>
    <p><strong>Name:</strong> ${safe(name)}</p>
    <p><strong>Email:</strong> ${safe(email)}</p>
    <p><strong>Phone:</strong> ${safe(phone) || '—'}</p>
    <p><strong>Company:</strong> ${safe(company) || '—'}</p>
    <p><strong>Subject:</strong> ${safe(subject)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space:pre-wrap">${safe(message)}</p>`;

  try {
    const transport = createTransport();
    await transport.sendMail({
      from: `"Novious Global Website" <${MAIL_FROM}>`,
      to: CONTACT_TO,
      replyTo: `"${safe(name)}" <${email}>`,
      subject: `[Contact] ${safe(subject)} — ${safe(name)}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nCompany: ${company || '—'}\nSubject: ${subject}\n\n${message}`,
    });
    transport.close(); // release the SMTP socket immediately
    return res.json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res
      .status(502)
      .json({ ok: false, error: 'Could not send your message right now. Please try again later.' });
  }
});

// Static build. Long cache for hashed assets; index.html is served fresh.
app.use(
  express.static(DIST_DIR, {
    index: false,
    maxAge: '1y',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('index.html')) res.setHeader('Cache-Control', 'no-cache');
    },
  })
);

// SPA fallback: every non-API, non-file request returns index.html.
app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Novious site + API listening on ${PORT}`);
  if (!isConfigured()) console.warn('⚠  SMTP credentials not set — contact form will 503.');
});
