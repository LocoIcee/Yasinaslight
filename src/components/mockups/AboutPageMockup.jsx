import React from "react";

const AboutPageMockup = () => {
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
        About Page Redesign Mockup
      </h1>
      <p className="text-center mb-6">Visual representation of the new about page design</p>

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
              ABOUT YASINA'S LIGHT
            </h1>
            <div
              className="w-24 h-1 mx-auto my-4"
              style={{ backgroundColor: colors.accent }}
            ></div>
          </div>
        </div>

        {/* About content section */}
        <div className="bg-white p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:space-x-10">
            {/* Portrait column */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div
                className="relative mx-auto"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  aspectRatio: "1 / 1.2",
                }}
              >
                {/* Portrait image with ethereal glow effect */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(/assets/mockups/yasina-portrait.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: `0 0 30px ${colors.primary}40`,
                    border: `1px solid ${colors.secondary}30`,
                  }}
                ></div>
                
                {/* Glow effect overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.accent}20 0%, transparent 70%)`,
                    opacity: 0.6,
                  }}
                ></div>
              </div>
              
              {/* Tree of life small icon */}
              <div 
                className="w-20 h-20 mx-auto mt-6"
                style={{
                  backgroundImage: "url(/assets/mockups/tree-of-life.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>

            {/* Content column */}
            <div className="md:w-2/3">
              <h2
                className="text-2xl mb-6"
                style={{
                  color: colors.primary,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                My Healing Journey
              </h2>

              <div className="space-y-6">
                <p style={{ color: colors.text, lineHeight: 1.7 }}>
                  I am in the practice of working with healing energy. I may be a healer but will not refer to myself that way for the reasons that I don't want to be mistaken for someone who will heal you. Only you can heal you. I can offer you energy that can help you heal and will joyfully do so.... We are all healers.
                </p>

                <div
                  className="w-full h-0.5 my-4 opacity-30"
                  style={{ 
                    background: `linear-gradient(to right, transparent, ${colors.secondary}, transparent)` 
                  }}
                ></div>

                <p style={{ color: colors.text, lineHeight: 1.7 }}>
                  As an intuitive, I rarely tell a person what they "need." Instead I allow Spirit to use me as a conduit to help the person get the confirmation they are seeking to realize, based on what already resonates with them on a soul level.
                </p>
                
                <div className="my-4 p-4 italic border-l-4 rounded-sm" style={{ 
                  borderColor: colors.accent,
                  backgroundColor: `${colors.neutral}`,
                  color: colors.primary
                }}>
                  <p>
                    "Have you ever heard that song 'I can see clearly now the rain has gone?' Well that is what I can help you do! We all have gifts. Let me help you find yours."
                  </p>
                </div>

                <p style={{ color: colors.text, lineHeight: 1.7 }}>
                  I have a high vibrational energy with different abilities to tap into your situation. With these abilities I teach you to let go of things not serving you but always remain true to yourself.
                </p>

                <p style={{ color: colors.text, lineHeight: 1.7 }}>
                  I receive my information, both physically and through the universe, with all of my senses. I see, hear, feel, smell and know.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy section */}
        <div
          className="p-8 md:p-12"
          style={{
            background: `linear-gradient(135deg, rgba(86,61,124,0.05), rgba(78,205,196,0.1))`,
          }}
        >
          <h2
            className="text-2xl text-center mb-8"
            style={{
              color: colors.primary,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            <span style={{ color: colors.accent }}>✧</span> MY HEALING PHILOSOPHY <span style={{ color: colors.accent }}>✧</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-center italic mb-6" style={{ fontSize: "1.2rem", color: colors.primary }}>
              "I am a conduit of information & clarity for the ones who need it. As a nurturer and teacher, I am here to give you guidance so you can see clearly, so you can heal."
            </p>

            <div 
              className="w-16 h-16 mx-auto my-8"
              style={{
                backgroundImage: "url(/assets/mockups/crystal-icon.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <p className="text-center" style={{ color: colors.text }}>
              Let the UNIVERSE guide you to whatever you need through our work together.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Mockup of redesigned about page for Yasina's Light</p>
      </div>
    </div>
  );
};

export default AboutPageMockup;