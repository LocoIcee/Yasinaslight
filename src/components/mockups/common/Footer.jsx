import React from "react";

const Footer = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  return (
    <footer
      className="w-full py-8"
      style={{
        background: `linear-gradient(to top, ${colors.primary}, ${colors.primary}F0)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sacred geometry overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(/assets/mockups/sacred-geometry.png)`,
          backgroundSize: "cover",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo and tagline */}
        <div className="flex flex-col items-center mb-8">
          <div 
            className="w-16 h-16 mb-2"
            style={{
              backgroundImage: "url(/assets/mockups/tree-of-life.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1.2)",
            }}
          ></div>
          <h3 
            className="text-lg"
            style={{ 
              color: colors.neutral,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Yasina's Light
          </h3>
          <p 
            className="text-sm mt-1"
            style={{ 
              color: `${colors.neutral}CC`,
            }}
          >
            Define your Being
          </p>
        </div>

        {/* Social media links */}
        <div className="flex justify-center gap-6 mb-8">
          {['facebook', 'instagram', 'twitter', 'youtube'].map((platform, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: `${colors.neutral}20`,
                border: `1px solid ${colors.neutral}40`,
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ color: colors.neutral }}>
                {platform === 'facebook' && 'f'}
                {platform === 'instagram' && 'in'}
                {platform === 'twitter' && 'x'}
                {platform === 'youtube' && 'yt'}
              </span>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {["Home", "About", "Services", "Products", "Classes", "Contact"].map((link, index) => (
            <a 
              key={index}
              href="#" 
              className="text-sm hover:underline"
              style={{ color: `${colors.neutral}CC` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm" style={{ color: `${colors.neutral}99` }}>
          <p>Copyright © 2024 Yasinaslight – All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;