import React from "react";
import { Link } from "react-router-dom";

// Colors from constants.js
import { colors } from "../utils/constants";
import ImagePlaceholders from "../utils/ImagePlaceholders";

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
            DEFINE YOUR BEING
          </h2>
          <p
            className="text-lg italic mb-8"
            style={{ color: colors.neutral, fontFamily: "'Tangerine', cursive", fontSize: "28px" }}
          >
            "You cannot fail at being you! Just be true"
          </p>
          <Link
            to="/services"
            className="px-8 py-3 rounded-full transition-all hover:scale-105 inline-block"
            style={{
              background: `linear-gradient(45deg, ${colors.accent}, #FFC400)`,
              color: colors.primary,
              fontWeight: "bold",
              boxShadow: "0 0 15px rgba(255,215,0,0.5)",
            }}
          >
            Begin Your Healing Journey
          </Link>
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
          {services.map(service => (
            <div
              key={service.id}
              className="p-6 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(248,245,242,0.9)",
                border: "1px solid rgba(79,205,196,0.3)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ImagePlaceholders.ServiceIcon name={service.title} size="60px" />
              </div>
              <h3
                className="text-lg text-center font-semibold mb-3"
                style={{ color: colors.primary }}
              >
                {service.title}
              </h3>
              <p className="text-center text-sm mb-5" style={{ color: colors.text }}>
                {service.description}
              </p>
              <div className="text-center">
                <Link
                  to={service.path}
                  className="inline-block text-sm font-medium pb-1 border-b-2"
                  style={{ color: colors.secondary, borderColor: colors.secondary }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-6 py-2 rounded-md transition-all"
            style={{
              backgroundColor: "transparent",
              color: colors.primary,
              border: `1px solid ${colors.primary}`,
              fontWeight: "500",
            }}
          >
            View All Services
          </Link>
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
        <ImagePlaceholders.SacredGeometry size="300px" className="top-0 right-0" opacity={0.1} />
        <ImagePlaceholders.SacredGeometry size="250px" className="bottom-0 left-0" opacity={0.08} />

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
            {testimonials[currentTestimonial].text}
          </p>
          <div
            className="text-4xl leading-none text-right"
            style={{ color: colors.accent, fontFamily: "'Tangerine', cursive" }}
          >
            "
          </div>
          <div className="flex justify-center items-center gap-3 mt-4">
            <ImagePlaceholders.TestimonialAvatar size="45px" />
            <p className="font-medium" style={{ color: colors.primary }}>
              - {testimonials[currentTestimonial].author}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full cursor-pointer"
              onClick={() => setCurrentTestimonial(index)}
              style={{ 
                backgroundColor: currentTestimonial === index 
                  ? colors.primary 
                  : "rgba(86,61,124,0.3)" 
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;