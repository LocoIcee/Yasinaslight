'use client';
import React, { useState } from "react";

import useHcaptcha from "@/hooks/useHcaptcha";

const ClassesPage = () => {
  // Brand palette
  const colors = {
    primary: "#563D7C",   // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700",    // Golden Yellow
    neutral: "#F8F5F2",   // Warm White
    text: "#333333",      // Dark Charcoal
  };

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rawHcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY?.trim();
  const hcaptchaSiteKey = rawHcaptchaSiteKey ? rawHcaptchaSiteKey : null;
  const { execute, isReady: isHcaptchaReady, containerId: hcaptchaContainerId, reset: resetHcaptcha } = useHcaptcha(
    hcaptchaSiteKey
  );
  const isCaptchaConfigured = Boolean(hcaptchaSiteKey);

  const resetFeedback = () => {
    if (submitted) {
      setSubmitted(false);
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
    if (isCaptchaConfigured) {
      resetHcaptcha();
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    resetFeedback();
  };

  // Notify via internal API endpoint
  const handleNotify = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatusMessage({ type: "error", text: "Please enter a valid email." });
      return;
    }

    if (!isCaptchaConfigured) {
      setStatusMessage({ type: "error", text: "Notifications are paused while we finish security setup. Please check back soon." });
      return;
    }
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const captchaToken = await execute("classes_notify");

      const response = await fetch("/api/forms/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: trimmedEmail,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to save your request right now.");
      }

      setSubmitted(true);
      setStatusMessage({ type: "success", text: `You're on the list! We'll email ${trimmedEmail} as soon as classes open.` });
      setEmail("");
      resetHcaptcha();
    } catch (error) {
      setStatusMessage({ type: "error", text: error.message || "Unable to save your request right now." });
      if (isCaptchaConfigured) {
        resetHcaptcha();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Soft radial background glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(60% 60% at 50% 50%, ${colors.secondary}, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-24 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(60% 60% at 50% 50%, ${colors.primary}, transparent 70%)` }}
      />

      {/* Top banner */}
      <header
        className="relative z-10 py-14 text-center"
        style={{ background: `linear-gradient(90deg, ${colors.primary}E6, ${colors.primary}CC)` }}
      >
        <h1
          className="text-3xl md:text-5xl tracking-wide"
          style={{ color: colors.neutral, fontFamily: "'Cormorant Garamond', serif" }}
        >
          CLASSES &amp; EVENTS
        </h1>
        <p className="mt-3 md:text-lg" style={{ color: `${colors.neutral}CC` }}>
          Transformative learning is on its way.
        </p>
      </header>

      {/* Main card */}
      <main className="relative z-10 container mx-auto px-4">
        <section
          className="mx-auto -mt-10 mb-10 max-w-4xl rounded-2xl p-1 shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${colors.secondary}66, ${colors.accent}66)`,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ backgroundColor: colors.neutral }}
          >
            {/* Badge */}
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs tracking-wide"
                style={{
                  backgroundColor: `${colors.primary}10`,
                  color: colors.primary,
                  border: `1px solid ${colors.primary}22`,
                }}
              >
                ✧ New calendar coming soon
              </span>
            </div>

            <h2
              className="mt-4 text-center text-2xl md:text-4xl"
              style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
            >
              We&apos;re preparing a beautiful lineup of workshops, retreats &amp; certifications
            </h2>

            <p className="mt-4 text-center md:text-lg" style={{ color: `${colors.text}CC`, lineHeight: 1.8 }}>
              Thank you for your patience while we finalize dates, venues, and facilitators.
              Be the first to know when registration opens—and get early-bird pricing.
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Small, heart‑led groups",
                "Hands‑on energy practices",
                "Beginner to advanced levels",
                "In‑person & online options",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{ backgroundColor: `${colors.secondary}10`, border: `1px solid ${colors.secondary}30` }}
                >
                  <span aria-hidden className="text-lg" style={{ color: colors.secondary }}>✹</span>
                  <span style={{ color: colors.text }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* Notify form */}
            <form onSubmit={handleNotify} className="mt-8">
              {!isCaptchaConfigured && (
                <p
                  className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                  role="alert"
                >
                  Notifications are disabled while we finalize security configuration. Please check back soon.
                </p>
              )}
              {isCaptchaConfigured && (
                <div id={hcaptchaContainerId} style={{ display: "none" }} />
              )}
              {submitted ? (
                <div
                  className="rounded-xl p-4 text-center space-y-4"
                  style={{
                    backgroundColor: `${colors.secondary}15`,
                    border: `1px solid ${colors.secondary}40`,
                    color: colors.text,
                  }}
                >
                  <p role="status" aria-live="polite">
                    {statusMessage?.text || "You're on the list! We'll email you as soon as classes open."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStatusMessage(null);
                      if (isCaptchaConfigured) {
                        resetHcaptcha();
                      }
                    }}
                    className="inline-flex items-center justify-center rounded-md border border-secondary px-4 py-2 text-sm font-medium text-secondary transition-all hover:bg-secondary/10"
                  >
                    Notify another email
                  </button>
                </div>
              ) : (
                <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email for early access"
                    className="w-full flex-1 rounded-lg px-4 py-3 outline-none"
                    style={{
                      backgroundColor: "white",
                      border: `1px solid ${colors.primary}30`,
                      color: colors.text,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={
                      isSubmitting || !isCaptchaConfigured || !isHcaptchaReady
                    }
                    className="w-full sm:w-auto rounded-lg px-6 py-3 font-medium transition-all"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.neutral,
                      boxShadow: "0 6px 16px rgba(86,61,124,0.25)",
                      opacity:
                        isSubmitting || !isCaptchaConfigured || !isHcaptchaReady
                          ? 0.75
                          : 1,
                      cursor:
                        isSubmitting || !isCaptchaConfigured || !isHcaptchaReady
                          ? "not-allowed"
                          : "pointer",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Notify Me"}
                  </button>
                </div>
              )}
              {statusMessage && !submitted && (
                <p
                  className={`mt-3 text-center text-sm ${
                    statusMessage.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage.text}
                </p>
              )}
              <p className="mt-3 text-center text-xs" style={{ color: `${colors.text}80` }}>
                No spam—just one email when we open registration.
              </p>
            </form>
          </div>
        </section>

        {/* Decorative info strip */}
        <section className="mx-auto mb-16 max-w-4xl">
          <div
            className="flex flex-col items-center justify-between gap-4 rounded-xl px-5 py-4 md:flex-row"
            style={{ backgroundColor: `${colors.primary}08`, border: `1px solid ${colors.primary}22` }}
          >
            <div className="text-center md:text-left">
              <p className="text-sm" style={{ color: `${colors.text}99` }}>
                Want to host a private class for your group or team?
              </p>
              <p className="text-sm" style={{ color: colors.text }}>
                Email us at <a href="mailto:info@yasinaslight.com" className="underline">info@yasinaslight.com</a>
              </p>
            </div>
            <a
              href="mailto:info@yasinaslight.com?subject=Private%20Class%20Inquiry"
              className="rounded-full px-5 py-2 text-sm transition-all hover:shadow"
              style={{ backgroundColor: colors.secondary, color: colors.neutral }}
            >
              Inquire About Private Sessions
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassesPage;
