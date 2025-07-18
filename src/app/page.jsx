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
        <ImagePlaceholders.HeroBackground />

        {/* Light rays effect */}
        <ImagePlaceholders.LightRays />

        {/* Logo and brand */}
        <div className="relative z-10 text-center">
          <h1
            className="font-serif text-5xl mb-4"
            style={{ color: colors.neutral, fontFamily: "'Cormorant Garamond', serif" }}
          >
            Yasina's Light
          </h1>
          <div className="w-40 h-40 mx-auto mb-6 rounded-full" style={{ filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))" }}>
            <ImagePlaceholders.Logo width="100%" height="100%" />
          </div>
          <h2
            className="text-2xl mb-2"
            style={{ color: colors.neutral, fontFamily: "'Open Sans', sans-serif" }}
          >
            Embrace Your Truth and Let Your Soul Shine.
          </h2>
          <Link
            href="/about"
            className="px-8 py-3 rounded-full transition-all hover:scale-105 inline-block"
            style={{
              background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
              color: colors.primary,
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(255,215,0,0.5)",
            }}
          >
            About Me
          </Link>
        </div>
      </div>

      

      {/* Brief intro section */}
      <div
        className="p-8 md:p-12"
        style={{
          background: "linear-gradient(135deg, rgba(86,61,124,0.05), rgba(78,205,196,0.1))",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ImagePlaceholders.SacredGeometry size="300px" className="top-0 right-0" opacity={0.1} />
        <ImagePlaceholders.SacredGeometry size="250px" className="bottom-0 left-0" opacity={0.08} />
        
        <div
          className="max-w-3xl mx-auto p-8 rounded-lg relative z-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
         
          <p
            className="text-center text-lg italic mb-4"
            style={{ color: colors.text, fontFamily: "'Open Sans', sans-serif" }}
          >
            You were born with a unique purpose. In reconnecting with your authentic self, you unlock the clarity, peace, and power that guide you forward. You’re not here to struggle; you’re here to shine, aligned with your true essence and the universe's support.
          </p>
        </div>

      </div>
    </>
  );
};

export default HomePage;