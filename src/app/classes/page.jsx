'use client';

import React, { useMemo, useState } from "react";

import useHcaptcha from "@/hooks/useHcaptcha";
import { colors, fonts } from "@/utils/constants";

const CLASS_OFFERINGS = [
  {
    id: "chakra",
    title: "Chakra Alignment Series",
    label: "Chakra Classes",
    price: "$225",
    duration: "3-week series | 90 min sessions",
    description:
      "Reclaim harmony in your energetic body through guided practices, reflective journaling, and sound healing activations tailored to each chakra.",
    outcomes: [
      "Understand the purpose and emotional landscape of each chakra",
      "Receive personalized balancing techniques and meditations",
      "Learn crystal, color, and affirmation support for daily alignment",
    ],
  },
  {
    id: "angel",
    title: "Angel Connections Workshop",
    label: "Angel Connections",
    price: "$180",
    duration: "Single intensive | 2.5 hours",
    description:
      "Build a sacred relationship with your angelic team while strengthening your intuitive channel through ritual, breath, and energetic protection.",
    outcomes: [
      "Identify your guardian team and their unique signatures",
      "Practice safe channeling and message discernment",
      "Create morning/evening rituals to stay connected",
    ],
  },
  {
    id: "reiki",
    title: "Reiki Immersion",
    label: "Reiki Classes",
    price: "$260",
    duration: "Level I & II | 2 full-day immersions",
    description:
      "Step into your healer lineage with attunements, practice clinics, and practical tools to offer Reiki confidently for yourself and others.",
    outcomes: [
      "Receive Level I & II attunements with lineage certification",
      "Understand ethics, hand placements, and session flow",
      "Practice sending distance Reiki and creating sacred space",
    ],
  },
  {
    id: "card",
    title: "Card Reading Mastery",
    label: "Card Reading",
    price: "$160",
    duration: "Half-day retreat | 4 hours",
    description:
      "Develop a grounded, heart-led card reading style with spreads that empower clarity, compassion, and actionable insight for every querent.",
    outcomes: [
      "Interpret spreads without memorizing every card",
      "Blend intuition with symbolism for cohesive narratives",
      "Craft compassionate client communication and boundaries",
    ],
  },
];

const EXPERIENCE_HIGHLIGHTS = [
  {
    title: "Intimate Circles",
    description: "Small cohorts ensure personal attention, spacious Q&A, and a felt sense of community support.",
  },
  {
    title: "Holistic Resources",
    description: "Receive companion workbooks, guided meditations, and ritual playlists to deepen practice at home.",
  },
  {
    title: "Continued Support",
    description: "Every class includes a follow-up check-in email and optional 1:1 mentorship add-ons.",
  },
];

const JOURNEY_STEPS = [
  { step: "01", title: "Choose Your Path", copy: "Explore the class that lights you up and note any questions you have." },
  { step: "02", title: "Send an Inquiry", copy: "Complete the form below so we can align on dates, format, and your goals." },
  { step: "03", title: "Confirm & Prepare", copy: "Receive a personalized welcome email with next steps, resources, and payment details." },
];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  classInterest: CLASS_OFFERINGS[0].id,
  timeframe: "",
  message: "",
};

const SUCCESS_MESSAGE = "Thank you! I'll be in touch shortly to confirm class details and next steps.";

const SOFT_PRIMARY_BORDER = "1px solid rgba(86, 61, 124, 0.14)";
const SOFT_SECONDARY_BORDER = "1px solid rgba(78, 205, 196, 0.2)";

const ClassesPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rawHcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY?.trim();
  const hcaptchaSiteKey = rawHcaptchaSiteKey ? rawHcaptchaSiteKey : null;
  const { execute, isReady: isHcaptchaReady, containerId: hcaptchaContainerId, reset: resetHcaptcha } = useHcaptcha(
    hcaptchaSiteKey
  );
  const isCaptchaConfigured = Boolean(hcaptchaSiteKey);

  const selectedClass = useMemo(
    () => CLASS_OFFERINGS.find((item) => item.id === formData.classInterest) ?? CLASS_OFFERINGS[0],
    [formData.classInterest]
  );

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

  const handleFieldChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
    resetFeedback();
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    resetFeedback();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const trimmedTimeframe = formData.timeframe.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatusMessage({ type: "error", text: "Please complete the required fields before sending." });
      return;
    }

    if (!isCaptchaConfigured) {
      setStatusMessage({
        type: "error",
        text: "The booking form is temporarily unavailable while we finish security setup. Please email info@yasinaslight.com instead.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const captchaToken = await execute("classes_booking");

      const composedMessage = [
        `Class Interest: ${selectedClass.label}`,
        trimmedTimeframe ? `Preferred Timing: ${trimmedTimeframe}` : null,
        trimmedPhone ? `Phone: ${trimmedPhone}` : null,
        "",
        trimmedMessage,
      ]
        .filter(Boolean)
        .join("\n");

      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          subject: `Class Booking Inquiry - ${selectedClass.label}`,
          message: composedMessage,
          serviceInterest: `class-${selectedClass.id}`,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "We could not send your message right now.");
      }

      setSubmitted(true);
      setStatusMessage({ type: "success", text: SUCCESS_MESSAGE });
      resetForm();
      resetHcaptcha();
    } catch (error) {
      setStatusMessage({ type: "error", text: error.message || "We could not send your message right now." });
      setSubmitted(false);
      if (isCaptchaConfigured) {
        resetHcaptcha();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 12% 18%, ${colors.accent}22 0, transparent 45%),
            radial-gradient(circle at 88% 12%, ${colors.secondary}20 0, transparent 40%),
            radial-gradient(circle at 25% 75%, ${colors.primary}18 0, transparent 55%),
            linear-gradient(135deg, ${colors.neutral}, #ffffff)
          `,
        }}
      />

      <header className="relative px-4 py-20 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-white/30 bg-white/70 p-10 shadow-xl backdrop-blur lg:flex-row lg:p-14">
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-sm uppercase tracking-[0.3em]"
              style={{ color: `${colors.text}80`, fontFamily: fonts.body }}
            >
              Classes & Gatherings
            </p>
            <h1
              className="mt-4 text-4xl leading-tight md:text-5xl"
              style={{ color: colors.primary, fontFamily: fonts.heading }}
            >
              Expand your light through soulful study, practice, and community.
            </h1>
            <p className="mt-5 text-base md:text-lg" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
              Each offering weaves intuitive guidance, grounded teachings, and heart-led rituals so you leave
              empowered to share your gifts with confidence.
            </p>
          </div>
          <div
            className="flex flex-col justify-center gap-4 rounded-2xl p-8 text-center shadow-lg lg:w-80 lg:text-left"
            style={{
              border: SOFT_PRIMARY_BORDER,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(86,61,124,0.08) 45%, rgba(78,205,196,0.2))",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: colors.primary }}>
              What to expect
            </p>
            <ul className="space-y-2 text-sm" style={{ color: `${colors.text}cc`, fontFamily: fonts.body }}>
              <li>• Sacred, inclusive learning space</li>
              <li>• Guided practice and personal feedback</li>
              <li>• Take-home resources to keep the work alive</li>
            </ul>
            <div
              className="h-px"
              style={{ background: "linear-gradient(to right, transparent, rgba(86,61,124,0.3), transparent)" }}
            />
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: `${colors.text}66`, fontFamily: fonts.body }}>
              In-person & virtual options available
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <section className="space-y-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl md:text-4xl" style={{ color: colors.primary, fontFamily: fonts.heading }}>
              Featured Pathways
            </h2>
            <p className="max-w-3xl text-base md:text-lg" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
              Select the journey that speaks to you and imagine the transformation you are ready to welcome.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {CLASS_OFFERINGS.map((item) => (
              <article
                key={item.id}
                className="group relative flex h-full flex-col rounded-3xl border bg-white/90 p-8 shadow-md transition-shadow duration-300 hover:shadow-xl"
                style={{ fontFamily: fonts.body, border: SOFT_PRIMARY_BORDER }}
              >
                <div className="absolute inset-x-8 top-0 -translate-y-1/2">
                  <div
                    className="rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em]"
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.neutral,
                    }}
                  >
                    {item.label}
                  </div>
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl" style={{ color: colors.primary, fontFamily: fonts.heading }}>
                    {item.title}
                  </h3>
                  <div className="text-right">
                    <span className="block text-xl font-semibold" style={{ color: colors.secondary }}>
                      {item.price}
                    </span>
                    <span className="text-xs uppercase tracking-[0.32em]" style={{ color: `${colors.text}80` }}>
                      {item.duration}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed" style={{ color: `${colors.text}cc` }}>
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm" style={{ color: `${colors.text}b3` }}>
                  {item.outcomes.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: colors.secondary }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-8 flex-1 rounded-2xl p-5 text-sm"
                  style={{
                    background: "linear-gradient(120deg, rgba(78,205,196,0.18), rgba(255,215,0,0.18))",
                  }}
                >
                  <p className="font-semibold uppercase tracking-[0.28em]" style={{ color: colors.primary }}>
                    Ideal for
                  </p>
                  <p className="mt-2" style={{ color: `${colors.text}cc` }}>
                    Seekers ready to anchor this wisdom in everyday life and share it with loved ones or clients.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div
              className="rounded-3xl border bg-white/80 p-10 shadow-lg backdrop-blur"
              style={{ border: SOFT_PRIMARY_BORDER }}
            >
              <h2 className="text-3xl md:text-4xl" style={{ color: colors.primary, fontFamily: fonts.heading }}>
                Ready to book?
              </h2>
              <p className="mt-3 text-base md:text-lg" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
                Complete the inquiry form and I will personally coordinate dates, location, and any custom touches your
                journey needs. Virtual and hybrid options are available for every class.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {JOURNEY_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border p-6"
                    style={{
                      fontFamily: fonts.body,
                      border: SOFT_PRIMARY_BORDER,
                      background: "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,245,242,0.7))",
                    }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.4em]"
                      style={{ color: colors.secondary }}
                    >
                      {item.step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold" style={{ color: colors.primary }}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: `${colors.text}b3` }}>
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-dashed border-secondary/50 p-5 text-sm md:text-base">
                <p style={{ color: `${colors.text}99`, fontFamily: fonts.body }}>
                  Prefer to chat first? Email{" "}
                  <a href="mailto:info@yasinaslight.com" className="underline" style={{ color: colors.primary }}>
                    info@yasinaslight.com
                  </a>{" "}
                  with your availability and I will follow up within 1-2 business days.
                </p>
              </div>
            </div>

            <aside
              className="rounded-3xl border p-8 shadow-md backdrop-blur"
              style={{
                border: SOFT_SECONDARY_BORDER,
                backgroundColor: "rgba(78, 205, 196, 0.1)",
              }}
            >
              <h2 className="text-2xl" style={{ color: colors.primary, fontFamily: fonts.heading }}>
                The Yasina experience
              </h2>
              <ul className="mt-6 space-y-6">
                {EXPERIENCE_HIGHLIGHTS.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em]" style={{ color: colors.secondary }}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          className="relative mt-20 overflow-hidden rounded-3xl border bg-white/95 shadow-2xl"
          style={{ border: SOFT_PRIMARY_BORDER }}
          aria-labelledby="booking-form-title"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: `
                radial-gradient(circle at 18% 22%, ${colors.secondary}15 0, transparent 45%),
                radial-gradient(circle at 82% 18%, ${colors.accent}12 0, transparent 42%),
                linear-gradient(135deg, rgba(86,61,124,0.08), transparent)
              `,
            }}
          />
          <div className="relative grid gap-0 lg:grid-cols-[1fr_1.1fr]">
            <div
              className="border-b p-10 lg:border-b-0 lg:border-r"
              style={{ borderColor: "rgba(86, 61, 124, 0.12)" }}
            >
              <div className="max-w-md">
                <p className="text-sm uppercase tracking-[0.3em]" style={{ color: `${colors.text}80`, fontFamily: fonts.body }}>
                  Booking Inquiry
                </p>
                <h2
                  id="booking-form-title"
                  className="mt-4 text-3xl leading-snug md:text-4xl"
                  style={{ color: colors.primary, fontFamily: fonts.heading }}
                >
                  Let me know how I can tailor this experience for you.
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
                  Share a bit about what you are calling in, the format you prefer, and any intentions for yourself or
                  your group. I respond personally to each message.
                </p>

                <div
                  className="mt-8 rounded-2xl p-6 text-sm"
                  style={{
                    background: "linear-gradient(140deg, rgba(86,61,124,0.1), rgba(86,61,124,0.05), transparent)",
                  }}
                >
                  <p className="font-semibold uppercase tracking-[0.32em]" style={{ color: colors.primary }}>
                    Currently spotlighting
                  </p>
                  <p className="mt-3 text-lg font-medium" style={{ color: colors.secondary, fontFamily: fonts.heading }}>
                    {selectedClass.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: `${colors.text}b3`, fontFamily: fonts.body }}>
                    {selectedClass.duration} | {selectedClass.price}
                  </p>
                </div>
              </div>
            </div>

            <form className="p-10" onSubmit={handleSubmit} noValidate>
              {isCaptchaConfigured && <div id={hcaptchaContainerId} style={{ display: "none" }} />}

              <div className="grid gap-6 md:grid-cols-2" style={{ fontFamily: fonts.body }}>
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: colors.primary }}>
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleFieldChange("name")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: colors.primary }}
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleFieldChange("email")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: colors.primary }}
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleFieldChange("phone")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="classInterest"
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: colors.primary }}
                  >
                    Which class?
                  </label>
                  <select
                    id="classInterest"
                    name="classInterest"
                    value={formData.classInterest}
                    onChange={handleFieldChange("classInterest")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                  >
                    {CLASS_OFFERINGS.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <label
                    htmlFor="timeframe"
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: colors.primary }}
                  >
                    Preferred timing (optional)
                  </label>
                  <input
                    id="timeframe"
                    name="timeframe"
                    type="text"
                    placeholder="Share ideal dates, days of the week, or location preferences."
                    value={formData.timeframe}
                    onChange={handleFieldChange("timeframe")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: colors.primary }}
                  >
                    Tell me about your intentions*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleFieldChange("message")}
                    className="mt-2 rounded-xl bg-white px-4 py-3 text-sm input-surface focus:outline-none focus-visible:outline-none"
                    placeholder="Let me know what you are hoping to explore, who will attend, and any accommodations that help you feel supported."
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm" style={{ fontFamily: fonts.body }}>
                {statusMessage && (
                  <p
                    className={statusMessage.type === "success" ? "text-green-600" : "text-red-600"}
                    role="status"
                    aria-live="polite"
                  >
                    {statusMessage.text}
                  </p>
                )}

                {!isCaptchaConfigured && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700" role="alert">
                    Our booking form is temporarily offline while we finish security updates. Please email{" "}
                    <a href="mailto:info@yasinaslight.com" className="underline">
                      info@yasinaslight.com
                    </a>{" "}
                    to reserve your spot.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !isCaptchaConfigured || !isHcaptchaReady}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral shadow-lg transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  style={{ backgroundColor: colors.primary, color: colors.neutral }}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>

                <p className="text-xs" style={{ color: `${colors.text}80` }}>
                  I respect your inbox. You will only receive personal responses regarding your class inquiry.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassesPage;
