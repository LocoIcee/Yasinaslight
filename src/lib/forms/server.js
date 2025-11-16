import { NextResponse } from "next/server";

const HCAPTCHA_VERIFY_ENDPOINT = "https://hcaptcha.com/siteverify";
const HCAPTCHA_SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;

const RESEND_API_URL = "https://api.resend.com/emails";

export async function verifyCaptchaToken(token, remoteIp) {
  if (!HCAPTCHA_SECRET_KEY) {
    throw new Error("HCAPTCHA_SECRET_KEY is not configured.");
  }

  if (!token) {
    return { success: false, "error-codes": ["missing-input-response"] };
  }

  const params = new URLSearchParams();
  params.append("secret", HCAPTCHA_SECRET_KEY);
  params.append("response", token);
  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch(HCAPTCHA_VERIFY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Failed to verify hCaptcha (status ${response.status}).`);
  }

  return response.json();
}

export async function sendEmail({ to, subject, text, html, replyTo, fromName }) {
  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!RESEND_FROM_EMAIL) {
    throw new Error("RESEND_FROM_EMAIL is not configured.");
  }

  if (!to) {
    throw new Error("Email recipient is not configured.");
  }

  const normalizedFromName = fromName ? String(fromName).trim() : "";

  const payload = {
    from: normalizedFromName ? `${normalizedFromName} <${RESEND_FROM_EMAIL}>` : RESEND_FROM_EMAIL,
    to: Array.isArray(to) ? to : [to],
    subject,
    text,
    html,
  };

  if (replyTo) {
    payload.reply_to = Array.isArray(replyTo) ? replyTo : [replyTo];
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to send email via Resend.");
  }

  return data;
}

export function jsonError(message, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status });
}

export function jsonSuccess(payload = {}) {
  return NextResponse.json({ success: true, ...payload });
}
