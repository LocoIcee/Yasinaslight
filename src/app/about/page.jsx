import React from "react";
import { colors, fonts } from "@/utils/constants";
import PlaceholderImage from "@/utils/PlaceholderImage";

const AboutPage = () => {
  // Certifications and education
  const certifications = [
    {
      title: "Certified Reiki Master",
      organization: "International Association of Reiki",
      year: "2015",
    },
    {
      title: "Advanced Crystal Healing Practitioner",
      organization: "Crystal Healing Institute",
      year: "2017",
    },
    {
      title: "Certified Reflexology Therapist",
      organization: "Canadian Reflexology Association",
      year: "2016",
    },
    {
      title: "Meditation & Mindfulness Instructor",
      organization: "Mindful Living Institute",
      year: "2018",
    },
    {
      title: "Chakra Balancing Specialist",
      organization: "Energy Healing Academy",
      year: "2014",
    },
  ];

  // Core values/philosophy
  const coreValues = [
    {
      title: "Holistic Approach",
      description: "Treating the whole person — mind, body, and spirit — not just symptoms.",
      icon: "🌱",
    },
    {
      title: "Individual Care",
      description: "Every session is customized to address your unique needs and energy.",
      icon: "⭐",
    },
    {
      title: "Empowerment",
      description: "Providing tools and knowledge to support your continued healing journey.",
      icon: "✨",
    },
    {
      title: "Compassion",
      description: "Creating a judgment-free space for healing and personal growth.",
      icon: "💗",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Page Header */}
      <div
        className="py-12 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.primary}DD)`,
        }}
      >
        {/* Sacred geometry overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(/assets/sacred-geometry.png)`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        ></div>

        <h1
          className="text-3xl md:text-4xl relative z-10"
          style={{ color: colors.neutral, fontFamily: fonts.serif }}
        >
          ABOUT YASINA
        </h1>
        <p
          className="mt-2 text-lg relative z-10"
          style={{ color: `${colors.neutral}DD` }}
        >
          My Journey & Healing Philosophy
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Personal Introduction Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Image */}
          <div className="w-full md:w-2/5 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <PlaceholderImage
                height="500px"
                text="Yasina Portrait"
                bgColor={colors.primary + "20"}
                style={{
                  borderRadius: "8px",
                }}
              />
            </div>
            {/* Decorative elements */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full z-0"
              style={{ backgroundColor: colors.accent + "20" }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full z-0"
              style={{ backgroundColor: colors.secondary + "30" }}
            />
          </div>

          {/* Bio Content */}
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <h2
                className="text-xl md:text-2xl mb-2"
                style={{ color: colors.primary, fontFamily: fonts.serif }}
              >
                <span className="px-2" style={{ color: colors.accent }}>✧</span>
                MY STORY
                <span className="px-2" style={{ color: colors.accent }}>✧</span>
              </h2>

              <h3 className="text-2xl mb-6" style={{ color: colors.text }}>
                Hi, I’m Yasina Bhanji
              </h3>

              <div className="space-y-4" style={{ color: colors.text, lineHeight: "1.8" }}>
                <p>
                  I help soul-led women move through emotional stuckness, spiritual transitions, and financial limitations—so they can rise into alignment, purpose, and prosperity.
                  My work is rooted in the belief that when you live from the soul, everything shifts. Clarity rises. Confidence strengthens. Life begins to flow.
                  And yes—abundance follows.

                </p>
                <p>
                  Whether you're moving through a spiritual awakening, burnout, emotional heaviness, or a season of uncertainty, my work is here to support you. I help you gently release what no longer serves you, regulate your energy, and reconnect with your purpose.
                  My approach is heart-centered and grounded. I believe healing doesn’t have to be hard—it just needs to be held with compassion and consistency. You already carry the wisdom within you. I'm here to help you hear it more clearly.
                  I've walked the path of emotional intensity, spiritual growth, and soul transformation myself. I know what it’s like to feel lost in the fog and long for clarity. That’s why I create spaces that are safe, soft, and supportive—where deep healing and soulful realignment can take place.
                </p>
                <p>
                  If you’re ready to feel aligned, empowered, and deeply seen—let’s begin your journey.
                </p>
              </div>
            </div>

            
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-xl md:text-2xl mb-4"
              style={{ color: colors.primary, fontFamily: fonts.serif }}
            >
              <span className="px-2" style={{ color: colors.accent }}>✧</span>
              MY MISSION
              <span className="px-2" style={{ color: colors.accent }}>✧</span>
            </h2>
            <p style={{ color: colors.text, lineHeight: "1.8" }}>
              My mission is to support individuals through life’s pivotal transitions—when clarity feels distant and transformation is calling. Using a blend of all the tools the universe has given me, I help people release what no longer serves them and reconnect with their authentic truth. I hold space with compassion, insight, and grounded presence so you can navigate your journey with more ease, trust, and intuitive flow.
            </p>
          </div>

          {/* Core values cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm text-center transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${colors.primary}10` }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: colors.primary + "15" }}
                >
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: colors.text + "CC" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        

        

        {/* CTA Section */}
        <div 
          className="rounded-lg p-8 text-center"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}15, ${colors.secondary}15)`,
          }}
        >
          <h2 
            className="text-2xl md:text-3xl mb-4"
            style={{ color: colors.primary, fontFamily: fonts.serif }}
          >
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-6" style={{ color: colors.text }}>
            I'm honored to be a part of your path to wellness. Whether you're seeking physical healing, emotional balance, or spiritual growth, I'm here to support your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="px-6 py-3 rounded-md transition-all hover:shadow-md"
              style={{
                backgroundColor: colors.primary,
                color: colors.neutral,
              }}
            >
              Explore My Services
            </a>
            <a
              href="/contact#booking"
              className="px-6 py-3 rounded-md transition-all hover:shadow-md"
              style={{
                backgroundColor: colors.secondary,
                color: colors.neutral,
              }}
            >
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;