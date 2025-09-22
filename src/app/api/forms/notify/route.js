import { headers } from "next/headers";
import { verifyCaptchaToken, sendEmail, jsonError, jsonSuccess } from "@/lib/forms/server";

const CLASSES_RECIPIENT_EMAIL = process.env.CLASSES_RECIPIENT_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || process.env.RESEND_FROM_EMAIL;

export async function POST(request) {
  try {
    const body = await request.json();
    const { email = "", captchaToken } = body || {};

    const trimmedEmail = String(email).trim();

    if (!trimmedEmail) {
      return jsonError("Please provide a valid email.", 400);
    }

    if (!captchaToken) {
      return jsonError("Captcha validation is required.", 400);
    }

    const forwarded = headers().get("x-forwarded-for");
    const remoteIp = forwarded ? forwarded.split(",")[0].trim() : undefined;

    const captchaResult = await verifyCaptchaToken(captchaToken, remoteIp);
    if (!captchaResult.success) {
      return jsonError("Captcha validation failed. Please try again.", 400);
    }

    if (!CLASSES_RECIPIENT_EMAIL) {
      throw new Error("CLASSES_RECIPIENT_EMAIL is not configured.");
    }

    const textBody = `New classes notification request.\n\nEmail: ${trimmedEmail}`;
    const htmlBody = `
      <h2>Classes Notification Request</h2>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
    `;

    await sendEmail({
      to: CLASSES_RECIPIENT_EMAIL,
      subject: "New Classes Notification Request",
      text: textBody,
      html: htmlBody,
    });

    return jsonSuccess();
  } catch (error) {
    console.error("Classes notify submission error", error);
    return jsonError("We couldn't save your request right now. Please try again later.", 500);
  }
}

function escapeHtml(content) {
  return String(content)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
