import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
const app = express();
app.use(express.json({ limit: '50kb' }));
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);
app.use(
  cors(
    allowedOrigins.length
      ? { origin: allowedOrigins }
      : {}
  )
);

const PORT = process.env.PORT || 3001;
const CONTACT_TO = process.env.CONTACT_TO || 'info@noviousglobal.com';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;
function createTransport() {
  const port = Number(process.env.SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function isConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
  );
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
    <p style="white-space:pre-wrap">${safe(message)}</p>
  `;

  try {
    const transport = createTransport();
    await transport.sendMail({
      from: `"Novious Global Website" <${MAIL_FROM}>`,
      to: CONTACT_TO,
      replyTo: `"${safe(name)}" <${email}>`, // replying goes straight to the enquirer
      subject: `[Contact] ${safe(subject)} — ${safe(name)}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nCompany: ${company || '—'}\nSubject: ${subject}\n\n${message}`,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res
      .status(502)
      .json({ ok: false, error: 'Could not send your message right now. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact email server listening on http://localhost:${PORT}`);
  if (!isConfigured()) {
    console.warn('⚠  SMTP credentials are not set. Fill in .env before going live.');
  }
});