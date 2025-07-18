'use client';
import React from "react";
import Link from "next/link";

// Colors from constants.js
import { colors } from "@/utils/constants";
import ImagePlaceholders from "@/utils/ImagePlaceholders";

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: "REIKI MASTER",
      description: "Harmonizing energy flow for balance and healing",
      icon: "reiki-icon.png", 
      path: "/services#reiki"
    },
    {
      id: 2,
      title: "REFLEXOLOGY",
      description: "Stimulating pressure points for whole-body wellness",
      icon: "reflexology-icon.png",
      path: "/services#reflexology"
    },
    {
      id: 3,
      title: "INTUITIVE COUNSELING",
      description: "Guidance aligned with your highest truth",
      icon: "counseling-icon.png",
      path: "/services#counseling"
    },
    {
      id: 4,
      title: "ENTITY CLEARING",
      description: "Release energetic blocks and attachments",
      icon: "entity-clearing-icon.png",
      path: "/services#clearing"
    }
  ];

  const testimonials = [
    {
      id: 1,
      text: "Working with Yasina helped me see clearly after a difficult time. Her intuitive guidance illuminated my path forward with remarkable clarity and compassion.",
      author: "Sarah M., Calgary"
    },
    {
      id: 2,
      text: "The energy healing sessions with Yasina transformed not just my physical wellbeing but my entire outlook on life. I've never felt more balanced.",
      author: "Michael K., Edmonton"
    },
    {
      id: 3,
      text: "Yasina has a true gift. Her reflexology treatments addressed chronic pain I've had for years that no traditional medicine could resolve. I'm forever grateful.",
      author: "Jessica T., Vancouver"
    }
  ];

  // Current testimonial state
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  return (
    <>
      {/* Hero section with enhanced gradient background */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(78, 205, 196, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)
          `,
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-70" 
               style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" 
               style={{ top: '60%', left: '85%', animationDelay: '2s' }}></div>
          <div className="absolute w-3 h-3 bg-teal-300 rounded-full animate-pulse opacity-50" 
               style={{ top: '80%', left: '20%', animationDelay: '4s' }}></div>
          <div className="absolute w-1 h-1 bg-yellow-200 rounded-full animate-pulse opacity-80" 
               style={{ top: '30%', left: '70%', animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse opacity-40" 
               style={{ top: '50%', left: '5%', animationDelay: '3s' }}></div>
        </div>

        {/* Sacred geometry overlay pattern */}
        <ImagePlaceholders.HeroBackground />

        {/* Enhanced light rays effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -rotate-45 translate-x-full animate-pulse"></div>

        {/* Main content with enhanced styling */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Elegant title with text shadow */}
          <h1
            className="font-serif text-6xl md:text-7xl mb-6 leading-tight"
            style={{ 
              color: colors.neutral, 
              fontFamily: "'Cormorant Garamond', serif",
              textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.5)',
              letterSpacing: '0.02em'
            }}
          >
            Yasina's Light
          </h1>

          {/* Enhanced logo with glow effect */}
          <div className="relative mb-8 mx-auto w-48 h-48 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div 
              className="relative w-full h-full rounded-full border-4 border-yellow-300 bg-gradient-to-br from-white to-yellow-50 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              style={{ 
                filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))",
                boxShadow: 'inset 0 0 20px rgba(255,215,0,0.3)'
              }}
            >
              <ImagePlaceholders.Logo width="100%" height="100%" />
            </div>
          </div>

          {/* Enhanced tagline with gradient text */}
          <h2
            className="text-2xl md:text-3xl mb-8 font-light leading-relaxed"
            style={{ 
              color: colors.neutral, 
              fontFamily: "'Open Sans', sans-serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              background: `linear-gradient(45deg, ${colors.neutral}, #ffffff)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text'
            }}
          >
            Embrace Your Truth and Let Your Soul Shine.
          </h2>

          {/* Enhanced CTA button with hover effects */}
          <Link
            href="/about"
            className="group relative inline-block px-12 py-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl font-semibold text-lg"
            style={{
              background: `linear-gradient(45deg, ${colors.accent}, #FFC400, #FFE135)`,
              color: colors.primary,
              boxShadow: "0 8px 25px rgba(255,215,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative z-10">Discover My Journey</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
          
          {/* Main content card with glassmorphism effect */}
        <div className="max-w-4xl mx-auto relative z-10 mt-12">
          <div
            className="relative p-12 md:p-16 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.95) 0%, 
                  rgba(255,255,255,0.85) 100%
                ),
                radial-gradient(circle at 30% 70%, rgba(255,215,0,0.1) 0%, transparent 50%)
              `,
              boxShadow: '0 25px 50px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-teal-400 to-transparent opacity-40"></div>
            
            {/* Quote with enhanced typography */}
            <div className="relative">
              <div className="absolute -top-6 -left-4 text-6xl font-serif text-yellow-400 opacity-30">"</div>
              <p
                className="text-center text-xl md:text-2xl leading-relaxed font-light relative z-10"
                style={{ 
                  color: colors.text, 
                  fontFamily: "'Open Sans', sans-serif",
                  lineHeight: '1.7'
                }}
              >
                You were born with a unique purpose. In reconnecting with your authentic self, you unlock the clarity, peace, and power that guide you forward. You're not here to struggle; you're here to shine, aligned with your true essence and the universe's support.
              </p>
              <div className="absolute -bottom-4 -right-4 text-6xl font-serif text-teal-400 opacity-30 rotate-180">"</div>
            </div>

            {/* Decorative flourish */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;