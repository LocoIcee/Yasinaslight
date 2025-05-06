import React from "react";

const ColorPalette = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  const colorItems = [
    { name: "PRIMARY COLOR", color: colors.primary, description: "Deep Purple (#563D7C)" },
    { name: "SECONDARY COLOR", color: colors.secondary, description: "Soft Teal (#4ECDC4)" },
    { name: "ACCENT COLOR", color: colors.accent, description: "Golden Yellow (#FFD700)" },
    { name: "NEUTRAL COLOR", color: colors.neutral, description: "Warm White (#F8F5F2)" },
    { name: "TEXT COLOR", color: colors.text, description: "Dark Charcoal (#333333)" },
  ];

  // Font examples
  const fontExamples = {
    heading: {
      name: "HEADINGS: CORMORANT GARAMOND",
      examples: [
        { text: "Heading 1: Define Your Being", size: "text-3xl" },
        { text: "Heading 2: Spiritual Guidance", size: "text-2xl" },
        { text: "Heading 3: Healing Services", size: "text-xl" },
      ],
      fontFamily: "'Cormorant Garamond', serif",
    },
    body: {
      name: "BODY: OPEN SANS",
      examples: [
        {
          text: "Regular text for maximum readability with proper line height and spacing to ensure content is easy to digest.",
        },
      ],
      fontFamily: "'Open Sans', sans-serif",
    },
    accent: {
      name: "ACCENT: TANGERINE",
      examples: [
        { text: "You cannot fail at being you! Just be true", size: "text-2xl" },
      ],
      fontFamily: "'Tangerine', cursive",
    },
  };

  // Button styles
  const buttonStyles = [
    {
      name: "PRIMARY BUTTON",
      style: {
        background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
        color: colors.primary,
        padding: "0.75rem 2rem",
        borderRadius: "9999px",
        fontWeight: "bold",
        boxShadow: "0 0 15px rgba(255,215,0,0.3)",
      },
      text: "Begin Your Healing Journey",
    },
    {
      name: "SECONDARY BUTTON",
      style: {
        background: "transparent",
        color: colors.secondary,
        padding: "0.5rem 1.5rem",
        borderRadius: "0.375rem",
        border: `1px solid ${colors.secondary}`,
        fontWeight: "500",
      },
      text: "Learn More",
    },
    {
      name: "TEXT LINK",
      style: {
        color: colors.primary,
        fontWeight: "500",
        borderBottom: `1px solid ${colors.primary}`,
        paddingBottom: "2px",
      },
      text: "View all services >",
    },
  ];

  return (
    <div className="mockup-container mb-24">
      <h1 className="text-3xl font-serif text-center mb-2">
        Color Palette & Typography
      </h1>
      <p className="text-center mb-8">Visual style guide for the Yasina's Light redesign</p>

      {/* Main mockup container */}
      <div
        className="rounded-lg shadow-lg overflow-hidden"
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          border: "1px solid #ddd",
          backgroundColor: "white",
        }}
      >
        {/* Color palette section */}
        <div className="p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ color: colors.primary }}>
            COLOR PALETTE
          </h2>

          <div className="space-y-4">
            {colorItems.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-2">
                  <p className="text-sm font-semibold mb-2">{item.name}</p>
                </div>
                <div className="md:w-2/3 flex rounded-md overflow-hidden">
                  <div
                    className="w-24 h-14"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1 p-3 bg-gray-50">
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography section */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl mb-6 text-center" style={{ color: colors.primary }}>
            TYPOGRAPHY
          </h2>

          <div className="space-y-8">
            {/* Headings */}
            <div className="p-4 bg-white rounded-md shadow-sm">
              <p className="text-sm font-semibold mb-4">{fontExamples.heading.name}</p>
              <div className="space-y-3">
                {fontExamples.heading.examples.map((example, index) => (
                  <p
                    key={index}
                    className={example.size}
                    style={{ color: colors.primary, fontFamily: fontExamples.heading.fontFamily }}
                  >
                    {example.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Body text */}
            <div className="p-4 bg-white rounded-md shadow-sm">
              <p className="text-sm font-semibold mb-4">{fontExamples.body.name}</p>
              <div className="space-y-3">
                {fontExamples.body.examples.map((example, index) => (
                  <p
                    key={index}
                    style={{ color: colors.text, fontFamily: fontExamples.body.fontFamily, lineHeight: 1.7 }}
                  >
                    {example.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Accent text */}
            <div className="p-4 bg-white rounded-md shadow-sm">
              <p className="text-sm font-semibold mb-4">{fontExamples.accent.name}</p>
              <div className="space-y-3">
                {fontExamples.accent.examples.map((example, index) => (
                  <p
                    key={index}
                    className={example.size}
                    style={{ color: colors.primary, fontFamily: fontExamples.accent.fontFamily }}
                  >
                    {example.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Button styles section */}
        <div className="p-8">
          <h2 className="text-2xl mb-6 text-center" style={{ color: colors.primary }}>
            BUTTON STYLES
          </h2>

          <div className="space-y-6">
            {buttonStyles.map((button, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 p-2">
                  <p className="text-sm font-semibold mb-2">{button.name}</p>
                </div>
                <div className="md:w-2/3 flex justify-center p-6 bg-gray-50 rounded-md">
                  <button style={button.style}>{button.text}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="p-8 bg-gray-50">
          <h2 className="text-2xl mb-6 text-center" style={{ color: colors.primary }}>
            DECORATIVE ELEMENTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-md shadow-sm">
              <p className="text-sm font-semibold mb-3">Light Rays</p>
              <div 
                className="h-32 rounded-md relative overflow-hidden"
                style={{
                  background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%)",
                  }}
                ></div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-md shadow-sm">
              <p className="text-sm font-semibold mb-3">Sacred Geometry Patterns</p>
              <div 
                className="h-32 rounded-md relative overflow-hidden"
                style={{
                  background: colors.neutral,
                }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url(/assets/mockups/sacred-geometry.png)`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Style guide for the Yasina's Light website redesign</p>
      </div>
    </div>
  );
};

export default ColorPalette;