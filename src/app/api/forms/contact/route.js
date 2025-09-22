import { headers } from "next/headers";
import { verifyCaptchaToken, sendEmail, jsonError, jsonSuccess } from "@/lib/forms/server";

const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || process.env.RESEND_FROM_EMAIL;

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name = "",
      email = "",
      phone = "",
      subject = "New Contact Message",
      message = "",
      serviceInterest = "general",
      captchaToken,
    } = body || {};

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedSubject = String(subject).trim();
    const trimmedMessage = String(message).trim();
    const trimmedPhone = String(phone || "").trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return jsonError("Please fill in all required fields before sending.", 400);
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

    if (!CONTACT_RECIPIENT_EMAIL) {
      throw new Error("CONTACT_RECIPIENT_EMAIL is not configured.");
    }

    const emailSubject = trimmedSubject || "New Contact Message";
    const textBody = `New contact request from ${trimmedName}\n\nEmail: ${trimmedEmail}\nPhone: ${trimmedPhone || "Not provided"}\nService Interest: ${serviceInterest}\n\nMessage:\n${trimmedMessage}`;

    const htmlBody = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(trimmedPhone || "Not provided")}</p>
      <p><strong>Service Interest:</strong> ${escapeHtml(serviceInterest)}</p>
      <hr />
      <p>${formatMultiline(trimmedMessage)}</p>
    `;

    await sendEmail({
      to: CONTACT_RECIPIENT_EMAIL,
      subject: emailSubject,
      text: textBody,
      html: htmlBody,
    });

    return jsonSuccess();
  } catch (error) {
    console.error("Contact form submission error", error);
    return jsonError("We couldn't send your message right now. Please try again later.", 500);
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

function formatMultiline(content) {
  return escapeHtml(content).replace(/\n/g, "<br />");
}
