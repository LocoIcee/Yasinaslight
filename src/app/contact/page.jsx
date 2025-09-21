'use client';
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceInterest: "general"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I'll respond as soon as possible!");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      serviceInterest: "general"
    });
  };

  // Available services for the dropdown
  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "reiki", label: "Reiki Healing" },
    { value: "reflexology", label: "Reflexology" },
    { value: "intuitive-counseling", label: "Intuitive Counseling" },
    { value: "chakra-balancing", label: "Chakra Balancing" },
    { value: "crystal-healing", label: "Crystal Healing" },
    { value: "meditation-guidance", label: "Meditation & Mindfulness" }
  ];

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
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.phone}
                      onChange={handleInputChange}
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
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                    >
                      {services.map((service) => (
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
                    value={formData.subject}
                    onChange={handleInputChange}
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
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-md bg-white input-surface focus:outline-none focus-visible:outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 rounded-md transition-all hover:shadow-md bg-secondary text-neutral"
                  >
                    Send Message
                  </button>
                </div>
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
