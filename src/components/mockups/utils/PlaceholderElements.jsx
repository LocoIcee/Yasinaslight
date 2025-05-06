import React from "react";

// Utility component to generate placeholder elements for mockups
const PlaceholderElements = {
  // Generate a tree of life logo placeholder
  TreeOfLife: ({ size = 100, className = "" }) => {
    return (
      <div
        className={`relative ${className}`}
        style={{
          width: size,
          height: size,
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, #563D7C 0%, #4ECDC4 100%)",
            opacity: 0.8,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Simplified Tree of Life pattern */}
          <svg
            viewBox="0 0 100 100"
            width="80%"
            height="80%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD700" strokeWidth="1" />
            <circle cx="50" cy="25" r="10" fill="#FFD700" opacity="0.8" />
            <circle cx="30" cy="40" r="8" fill="#FFD700" opacity="0.8" />
            <circle cx="70" cy="40" r="8" fill="#FFD700" opacity="0.8" />
            <circle cx="20" cy="65" r="8" fill="#FFD700" opacity="0.8" />
            <circle cx="50" cy="65" r="8" fill="#FFD700" opacity="0.8" />
            <circle cx="80" cy="65" r="8" fill="#FFD700" opacity="0.8" />
            <line x1="50" y1="35" x2="50" y2="57" stroke="#FFD700" strokeWidth="2" />
            <line x1="50" y1="25" x2="30" y2="40" stroke="#FFD700" strokeWidth="2" />
            <line x1="50" y1="25" x2="70" y2="40" stroke="#FFD700" strokeWidth="2" />
            <line x1="30" y1="40" x2="20" y2="65" stroke="#FFD700" strokeWidth="2" />
            <line x1="30" y1="40" x2="50" y2="65" stroke="#FFD700" strokeWidth="2" />
            <line x1="70" y1="40" x2="50" y2="65" stroke="#FFD700" strokeWidth="2" />
            <line x1="70" y1="40" x2="80" y2="65" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  },

  // Generate sacred geometry pattern background
  SacredGeometry: ({ className = "", opacity = 0.1 }) => {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{ opacity }}
      >
        <div className="w-full h-full relative">
          {/* Sacred geometry pattern effect */}
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 
                "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px), " +
                "radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px), " +
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 4px, transparent 4px)",
              backgroundSize: "60px 60px, 60px 60px, 120px 120px",
              transform: "rotate(45deg)",
              mixBlendMode: "overlay",
            }}
          />
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 
                "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 15px), " + 
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 15px)",
              mixBlendMode: "overlay",
            }}
          />
        </div>
      </div>
    );
  },

  // Generate light rays effect
  LightRays: ({ className = "", opacity = 0.4 }) => {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{ 
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
          opacity,
          pointerEvents: "none",
        }}
      ></div>
    );
  },

  // Generate service icons
  ServiceIcon: ({ type, size = 60, className = "" }) => {
    let iconContent;
    
    switch (type) {
      case "reiki":
        // Reiki icon - hands with energy 
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <path d="M30,40 Q50,20 70,40" fill="none" stroke="#563D7C" strokeWidth="3" />
            <path d="M30,60 Q50,40 70,60" fill="none" stroke="#563D7C" strokeWidth="3" />
            <circle cx="50" cy="50" r="10" fill="#FFD700" opacity="0.6" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="#FFD700" strokeWidth="1" strokeDasharray="3,3" />
          </svg>
        );
        break;
        
      case "reflexology":
        // Reflexology icon - foot with points
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <path d="M30,30 C40,25 60,25 70,30 C75,45 75,65 60,75 C40,80 30,65 30,55 C30,45 25,35 30,30" fill="none" stroke="#563D7C" strokeWidth="3" />
            <circle cx="40" cy="45" r="3" fill="#4ECDC4" />
            <circle cx="50" cy="40" r="3" fill="#4ECDC4" />
            <circle cx="60" cy="45" r="3" fill="#4ECDC4" />
            <circle cx="45" cy="55" r="3" fill="#4ECDC4" />
            <circle cx="55" cy="60" r="3" fill="#4ECDC4" />
          </svg>
        );
        break;
        
      case "counseling":
        // Intuitive counseling icon - mind with third eye
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <path d="M30,40 C30,25 70,25 70,40 C70,60 55,70 50,75 C45,70 30,60 30,40" fill="none" stroke="#563D7C" strokeWidth="3" />
            <circle cx="50" cy="40" r="5" fill="#FFD700" />
            <path d="M40,55 C40,45 60,45 60,55" fill="none" stroke="#563D7C" strokeWidth="2" />
          </svg>
        );
        break;
        
      case "entity-clearing":
        // Entity clearing icon - shield with clearing energy
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <path d="M50,20 L75,35 L75,60 C75,70 65,80 50,85 C35,80 25,70 25,60 L25,35 L50,20" fill="none" stroke="#563D7C" strokeWidth="3" />
            <path d="M50,30 L65,40 L65,60 C65,65 60,70 50,75 C40,70 35,65 35,60 L35,40 L50,30" fill="none" stroke="#4ECDC4" strokeWidth="2" />
            <path d="M35,55 L45,65 L65,45" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
        break;
        
      case "card-reading":
        // Card reading icon - mystical cards
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <rect x="30" y="30" width="30" height="40" rx="2" fill="none" stroke="#563D7C" strokeWidth="2" transform="rotate(-10,45,50)" />
            <rect x="40" y="35" width="30" height="40" rx="2" fill="none" stroke="#563D7C" strokeWidth="2" transform="rotate(5,55,55)" />
            <circle cx="45" cy="45" r="5" fill="none" stroke="#FFD700" strokeWidth="1" transform="rotate(-10,45,50)" />
            <path d="M42,60 L48,60" stroke="#FFD700" strokeWidth="1" transform="rotate(-10,45,50)" />
            <circle cx="55" cy="50" r="5" fill="none" stroke="#4ECDC4" strokeWidth="1" transform="rotate(5,55,55)" />
            <path d="M52,65 L58,65" stroke="#4ECDC4" strokeWidth="1" transform="rotate(5,55,55)" />
          </svg>
        );
        break;
        
      case "crystals":
        // Crystals icon - geometric crystal shapes
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <path d="M40,30 L55,40 L55,70 L40,60 Z" fill="none" stroke="#4ECDC4" strokeWidth="2" />
            <path d="M55,40 L70,30 L70,60 L55,70 Z" fill="none" stroke="#4ECDC4" strokeWidth="2" />
            <path d="M30,50 L40,45 L40,65 L30,70 Z" fill="none" stroke="#563D7C" strokeWidth="2" />
            <path d="M55,40 L40,30 L50,20 L70,30 Z" fill="none" stroke="#FFD700" strokeWidth="2" />
          </svg>
        );
        break;
        
      default:
        // Generic placeholder icon
        iconContent = (
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#F8F5F2" stroke="#563D7C" strokeWidth="2" />
            <text x="50" y="55" textAnchor="middle" fill="#563D7C" fontSize="16">Icon</text>
          </svg>
        );
    }
    
    return (
      <div
        className={`${className}`}
        style={{
          width: size,
          height: size,
        }}
      >
        {iconContent}
      </div>
    );
  },
  
  // Location/map placeholder
  MapPlaceholder: ({ width = "100%", height = "300px", className = "" }) => {
    return (
      <div 
        className={`relative ${className}`} 
        style={{
          width,
          height,
          backgroundColor: "#E8EEF4",
          overflow: "hidden"
        }}
      >
        {/* Grid lines */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "linear-gradient(#CCDDEE 1px, transparent 1px), linear-gradient(90deg, #CCDDEE 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.5
          }}
        ></div>
        
        {/* Roads */}
        <div 
          className="absolute" 
          style={{
            left: "10%",
            top: "30%", 
            width: "80%",
            height: "8px",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px #AABBCC"
          }}
        ></div>
        
        <div 
          className="absolute" 
          style={{
            left: "50%",
            top: "10%", 
            width: "8px",
            height: "80%",
            backgroundColor: "#FFFFFF",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px #AABBCC"
          }}
        ></div>
        
        {/* Location pin */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -100%)"
          }}
        >
          <div style={{ 
            width: "20px", 
            height: "20px", 
            borderRadius: "50% 50% 50% 0", 
            backgroundColor: "#563D7C",
            transform: "rotate(-45deg)",
            boxShadow: "0 0 10px rgba(86, 61, 124, 0.5)"
          }}>
            <div style={{ 
              width: "10px", 
              height: "10px", 
              borderRadius: "50%", 
              backgroundColor: "#F8F5F2",
              position: "absolute",
              left: "5px",
              top: "5px"
            }}></div>
          </div>
          <div style={{ 
            marginTop: "8px", 
            width: "20px", 
            height: "6px", 
            borderRadius: "50%", 
            backgroundColor: "rgba(86, 61, 124, 0.3)" 
          }}></div>
        </div>
        
        <div 
          className="absolute bottom-2 right-2 text-xs" 
          style={{ color: "#666666" }}
        >
          Map placeholder
        </div>
      </div>
    );
  },
  
  // Create a portrait placeholder
  Portrait: ({ size = 200, className = "" }) => {
    return (
      <div
        className={`relative rounded-lg overflow-hidden ${className}`}
        style={{
          width: size,
          height: size * 1.2,
          backgroundColor: "#F0F0F0",
        }}
      >
        {/* Simple silhouette */}
        <div
          className="absolute"
          style={{
            top: "20%",
            left: "50%",
            width: "40%",
            height: "30%",
            borderRadius: "50%",
            backgroundColor: "#AAA",
            transform: "translateX(-50%)",
          }}
        ></div>
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: "60%",
            height: "40%",
            borderTopLeftRadius: "40%",
            borderTopRightRadius: "40%",
            backgroundColor: "#AAA",
            transform: "translateX(-50%)",
          }}
        ></div>
        <div className="absolute bottom-3 w-full text-center text-xs text-gray-500">
          Portrait Placeholder
        </div>
      </div>
    );
  },

  // Create contact icons
  ContactIcon: ({ type, size = 30, className = "" }) => {
    let iconContent;
    
    switch (type) {
      case "location":
        iconContent = (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#563D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#563D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
        break;
        
      case "phone":
        iconContent = (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3728C21.0391 21.7479 20.5117 21.9587 19.9613 21.9587C19.9 21.9587 19.84 21.9587 19.78 21.9487C16.7429 21.5624 13.7871 20.5326 11.13 18.9287C8.65 17.4444 6.48 15.2744 5 12.7887C3.39 10.1315 2.36 7.17558 1.98 4.13866C1.97 4.07586 1.97 4.01586 1.97 3.95587C1.97 3.40547 2.18 2.87806 2.56 2.50304C2.93 2.12802 3.46 1.91787 4 1.91787H7C7.94 1.91787 8.72 2.61112 8.88 3.53363C9 4.14384 9.2 4.73846 9.47 5.30388C9.8 5.99713 9.63 6.81929 9.09 7.27007L7.97 8.35328C9.34 10.9094 11.61 13.1795 14.17 14.5487L15.29 13.4287C15.74 12.8887 16.57 12.7182 17.26 13.0486C17.83 13.3185 18.42 13.5185 19.03 13.6386C19.96 13.8087 20.65 14.5885 20.65 15.5285V16.92H22Z" stroke="#563D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
        break;
        
      case "clock":
        iconContent = (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#563D7C" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="#563D7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
        break;

      default:
        // Generic placeholder icon
        iconContent = (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#563D7C" strokeWidth="2"/>
            <path d="M12 8V16" stroke="#563D7C" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 12H16" stroke="#563D7C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
    }
    
    return (
      <div
        className={`${className}`}
        style={{
          width: size,
          height: size,
        }}
      >
        {iconContent}
      </div>
    );
  }
};

export default PlaceholderElements;