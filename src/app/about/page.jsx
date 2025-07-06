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
    <div>
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
                Hello, I'm Yasina
              </h3>

              <div className="space-y-4" style={{ color: colors.text, lineHeight: "1.8" }}>
                <p>
                  My journey into energy healing began over 15 years ago during a period of personal health challenges. After conventional treatments left me seeking more holistic solutions, I discovered the transformative power of Reiki and other energy healing modalities. The profound impact these practices had on my own wellbeing inspired me to dedicate myself to helping others find balance and healing.
                </p>

                <p>
                  Since establishing Yasina's Light in 2012, I've had the privilege of guiding hundreds of clients through their healing journeys. Every session is approached with deep reverence for the individual's unique needs and energy pattern. My practice combines traditional healing wisdom with contemporary understanding of the mind-body connection.
                </p>

                <p>
                  When I'm not in my healing space, you'll find me exploring nature trails, tending to my crystal garden, or deepening my practice through ongoing education. My home in Airdrie provides the perfect balance of community connection and peaceful surroundings that inspire my work.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h3
                className="text-lg border-b pb-2 mb-3"
                style={{ color: colors.secondary, borderColor: colors.secondary + "40" }}
              >
                Certifications & Training
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start mb-2"
                  >
                    <div
                      className="w-2 h-2 mt-2 mr-2 rounded-full"
                      style={{ backgroundColor: colors.accent }}
                    ></div>
                    <div>
                      <span className="block font-medium" style={{ color: colors.primary }}>
                        {cert.title}
                      </span>
                      <span className="block text-sm" style={{ color: colors.text + "99" }}>
                        {cert.organization} • {cert.year}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
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
              MY HEALING PHILOSOPHY
              <span className="px-2" style={{ color: colors.accent }}>✧</span>
            </h2>
            <p style={{ color: colors.text, lineHeight: "1.8" }}>
              My approach to healing combines traditional wisdom with modern understanding, 
              focusing on treating the whole person rather than isolated symptoms. I believe that 
              true healing comes from within, and my role is to help facilitate that natural process.
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

        {/* Healing Approach */}
        <div className="mb-20">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content column */}
              <div className="p-8 lg:p-12">
                <h2
                  className="text-xl md:text-2xl mb-6"
                  style={{ color: colors.primary, fontFamily: fonts.serif }}
                >
                  My Approach to Energy Healing
                </h2>

                <div className="space-y-4" style={{ color: colors.text, lineHeight: "1.8" }}>
                  <p>
                    I believe that our bodies have an innate wisdom and capacity for healing. My role is to help remove energetic blockages and create the optimal conditions for your natural healing process to occur. Each session begins with a thorough consultation to understand your specific needs and goals.
                  </p>

                  <p>
                    <strong style={{ color: colors.primary }}>Personalized Approach:</strong>{" "}
                    No two healing journeys are alike. I often combine different modalities such as Reiki, reflexology, crystal healing, and intuitive guidance based on what will best serve you at this moment in your healing journey.
                  </p>

                  <p>
                    <strong style={{ color: colors.primary }}>Safe Space:</strong>{" "}
                    Creating a safe, nurturing environment is fundamental to my practice. The healing space is carefully prepared with cleansed energy, soothing music, and aromatherapy to enhance your comfort and the effectiveness of our work together.
                  </p>

                  <p>
                    <strong style={{ color: colors.primary }}>Empowerment:</strong>{" "}
                    While I guide the healing session, I believe in empowering you with knowledge and techniques to continue your healing journey between sessions. This might include simple energy exercises, meditation practices, or lifestyle recommendations.
                  </p>
                </div>
              </div>

              {/* Image column */}
              <div>
                <PlaceholderImage
                  height="100%"
                  text="Healing Session"
                  bgColor={colors.secondary + "20"}
                  icon={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-xl md:text-2xl mb-4"
              style={{ color: colors.primary, fontFamily: fonts.serif }}
            >
              <span className="px-2" style={{ color: colors.accent }}>✧</span>
              CLIENT EXPERIENCES
              <span className="px-2" style={{ color: colors.accent }}>✧</span>
            </h2>
          </div>

          {/* Testimonial Quote */}
          <div 
            className="max-w-4xl mx-auto p-8 rounded-lg relative"
            style={{ 
              backgroundColor: colors.primary + "08",
              borderLeft: `4px solid ${colors.accent}`
            }}
          >
            {/* Large quote marks */}
            <div 
              className="absolute top-4 left-4 text-6xl leading-none"
              style={{ color: colors.primary + "15" }}
            >
              "
            </div>
            <div 
              className="absolute bottom-4 right-4 text-6xl leading-none"
              style={{ color: colors.primary + "15" }}
            >
              "
            </div>
            
            {/* Quote content */}
            <div className="pl-8 pr-8">
              <p 
                className="text-lg italic mb-6"
                style={{ color: colors.text, lineHeight: "1.8" }}
              >
                Working with Yasina has been truly transformative. Her intuitive abilities and gentle approach helped me navigate a difficult period in my life with grace. The energy work we've done together has relieved my chronic pain and brought a sense of peace I hadn't experienced in years. If you're seeking genuine healing with someone who truly cares, I couldn't recommend Yasina more highly.
              </p>
              
              <div className="flex items-center justify-end">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.primary + "20" }}
                >
                  <span style={{ color: colors.primary }}>M</span>
                </div>
                <div className="ml-3 text-right">
                  <h4 
                    className="font-medium"
                    style={{ color: colors.primary }}
                  >
                    Michelle K.
                  </h4>
                  <p 
                    className="text-xs"
                    style={{ color: colors.text + "99" }}
                  >
                    Client since 2019
                  </p>
                </div>
              </div>
            </div>
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