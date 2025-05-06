import React from "react";

const ContactPageMockup = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  return (
    <div className="mockup-container mb-24">
      <h1 className="text-3xl font-serif text-center mb-2">
        Contact Page Redesign Mockup
      </h1>
      <p className="text-center mb-6">Visual representation of the new contact page design</p>

      {/* Main mockup container */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          border: "1px solid #ddd",
          backgroundColor: colors.neutral,
        }}
      >
        {/* Page header with gradient background */}
        <div
          style={{
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            padding: "3rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Sacred geometry overlay pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(/assets/mockups/sacred-geometry.png)`,
              backgroundSize: "cover",
              mixBlendMode: "overlay",
            }}
          ></div>

          {/* Light rays effect */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
              opacity: 0.4,
            }}
          ></div>

          {/* Page title */}
          <div className="relative z-10 text-center">
            <h1
              className="font-serif text-4xl"
              style={{
                color: colors.neutral,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              CONNECT WITH YASINA
            </h1>
            <div
              className="w-24 h-1 mx-auto my-4"
              style={{ backgroundColor: colors.accent }}
            ></div>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                color: colors.neutral,
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Begin Your Healing Journey Today
            </p>
          </div>
        </div>

        {/* Contact content section */}
        <div className="bg-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact info column */}
            <div 
              className="md:w-1/3 p-6 rounded-lg"
              style={{
                backgroundColor: colors.neutral,
                border: `1px solid ${colors.secondary}30`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                className="text-xl mb-6 text-center"
                style={{
                  color: colors.primary,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                CONTACT INFORMATION
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 mr-3 flex-shrink-0"
                    style={{
                      backgroundImage: "url(/assets/mockups/location-icon.png)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primary }}>
                      <span style={{ color: colors.accent }}>✧</span> Address
                    </p>
                    <p style={{ color: colors.text }}>
                      Airdrie, Alberta T4B 1X1<br/>
                      Canada
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 mr-3 flex-shrink-0"
                    style={{
                      backgroundImage: "url(/assets/mockups/phone-icon.png)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primary }}>
                      <span style={{ color: colors.accent }}>✧</span> Phone
                    </p>
                    <p style={{ color: colors.text }}>
                      (587) 717-0212
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div 
                    className="w-8 h-8 mt-1 mr-3 flex-shrink-0"
                    style={{
                      backgroundImage: "url(/assets/mockups/clock-icon.png)",
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div>
                    <p className="font-medium" style={{ color: colors.primary }}>
                      <span style={{ color: colors.accent }}>✧</span> Hours
                    </p>
                    <p style={{ color: colors.text }}>
                      Monday – Sunday<br/>
                      By appointment
                    </p>
                    <p className="text-sm mt-1" style={{ color: `${colors.text}99` }}>
                      Mobile and distant services available
                    </p>
                  </div>
                </div>

                {/* Tree of life small icon */}
                <div 
                  className="w-20 h-20 mx-auto mt-8"
                  style={{
                    backgroundImage: "url(/assets/mockups/tree-of-life.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.7,
                  }}
                ></div>
              </div>
            </div>

            {/* Contact form column */}
            <div className="md:w-2/3">
              <h2
                className="text-xl mb-6"
                style={{
                  color: colors.primary,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                SEND A MESSAGE
              </h2>

              <div className="space-y-6">
                {/* Name field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md transition-all focus:ring-2"
                    style={{
                      border: `1px solid ${colors.primary}30`,
                      backgroundColor: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      color: colors.text,
                    }}
                  />
                </div>

                {/* Email field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md transition-all focus:ring-2"
                    style={{
                      border: `1px solid ${colors.primary}30`,
                      backgroundColor: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      color: colors.text,
                    }}
                  />
                </div>

                {/* Phone field */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
                  >
                    Your Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 rounded-md transition-all focus:ring-2"
                    style={{
                      border: `1px solid ${colors.primary}30`,
                      backgroundColor: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      color: colors.text,
                    }}
                  />
                </div>

                {/* Message field */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm font-medium"
                    style={{ color: colors.primary }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 rounded-md transition-all focus:ring-2"
                    style={{
                      border: `1px solid ${colors.primary}30`,
                      backgroundColor: "white",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      color: colors.text,
                    }}
                  ></textarea>
                </div>

                {/* Submit button */}
                <div>
                  <button
                    className="px-8 py-3 rounded-md transition-all hover:scale-105"
                    style={{
                      background: `linear-gradient(45deg, ${colors.secondary}, ${colors.secondary}DD)`,
                      color: "white",
                      fontWeight: "bold",
                      boxShadow: "0 4px 10px rgba(78,205,196,0.3)",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div 
          className="w-full h-64 md:h-80"
          style={{
            backgroundImage: "url(/assets/mockups/map.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: `1px solid ${colors.neutral}`,
          }}
        ></div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Mockup of redesigned contact page for Yasina's Light</p>
      </div>
    </div>
  );
};

export default ContactPageMockup;