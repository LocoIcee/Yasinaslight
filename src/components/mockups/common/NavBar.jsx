import React from "react";

const NavBar = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  // Navigation items
  const navItems = [
    { name: "HOME", hasDropdown: false },
    { name: "ABOUT", hasDropdown: false },
    { name: "SERVICES", hasDropdown: true },
    { name: "PRODUCTS", hasDropdown: true },
    { name: "CLASSES & EVENTS", hasDropdown: false },
    { name: "CONTACT", hasDropdown: false },
  ];

  return (
    <div
      className="w-full px-6 py-4 flex justify-between items-center"
      style={{
        backgroundColor: colors.primary,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo - smaller version for nav */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10"
          style={{
            backgroundImage: "url(/assets/mockups/tree-of-life.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <span 
          className="text-xl hidden md:block" 
          style={{ 
            color: colors.neutral,
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Yasina's Light
        </span>
      </div>

      {/* Navigation menu */}
      <nav>
        <ul className="flex space-x-1 md:space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="relative px-2 py-2 inline-block text-xs md:text-sm hover:opacity-90 transition-all"
                style={{ 
                  color: colors.neutral,
                  position: "relative", 
                }}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">{item.name.substring(0, 1)}</span>
                {item.hasDropdown && <span className="ml-1">▾</span>}
                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ 
                    backgroundColor: colors.accent,
                  }}
                ></div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;