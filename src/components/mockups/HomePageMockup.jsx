import React from "react";

const HomePageMockup = () => {
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
        Homepage Redesign Mockup
      </h1>
      <p className="text-center mb-6">Visual representation of the new homepage design</p>

      {/* Main mockup container */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          border: "1px solid #ddd",
          position: "relative",
          backgroundColor: colors.neutral,
        }}
      >
        {/* Hero section with gradient background */}
        <div
          style={{
            background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
            padding: "4rem 2rem 5rem",
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
              background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)",
              opacity: 0.4,
              transform: "scale(1.5)",
            }}
          ></div>

          {/* Logo and brand */}
          <div className="relative z-10 text-center">
            <h1
              className="font-serif text-5xl mb-4"
              style={{ color: colors.neutral, fontFamily: "'Cormorant Garamond', serif" }}
            >
              Yasina's Light
            </h1>
            <div
              className="w-40 h-40 mx-auto mb-6 rounded-full"
              style={{
                backgroundImage: "url(/assets/mockups/tree-of-life.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
              }}
            ></div>
            <h2
              className="text-2xl mb-2"
              style={{ color: colors.neutral, fontFamily: "'Open Sans', sans-serif" }}
            >
              DEFINE YOUR BEING
            </h2>
            <p
              className="text-lg italic mb-8"
              style={{ color: colors.neutral, fontFamily: "'Tangerine', cursive", fontSize: "28px" }}
            >
              "You cannot fail at being you! Just be true"
            </p>
            <button
              className="px-8 py-3 rounded-full transition-all hover:scale-105"
              style={{
                background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
                color: colors.primary,
                fontWeight: "bold",
                boxShadow: "0 0 15px rgba(255,215,0,0.5)",
              }}
            >
              Begin Your Healing Journey
            </button>
          </div>
        </div>

        {/* Services preview section */}
        <div className="p-6 md:p-12 bg-white">
          <h2
            className="text-2xl md:text-3xl text-center mb-2"
            style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
          >
            HEALING MODALITIES
          </h2>
          <p
            className="text-center mb-12"
            style={{ color: colors.text, fontFamily: "'Open Sans', sans-serif" }}
          >
            Discover Your Path to Wellness
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Service Card 1 */}
            <div
              className="p-6 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4"
                style={{
                  backgroundImage: "url(/assets/mockups/reiki-icon.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h3
                className="text-lg text-center font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                REIKI MASTER
              </h3>
              <p className="text-center text-sm mb-5" style={{ color: colors.text }}>
                Harmonizing energy flow for balance and healing
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block text-sm font-medium pb-1 border-b-2"
                  style={{ color: colors.secondary, borderColor: colors.secondary }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className="p-6 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4"
                style={{
                  backgroundImage: "url(/assets/mockups/reflexology-icon.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h3
                className="text-lg text-center font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                REFLEXOLOGY
              </h3>
              <p className="text-center text-sm mb-5" style={{ color: colors.text }}>
                Stimulating pressure points for whole-body wellness
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block text-sm font-medium pb-1 border-b-2"
                  style={{ color: colors.secondary, borderColor: colors.secondary }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              className="p-6 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4"
                style={{
                  backgroundImage: "url(/assets/mockups/counseling-icon.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h3
                className="text-lg text-center font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                INTUITIVE COUNSELING
              </h3>
              <p className="text-center text-sm mb-5" style={{ color: colors.text }}>
                Guidance aligned with your highest truth
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block text-sm font-medium pb-1 border-b-2"
                  style={{ color: colors.secondary, borderColor: colors.secondary }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Service Card 4 */}
            <div
              className="p-6 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4"
                style={{
                  backgroundImage: "url(/assets/mockups/entity-clearing-icon.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <h3
                className="text-lg text-center font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                ENTITY CLEARING
              </h3>
              <p className="text-center text-sm mb-5" style={{ color: colors.text }}>
                Release energetic blocks and attachments
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="inline-block text-sm font-medium pb-1 border-b-2"
                  style={{ color: colors.secondary, borderColor: colors.secondary }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block px-6 py-2 rounded-md transition-all"
              style={{
                backgroundColor: "transparent",
                color: colors.primary,
                border: `1px solid ${colors.primary}`,
                fontWeight: "500",
              }}
            >
              View All Services
            </a>
          </div>
        </div>

        {/* Testimonial section */}
        <div
          className="p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(86,61,124,0.05), rgba(78,205,196,0.1))",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/assets/mockups/light-rays.png)',
              backgroundSize: "cover",
              mixBlendMode: "overlay",
            }}
          ></div>

          <h2
            className="text-2xl md:text-3xl text-center mb-2 relative z-10"
            style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="px-2" style={{ color: colors.accent }}>
              ✧
            </span>{" "}
            TRANSFORMATIVE JOURNEYS{" "}
            <span className="px-2" style={{ color: colors.accent }}>
              ✧
            </span>
          </h2>
          <p
            className="text-center mb-8 relative z-10"
            style={{ color: colors.text, fontFamily: "'Open Sans', sans-serif" }}
          >
            Client Healing Experiences
          </p>

          <div
            className="max-w-3xl mx-auto p-8 rounded-lg relative z-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div
              className="text-4xl leading-none mb-4"
              style={{ color: colors.accent, fontFamily: "'Tangerine', cursive" }}
            >
              "
            </div>
            <p
              className="text-center text-lg italic mb-4"
              style={{ color: colors.text, fontFamily: "'Open Sans', sans-serif" }}
            >
              Working with Yasina helped me see clearly after a difficult time. Her intuitive guidance
              illuminated my path forward with remarkable clarity and compassion.
            </p>
            <div
              className="text-4xl leading-none text-right"
              style={{ color: colors.accent, fontFamily: "'Tangerine', cursive" }}
            >
              "
            </div>
            <p className="text-center mt-4 font-medium" style={{ color: colors.primary }}>
              - Sarah M., Calgary
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "rgba(86,61,124,0.3)" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "rgba(86,61,124,0.3)" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "rgba(86,61,124,0.3)" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Mockup of redesigned homepage for Yasina's Light</p>
      </div>
    </div>
  );
};

export default HomePageMockup;