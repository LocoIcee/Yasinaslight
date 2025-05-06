import React from "react";

const MobileMockup = () => {
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
        Mobile Design Mockup
      </h1>
      <p className="text-center mb-6">Visual representation of the mobile responsive design</p>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Mobile homepage mockup */}
        <div
          className="rounded-3xl shadow-lg overflow-hidden border-8"
          style={{
            width: "320px",
            height: "640px",
            margin: "0 auto",
            border: "8px solid #111",
            backgroundColor: colors.neutral,
            position: "relative",
          }}
        >
          {/* Mobile header with hamburger menu */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: colors.primary,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ color: colors.neutral }}
              >
                <span style={{ fontSize: "1.5rem" }}>≡</span>
              </div>
            </div>
            <div style={{ color: colors.neutral, fontWeight: "500" }}>
              Yasina's Light
            </div>
            <div className="w-8 h-8"></div>
          </div>

          {/* Mobile hero section */}
          <div
            style={{
              background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
              padding: "2rem 1rem 3rem",
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
              <div
                className="w-24 h-24 mx-auto mb-4 rounded-full"
                style={{
                  backgroundImage: "url(/assets/mockups/tree-of-life.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
                }}
              ></div>
              <h2
                className="text-xl mb-2"
                style={{ 
                  color: colors.neutral, 
                  fontFamily: "'Open Sans', sans-serif" 
                }}
              >
                DEFINE YOUR BEING
              </h2>
              <p
                className="text-base italic mb-6"
                style={{ 
                  color: colors.neutral, 
                  fontFamily: "'Tangerine', cursive", 
                  fontSize: "24px" 
                }}
              >
                "You cannot fail at being you!"
              </p>
              <button
                className="px-6 py-2 rounded-full text-sm transition-all"
                style={{
                  background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
                  color: colors.primary,
                  fontWeight: "bold",
                  boxShadow: "0 0 15px rgba(255,215,0,0.5)",
                }}
              >
                Begin Your Journey
              </button>
            </div>
          </div>

          {/* Services section */}
          <div className="px-4 py-6">
            <h2
              className="text-lg font-medium text-center mb-4"
              style={{ color: colors.primary }}
            >
              HEALING SERVICES
            </h2>

            {/* Service Card 1 - Scrollable cards */}
            <div
              className="p-4 rounded-lg mb-4"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 shrink-0"
                  style={{
                    backgroundImage: "url(/assets/mockups/reiki-icon.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: colors.primary }}
                  >
                    REIKI MASTER
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: colors.text }}
                  >
                    Harmonizing energy flow
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className="p-4 rounded-lg mb-4"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 shrink-0"
                  style={{
                    backgroundImage: "url(/assets/mockups/counseling-icon.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: colors.primary }}
                  >
                    INTUITIVE COUNSELING
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: colors.text }}
                  >
                    Guidance aligned with your truth
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination indicator */}
            <div className="flex justify-center gap-2 mt-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.primary }}
              ></div>
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(86,61,124,0.3)" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "rgba(86,61,124,0.3)" }}
              ></div>
            </div>

            {/* View all button */}
            <div className="text-center mt-6">
              <a
                href="#"
                className="text-sm inline-block"
                style={{
                  color: colors.secondary,
                  borderBottom: `1px solid ${colors.secondary}`,
                  paddingBottom: "2px",
                }}
              >
                View All Services &gt;
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu expanded mockup */}
        <div
          className="rounded-3xl shadow-lg overflow-hidden border-8"
          style={{
            width: "320px",
            height: "640px",
            margin: "0 auto",
            border: "8px solid #111",
            backgroundColor: colors.neutral,
            position: "relative",
          }}
        >
          {/* Mobile header with hamburger menu */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{
              background: colors.primary,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ 
                  color: colors.neutral,
                  backgroundColor: `${colors.primary}90`
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>✕</span>
              </div>
            </div>
            <div style={{ color: colors.neutral, fontWeight: "500" }}>
              Yasina's Light
            </div>
            <div className="w-8 h-8"></div>
          </div>

          {/* Expanded menu */}
          <div
            className="h-full w-full py-6"
            style={{
              backgroundColor: colors.primary,
              backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.primary}F0)`,
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

            {/* Menu items */}
            <div className="relative z-10 mt-4">
              <div
                className="w-16 h-16 mx-auto mb-6"
                style={{
                  backgroundImage: "url(/assets/mockups/tree-of-life.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.9,
                }}
              ></div>

              {/* Menu list */}
              <ul className="space-y-4 px-6">
                {["HOME", "ABOUT", "SERVICES", "PRODUCTS", "CLASSES & EVENTS", "CONTACT"].map((item, index) => (
                  <li 
                    key={index}
                    className="py-3 text-center border-b"
                    style={{ 
                      color: colors.neutral,
                      borderColor: `${colors.secondary}50`,
                      fontFamily: "'Open Sans', sans-serif"
                    }}
                  >
                    {item}
                    {(item === "SERVICES" || item === "PRODUCTS") && (
                      <span className="ml-2">▾</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social media icons */}
              <div className="flex justify-center gap-4 mt-12">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((platform, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full"
                    style={{
                      backgroundColor: colors.neutral,
                      boxShadow: `0 0 10px ${colors.accent}40`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Mobile design mockups for Yasina's Light</p>
      </div>
    </div>
  );
};

export default MobileMockup;