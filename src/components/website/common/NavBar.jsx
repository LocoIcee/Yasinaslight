import React from "react";
import { Link } from "react-router-dom";

// Colors from constants.js
import { colors } from "../utils/constants";
import ImagePlaceholders from "../utils/ImagePlaceholders";
import CartButton from "./CartButton";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Navigation items
  const navItems = [
    { name: "HOME", path: "/", hasDropdown: false },
    { name: "ABOUT", path: "/about", hasDropdown: false },
    { name: "SERVICES", path: "/services", hasDropdown: true },
    { name: "PRODUCTS", path: "/products", hasDropdown: true },
    { name: "CLASSES & EVENTS", path: "/classes", hasDropdown: false },
    { name: "CONTACT", path: "/contact", hasDropdown: false },
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
        <div className="w-10 h-10">
          <ImagePlaceholders.Logo width="100%" height="100%" />
        </div>
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

      <div className="relative md:static">
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Navigation menu */}
        <nav>
          <ul className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:space-x-6 md:items-center`}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative px-2 py-2 inline-block text-sm hover:opacity-90 transition-all group"
                  style={{ 
                    color: colors.neutral,
                    position: "relative", 
                  }}
                >
                  {item.name}
                  {item.hasDropdown && <span className="ml-1">▾</span>}
                  <div
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ 
                      backgroundColor: colors.accent,
                    }}
                  ></div>
                </Link>
              </li>
            ))}
            {/* Only show cart button when there are items in the cart */}
            <CartButton />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
