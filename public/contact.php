<?php
/**
 * Static-hosting contact endpoint (no Node required).
 *
 * Lives in public/ so Vite copies it into dist/ → uploaded to the site docroot.
 * The React contact form POSTs JSON here (VITE_CONTACT_API_URL=/contact.php).
 * Delivers to the local mailbox via the server MTA — LiteSpeed runs PHP as
 * short-lived processes, so this never holds a persistent process (no NPROC hit).
 */

header('Content-Type: application/json; charset=utf-8');

// ── Config ────────────────────────────────────────────────────────────────
$CONTACT_TO = 'info@noviousglobal.com';
$MAIL_FROM  = 'info@noviousglobal.com'; // must be a domain-local mailbox
// Restrict who may POST here (same-origin site). Add both hosts if needed.
$ALLOWED_ORIGINS = ['https://ecs.ingeniousc.com', 'https://noviousglobal.com'];

// ── CORS / method guard ─────────────────────────────────────────────────────
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $ALLOWED_ORIGINS, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
}
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// ── Parse input (JSON or form-encoded) ──────────────────────────────────────
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$company = trim($data['company'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

// ── Validate ────────────────────────────────────────────────────────────────
if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in your name, email, subject, and message.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

// Strip anything that could smuggle extra mail headers.
$clean = function ($v) {
    return str_replace(["\r", "\n", '<', '>'], '', (string) $v);
};

$safeName    = $clean($name);
$safeEmail   = $clean($email);
$safeSubject = $clean($subject);

$bodyLines = [
    "New contact form submission — Novious Global",
    "",
    "Name:    {$name}",
    "Email:   {$email}",
    "Phone:   " . ($phone   !== '' ? $phone   : '—'),
    "Company: " . ($company !== '' ? $company : '—'),
    "Subject: {$subject}",
    "",
    "Message:",
    $message,
];
$body = implode("\n", $bodyLines);

$headers   = [];
$headers[] = "From: Novious Global Website <{$MAIL_FROM}>";
$headers[] = "Reply-To: {$safeName} <{$safeEmail}>";
$headers[] = "Content-Type: text/plain; charset=utf-8";
$headers[] = "MIME-Version: 1.0";

$ok = @mail(
    $CONTACT_TO,
    "[Contact] {$safeSubject} — {$safeName}",
    $body,
    implode("\r\n", $headers),
    "-f{$MAIL_FROM}"
);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Could not send your message right now. Please try again later.']);
}
