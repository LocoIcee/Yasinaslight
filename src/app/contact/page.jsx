'use client';
import React, { useState } from "react";

import useHcaptcha from "@/hooks/useHcaptcha";

const SERVICE_OPTIONS = [
  { value: "general", label: "General Inquiry" },
  { value: "reiki", label: "Reiki Healing" },
  { value: "reflexology", label: "Reflexology" },
  { value: "intuitive-counseling", label: "Intuitive Counseling" },
  { value: "chakra-balancing", label: "Chakra Balancing" },
  { value: "crystal-healing", label: "Crystal Healing" },
  { value: "meditation-guidance", label: "Meditation & Mindfulness" }
];

const CONTACT_SUCCESS_MESSAGE = "Thank you for your message. I'll respond as soon as possible!";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [serviceInterest, setServiceInterest] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const rawHcaptchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY?.trim();
  const hcaptchaSiteKey = rawHcaptchaSiteKey ? rawHcaptchaSiteKey : null;
  const { execute, isReady: isHcaptchaReady, containerId: hcaptchaContainerId, reset: resetHcaptcha } = useHcaptcha(hcaptchaSiteKey);
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

  const handleFieldChange = (setter) => (event) => {
    setter(event.target.value);
    resetFeedback();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
    setServiceInterest("general");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFeedback();

    if (!isCaptchaConfigured) {
      setStatusMessage({ type: "error", text: "This form is temporarily unavailable while we finish security setup. Please try again later." });
      return;
    }

    setIsSubmitting(true);

    try {
      const trimmedName = name.trim();
      const trimmedEmail = email.trim();
      const trimmedSubject = subject.trim();
      const trimmedMessage = message.trim();
      const trimmedPhone = phone.trim();

      if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
        throw new Error("Please fill in all required fields before sending.");
      }

      const captchaToken = await execute("contact_form");

      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          subject: trimmedSubject,
          message: trimmedMessage,
          serviceInterest,
          captchaToken
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Something went wrong while sending your message.");
      }

      setStatusMessage({ type: "success", text: CONTACT_SUCCESS_MESSAGE });
      resetForm();
      resetHcaptcha();
      setSubmitted(true);
    } catch (error) {
      setStatusMessage({ type: "error", text: error.message || "We could not send your message. Please try again." });
      setSubmitted(false);
      if (isCaptchaConfigured) {
        resetHcaptcha();
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Page Header */}
      <div
        className="py-12 text-center relative overflow-hidden hero-gradient-primary"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(/assets/sacred-geometry.png)`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        ></div>

        <h1
          className="text-3xl md:text-4xl relative z-10 font-heading text-neutral"
        >
          CONNECT WITH ME
        </h1>
        <p
          className="mt-2 text-lg relative z-10 text-neutral-bright"
        >
          Let's Begin Your Healing Journey Together
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-heading text-primary">
                A Sacred Space Online
              </h2>
              <p className="text-body">
                All offerings are held virtually or by arrangement. Reach out anytime and we&apos;ll co-create the container that feels most supportive for you.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-neutral-soft">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary-tint">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading text-primary mb-2">Email</h3>
                    <p className="text-body mb-2">
                      I personally read every message and respond within 1-2 business days.
                    </p>
                    <a
                      className="inline-flex items-center text-secondary underline"
                      href="mailto:info@yasinaslight.com"
                    >
                      info@yasinaslight.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-primary-soft">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary-tint">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 1.343-3 3v1H7a1 1 0 00-1 1v4h12v-4a1 1 0 00-1-1h-2v-1c0-1.657-1.343-3-3-3z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading text-primary mb-2">Session Availability</h3>
                    <p className="text-body">
                      Sessions are offered Monday through Saturday with select evening appointments. Share your preferred windows and I&apos;ll send through aligned times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-tint p-6 rounded-xl border border-primary-soft">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading text-primary mb-2">Working Together</h3>
                    <p className="text-body">
                      Most experiences are hosted virtually so you can receive support wherever you are in the world. For pop-ups or in-person immersions, join the newsletter to be the first to know.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" id="booking">
            <h2 
              className="text-2xl mb-6 font-heading text-primary"
            >
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                {!isCaptchaConfigured && (
                  <p className="mb-4 text-sm text-red-600" role="alert">
                    This form is temporarily unavailable while we finalize security configuration. Please check back shortly.
                  </p>
                )}
                {isCaptchaConfigured && (
                  <div id={hcaptchaContainerId} style={{ display: "none" }} />
                )}
                {submitted ? (
                  <div className="space-y-4 text-center">
                    <p
                      className="text-primary text-base font-medium"
                      role="status"
                      aria-live="polite"
                    >
                      {statusMessage?.text || "Thank you for your message. I'll respond as soon as possible!"}
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
                      className="inline-flex items-center justify-center rounded-md border border-secondary px-4 py-2 text-secondary transition-all hover:bg-secondary/10"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleFieldChange(setName)}
                          required
                          className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleFieldChange(setEmail)}
                          required
                          className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                        />
                      </div>
                    </div>

                    {/* Phone and Service Interest */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={handleFieldChange(setPhone)}
                          className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="serviceInterest"
                          className="block mb-2 text-sm font-medium text-primary"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          value={serviceInterest}
                          onChange={handleFieldChange(setServiceInterest)}
                          className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                        >
                          {SERVICE_OPTIONS.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-primary"
                      >
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={handleFieldChange(setSubject)}
                        required
                        className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                      />
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-primary"
                      >
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleFieldChange(setMessage)}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={
                          isSubmitting || !isCaptchaConfigured || !isHcaptchaReady
                        }
                        className={`w-full md:w-auto px-6 py-3 rounded-md transition-all bg-secondary text-neutral ${
                          isSubmitting || !isCaptchaConfigured || !isHcaptchaReady
                            ? "opacity-75 cursor-not-allowed"
                            : "hover:shadow-md"
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                      {statusMessage && statusMessage.type === "error" && (
                        <p
                          className="text-sm text-red-600"
                          role="status"
                          aria-live="polite"
                        >
                          {statusMessage.text}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </form>

            {/* Booking Information */}
            <div className="mt-12">
              <h2 
                className="text-2xl mb-6 font-heading text-primary"
              >
                Book a Session
              </h2>
              
              <div 
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary"
              >
                <div className="mb-6">
                  <h3 
                    className="text-lg font-medium mb-2 text-primary"
                  >
                    Booking Information
                  </h3>
                  <p className="mb-4 text-body">
                    To schedule an appointment, send a note through the form above or email directly. I typically accommodate sessions within 1-2 weeks of your request and will confirm details personally.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 
                    className="text-lg font-medium mb-2 text-primary"
                  >
                    Payment Methods
                  </h3>
                  <p className="mb-2 text-body">
                    I accept the following payment methods:
                  </p>
                  <ul className="list-disc list-inside mb-4 text-body">
                    <li>Cash</li>
                    <li>Credit/Debit Cards</li>
                    <li>Venmo, PayPal, Zelle</li>
                    <li>Health Savings Account (for eligible services)</li>
                  </ul>
                </div>

                <div>
                  <h3 
                    className="text-lg font-medium mb-2 text-primary"
                  >
                    Cancellation Policy
                  </h3>
                  <p className="text-body">
                    Please provide at least 24 hours notice for cancellations. Late cancellations 
                    (less than 24 hours) and no-shows may be subject to a 50% fee of the scheduled service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
