import React from "react";

const ServicesPageMockup = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  // Services data
  const services = [
    {
      title: "REIKI MASTER",
      description:
        "Reiki is a Japanese technique for stress reduction and relaxation that promotes healing. As a Reiki Master, Yasina channels universal energy to help balance the body's energy centers and facilitate natural healing processes.",
      icon: "/assets/mockups/reiki-icon.png",
    },
    {
      title: "REFLEXOLOGY",
      description:
        "Reflexology applies pressure to specific points on the feet, hands, and ears that correspond to different body organs and systems. This therapeutic practice stimulates the body's natural healing abilities.",
      icon: "/assets/mockups/reflexology-icon.png",
    },
    {
      title: "INTUITIVE COUNSELING",
      description:
        "Through intuitive counseling, Yasina connects with your energy to provide guidance aligned with your highest good. This spiritual approach helps reveal insights and confirm what resonates with your soul.",
      icon: "/assets/mockups/counseling-icon.png",
    },
    {
      title: "ENTITY CLEARING",
      description:
        "Entity clearing helps release energetic attachments that may be causing blocks in your life. This spiritual cleansing creates space for more positive energy and personal growth.",
      icon: "/assets/mockups/entity-clearing-icon.png",
    },
    {
      title: "CARD READINGS",
      description:
        "Card readings offer guidance through symbolic imagery and intuitive interpretation. Yasina uses various decks to help you gain clarity on situations and potential paths forward.",
      icon: "/assets/mockups/card-reading-icon.png",
    },
    {
      title: "CRYSTALS",
      description:
        "Crystal healing harnesses the unique vibrational properties of different stones to balance energy and promote healing. Learn which crystals can support your specific needs and intentions.",
      icon: "/assets/mockups/crystals-icon.png",
    },
  ];

  return (
    <div className="mockup-container mb-24">
      <h1 className="text-3xl font-serif text-center mb-2">
        Services Page Redesign Mockup
      </h1>
      <p className="text-center mb-6">
        Visual representation of the new services page design
      </p>

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
              HEALING MODALITIES
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
              Discover the various healing services offered to support your
              journey toward wellness and spiritual growth
            </p>
          </div>
        </div>

        {/* Services grid section */}
        <div className="p-8 md:p-12 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Service Cards */}
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition-all hover:scale-105"
                style={{
                  border: "1px solid rgba(86,61,124,0.1)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                }}
              >
                {/* Service header */}
                <div
                  className="p-6 text-center"
                  style={{
                    backgroundColor: colors.primary,
                    backgroundImage: `linear-gradient(45deg, ${colors.primary}, rgba(86,61,124,0.8))`,
                  }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-3 p-2 rounded-full"
                    style={{
                      backgroundImage: `url(${service.icon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      boxShadow: `0 0 15px ${colors.accent}50`,
                    }}
                  ></div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: colors.neutral }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Service description */}
                <div className="p-6 bg-white">
                  <p
                    className="text-sm mb-6"
                    style={{ color: colors.text, lineHeight: 1.6 }}
                  >
                    {service.description}
                  </p>
                  <div className="text-center">
                    <button
                      className="px-6 py-2 rounded-md transition-all"
                      style={{
                        backgroundColor: "transparent",
                        color: colors.secondary,
                        border: `1px solid ${colors.secondary}`,
                        fontWeight: "500",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action section */}
        <div
          className="p-8 text-center"
          style={{
            background: `linear-gradient(135deg, rgba(86,61,124,0.05), rgba(78,205,196,0.1))`,
          }}
        >
          <h2
            className="text-2xl mb-4"
            style={{
              color: colors.primary,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Ready to Begin Your Healing Journey?
          </h2>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{
              color: colors.text,
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Schedule a consultation to discover which healing modalities would be
            most beneficial for your specific needs.
          </p>
          <button
            className="px-8 py-3 rounded-full transition-all hover:scale-105"
            style={{
              background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
              color: colors.primary,
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(255,215,0,0.3)",
            }}
          >
            Book a Session
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Mockup of redesigned services page for Yasina's Light</p>
      </div>
    </div>
  );
};

export default ServicesPageMockup;