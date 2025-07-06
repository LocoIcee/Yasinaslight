'use client';
import React, { useState } from "react";
import { colors, fonts } from "@/utils/constants";
import PlaceholderImage from "@/utils/PlaceholderImage";

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
    <div>
      {/* Page Header */}
      <div
        className="py-12 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.primary}DD)`,
        }}
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
          className="text-3xl md:text-4xl relative z-10"
          style={{ color: colors.neutral, fontFamily: fonts.serif }}
        >
          CONNECT WITH ME
        </h1>
        <p
          className="mt-2 text-lg relative z-10"
          style={{ color: `${colors.neutral}DD` }}
        >
          Let's Begin Your Healing Journey Together
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h2 
              className="text-2xl mb-6"
              style={{ color: colors.primary, fontFamily: fonts.serif }}
            >
              Contact Information
            </h2>

            {/* Address Card */}
            <div 
              className="mb-8 p-6 rounded-lg shadow-sm"
              style={{ backgroundColor: colors.neutral + "40" }}
            >
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-lg font-medium mb-1"
                    style={{ color: colors.primary }}
                  >
                    Location
                  </h3>
                  <p className="text-sm mb-1" style={{ color: colors.text }}>
                    Yasina's Light Healing Center
                  </p>
                  <p className="text-sm mb-1" style={{ color: colors.text }}>
                    123 Harmony Way, Suite 4B
                  </p>
                  <p className="text-sm" style={{ color: colors.text }}>
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className="mb-8 p-6 rounded-lg shadow-sm"
              style={{ backgroundColor: colors.neutral + "40" }}
            >
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-lg font-medium mb-1"
                    style={{ color: colors.primary }}
                  >
                    Email
                  </h3>
                  <p className="text-sm" style={{ color: colors.text }}>
                    <a 
                      href="mailto:info@yasinaslight.com"
                      style={{ color: colors.secondary, textDecoration: "underline" }}
                    >
                      info@yasinaslight.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div 
              className="mb-8 p-6 rounded-lg shadow-sm"
              style={{ backgroundColor: colors.neutral + "40" }}
            >
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-lg font-medium mb-1"
                    style={{ color: colors.primary }}
                  >
                    Phone
                  </h3>
                  <p className="text-sm" style={{ color: colors.text }}>
                    <a 
                      href="tel:+13105551234"
                      style={{ color: colors.secondary, textDecoration: "underline" }}
                    >
                      (310) 555-1234
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div 
              className="mb-8 p-6 rounded-lg shadow-sm"
              style={{ backgroundColor: colors.neutral + "40" }}
            >
              <div className="flex items-start">
                <div 
                  className="mr-4 p-3 rounded-full"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.primary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 
                    className="text-lg font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Office Hours
                  </h3>
                  <div className="grid grid-cols-2 gap-1" style={{ color: colors.text }}>
                    <p className="text-sm">Monday - Friday:</p>
                    <p className="text-sm">9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Saturday:</p>
                    <p className="text-sm">10:00 AM - 4:00 PM</p>
                    <p className="text-sm">Sunday:</p>
                    <p className="text-sm">Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10">
              <h3 
                className="text-lg font-medium mb-4"
                style={{ color: colors.primary }}
              >
                Find Us
              </h3>
              <PlaceholderImage 
                height="250px" 
                text="Google Map will be embedded here"
                bgColor={colors.primary + "10"}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3" id="booking">
            <h2 
              className="text-2xl mb-6"
              style={{ color: colors.primary, fontFamily: fonts.serif }}
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
                      className="block mb-2 text-sm font-medium"
                      style={{ color: colors.primary }}
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
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: colors.primary + "30",
                        focusRing: colors.primary + "40" 
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-sm font-medium"
                      style={{ color: colors.primary }}
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
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: colors.primary + "30",
                        focusRing: colors.primary + "40" 
                      }}
                    />
                  </div>
                </div>

                {/* Phone and Service Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block mb-2 text-sm font-medium"
                      style={{ color: colors.primary }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: colors.primary + "30",
                        focusRing: colors.primary + "40" 
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="serviceInterest" 
                      className="block mb-2 text-sm font-medium"
                      style={{ color: colors.primary }}
                    >
                      Service of Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        borderColor: colors.primary + "30",
                        focusRing: colors.primary + "40" 
                      }}
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
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: colors.primary + "30",
                      focusRing: colors.primary + "40" 
                    }}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
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
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: colors.primary + "30",
                      focusRing: colors.primary + "40" 
                    }}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 rounded-md transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.neutral,
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            {/* Booking Information */}
            <div className="mt-12">
              <h2 
                className="text-2xl mb-6"
                style={{ color: colors.primary, fontFamily: fonts.serif }}
              >
                Book a Session
              </h2>
              
              <div 
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ borderLeft: `4px solid ${colors.secondary}` }}
              >
                <div className="mb-6">
                  <h3 
                    className="text-lg font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Booking Information
                  </h3>
                  <p className="mb-4" style={{ color: colors.text }}>
                    To schedule an appointment, please use the contact form above, call during office hours, or email directly. 
                    I'm typically able to accommodate appointments within 1-2 weeks of request.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 
                    className="text-lg font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Payment Methods
                  </h3>
                  <p className="mb-2" style={{ color: colors.text }}>
                    I accept the following payment methods:
                  </p>
                  <ul className="list-disc list-inside mb-4" style={{ color: colors.text }}>
                    <li>Cash</li>
                    <li>Credit/Debit Cards</li>
                    <li>Venmo, PayPal, Zelle</li>
                    <li>Health Savings Account (for eligible services)</li>
                  </ul>
                </div>

                <div>
                  <h3 
                    className="text-lg font-medium mb-2"
                    style={{ color: colors.primary }}
                  >
                    Cancellation Policy
                  </h3>
                  <p style={{ color: colors.text }}>
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
