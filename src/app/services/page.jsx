'use client';
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { colors, fonts } from "@/utils/constants";
import PlaceholderImage from "@/utils/PlaceholderImage";

const ServicesPage = () => {
  const { currentUser } = useAuth();
  // State for active service (for scrolling to)
  const [activeService, setActiveService] = useState(null);

  // Services data - Updated based on the PDF content
  const services = [
    {
      id: "soul-alignment",
      title: "Soul Alignment",
      category: "Spiritual Guidance",
      icon: "🔮",
      shortDesc: "An intuitive deep dive into your soul's blueprint to clear energetic distortions and reconnect with your authentic path.",
      description: "An intuitive deep dive into your soul's blueprint. Together, we clear energetic distortions and reconnect you with your authentic path. These sessions often include channeling, energy work, and guidance for your next aligned steps.\n\nRemember your purpose. Align with your truth.\n\nThis is a heart-centered, soul-led approach to receiving clarity when your mind feels overwhelmed and your emotions are clouded. It's about tuning into the deeper wisdom that lives within you—the part that knows even when your thoughts are spinning.",
      benefits: [
        "Make aligned decisions with more ease",
        "Understand what your body and emotions are really trying to tell you",
        "Receive validation, clarity, and next steps when you feel stuck",
        "Reconnect with your purpose or soul path",
        "Gently move through energetic blocks or emotional heaviness"
      ],
      keyFeatures: [
        {
          title: "Combines Talk Therapy with Intuition",
          description: "Like traditional counselling, intuitive counselling involves conversation—but I also use intuitive abilities to guide the session."
        },
        {
          title: "Addresses the Whole Person",
          description: "It considers your mental, emotional, physical, and spiritual well-being, often looking beyond symptoms to root causes."
        },
        {
          title: "Incorporates Spiritual or Energetic Practices",
          description: "May include tools like energy healing, chakra work, oracle cards, meditation or breathwork, inner child work, and soul-purpose exploration."
        },
        {
          title: "Highly Personalized",
          description: "Each session is guided by your energy and needs in the moment, making it fluid, adaptable, and intuitive in structure."
        }
      ],
      sessions: [
        {
          title: "Intuitive Guidance Session",
          duration: "60 minutes"
        },
        {
          title: "Life Path Alignment",
          duration: "90 minutes"
        }
      ]
    },
    {
      id: "chakra-balancing",
      title: "Chakra Balancing",
      category: "Energy Healing",
      icon: "⚡",
      shortDesc: "Energy work to align and harmonize your body's energy centers for optimal wellbeing.",
      description: "Chakra balancing is a form of energy healing that focuses on harmonizing the energy centers of the body. When these chakras are blocked or imbalanced, it can lead to physical discomfort, emotional distress, and mental fog.\n\nTraditionally, we focus on 7 main chakras, but broader energy systems and spiritual teachings recognize more—sometimes 12, 114, or even 88,000 depending on the source and tradition.",
      benefits: [
        "Clears energy blockages in the body",
        "Promotes emotional stability and wellbeing",
        "Enhances spiritual connection and awareness",
        "Improves mental clarity and focus",
        "Supports physical vitality and immune function"
      ],
      chakras: [
        {
          name: "Root Chakra (Muladhara)",
          color: "🔴",
          location: "Base of spine",
          theme: "Safety, grounding, survival"
        },
        {
          name: "Sacral Chakra (Svadhisthana)",
          color: "🟠",
          location: "Lower abdomen",
          theme: "Emotions, pleasure, creativity"
        },
        {
          name: "Solar Plexus Chakra (Manipura)",
          color: "🟡",
          location: "Upper abdomen/stomach",
          theme: "Confidence, willpower, personal power"
        },
        {
          name: "Heart Chakra (Anahata)",
          color: "💚",
          location: "Center of chest",
          theme: "Love, compassion, forgiveness"
        },
        {
          name: "Throat Chakra (Vishuddha)",
          color: "🔵",
          location: "Throat",
          theme: "Communication, truth, self-expression"
        },
        {
          name: "Third Eye Chakra (Ajna)",
          color: "🟣",
          location: "Between the eyebrows",
          theme: "Intuition, vision, insight"
        },
        {
          name: "Crown Chakra (Sahasrara)",
          color: "⚪",
          location: "Top of the head",
          theme: "Spiritual connection, enlightenment"
        }
      ],
      sessions: [
        {
          title: "Chakra Assessment & Balancing",
          duration: "75 minutes"
        },
        {
          title: "Remote Chakra Tune-Up",
          duration: "30 minutes"
        },
        {
          title: "In-Person Chakra Session",
          duration: "75 minutes"
        }
      ]
    },
    {
      id: "reflexology",
      title: "Reflexology",
      category: "Physical Wellness",
      icon: "👣",
      shortDesc: "Therapeutic pressure point technique that promotes healing, balance and relaxation throughout the entire body.",
      description: "Reflexology is based on the theory that your hands, feet, and ears are connected to certain organs and body systems. It rests on the ancient Chinese belief in qi (pronounced \"chee\"), or \"vital energy.\" According to this belief, qi flows through each person. When a person feels stressed, their body blocks qi, which can cause an imbalance leading to illness.\n\nReflexology aims to keep qi flowing through the body, keeping it balanced and disease-free.",
      benefits: [
        "Reduces stress and anxiety",
        "Alleviates pain, headaches, and sinus congestion",
        "Improves circulation throughout the body",
        "Promotes natural detoxification",
        "Enhances relaxation and improves sleep quality",
        "Supports hormonal balance"
      ],
      additionalBenefits: [
        "Boosts immune system",
        "Helps with colds and bacterial infections",
        "Clears sinus issues",
        "Assists with back problems",
        "Corrects hormonal imbalances",
        "Improves digestion"
      ],
      sessions: [
        {
          title: "Remote Reflexology Session",
          duration: "30 minutes"
        },
        {
          title: "In-Person Reflexology",
          duration: "60 minutes"
        }
      ]
    },
    {
      id: "hypnotherapy",
      title: "Hypnotherapy",
      category: "Mind-Body Healing",
      icon: "🧠",
      shortDesc: "Release the past. Rewire the mind. Reclaim your power.",
      description: "Hypnotherapy is a gentle and guided process that helps you access your subconscious mind—the space where your deepest beliefs, memories, and emotional patterns live. In this relaxed, meditative state, you're able to release what's no longer serving you and reprogram your inner world with clarity, confidence, and alignment.\n\nContrary to myths, you're always in control during a session. This is your sacred space to connect inward, not to be controlled or manipulated.",
      benefits: [
        "Let go of limiting beliefs and self-sabotage",
        "Heal emotional wounds and past experiences",
        "Rewire subconscious patterns for confidence and clarity",
        "Alleviate anxiety, fear, or emotional overwhelm",
        "Align with your truth, purpose, and inner peace"
      ],
      idealFor: [
        "Those feeling stuck in repetitive cycles",
        "Anyone experiencing emotional heaviness or energy drain",
        "People ready for real change but unsure where to begin",
        "Those called to deeper self-awareness and healing"
      ],
      sessions: [
        {
          title: "Hypnotherapy Session",
          duration: "90 minutes"
        },
        {
          title: "Hypnotherapy Package",
          duration: "3 x 90 minutes"
        }
      ]
    },
    {
      id: "reiki",
      title: "Reiki Healing",
      category: "Energy Healing",
      icon: "✨",
      shortDesc: "Universal energy healing that promotes balance and wellness.",
      description: "Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It's administered by laying hands on or above the body, allowing life force energy to flow through and restore balance. Reiki treats the whole person including body, emotions, mind, and spirit, creating many beneficial effects including relaxation and feelings of peace, security, and wellbeing.",
      benefits: [
        "Reduces stress and promotes deep relaxation",
        "Accelerates the body's natural healing abilities",
        "Helps alleviate pain and discomfort",
        "Balances energy centers (chakras)",
        "Supports emotional healing and clarity"
      ],
      sessions: [
        {
          title: "Initial Reiki Session",
          duration: "90 minutes"
        },
        {
          title: "Follow-up Reiki Session",
          duration: "60 minutes"
        }
      ]
    },
    {
      id: "meditation-guidance",
      title: "Meditation & Mindfulness",
      category: "Spiritual Guidance",
      icon: "🧘‍♀️",
      shortDesc: "Learn techniques to quiet the mind, reduce stress, and connect with your inner wisdom.",
      description: "Meditation and mindfulness practices offer powerful tools for reducing stress, improving mental clarity, and connecting with your inner wisdom. Whether you're new to meditation or looking to deepen your practice, I offer personalized guidance to help you develop sustainable techniques that fit your lifestyle. Sessions may include breath work, guided visualization, mantra meditation, mindfulness practices, and tools for incorporating meditation into daily life.",
      benefits: [
        "Reduces stress and anxiety",
        "Improves focus and mental clarity",
        "Promotes emotional regulation",
        "Deepens spiritual connection",
        "Develops tools for self-care and inner peace"
      ],
      sessions: [
        {
          title: "Meditation Fundamentals",
          duration: "60 minutes"
        },
        {
          title: "Advanced Meditation & Energy Work",
          duration: "90 minutes"
        }
      ]
    }
  ];

  // Handle clicking on a service link
  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
    // Smooth scroll to the service section
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${colors.primary}DD)`,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(/assets/sacred-geometry.png)`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        ></div>

        <h1
          className="text-4xl md:text-5xl relative z-10 mb-3"
          style={{ color: colors.neutral, fontFamily: fonts.serif }}
        >
          HEALING SERVICES
        </h1>
        <p
          className="mt-2 text-xl relative z-10 max-w-2xl mx-auto"
          style={{ color: `${colors.neutral}DD` }}
        >
          Holistic Therapies for Mind, Body & Spirit
        </p>
      </div>

      {/* Services Navigation */}
      <div 
        className="top-20 z-30 py-4 shadow-md"
        style={{ backgroundColor: colors.neutral }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map(service => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeService === service.id ? "shadow-md" : "hover:shadow-sm"
                }`}
                style={{
                  backgroundColor: activeService === service.id ? colors.primary : colors.primary + "15",
                  color: activeService === service.id ? colors.neutral : colors.primary,
                }}
              >
                {service.icon} {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction & What to Expect */}
      <section className="container mx-auto py-16 px-4 text-center max-w-3xl">
        <h2
          className="text-2xl md:text-3xl mb-6"
          style={{ color: colors.primary, fontFamily: fonts.serif }}
        >
          <span className="px-2" style={{ color: colors.accent }}>✧</span>
          MY APPROACH TO HEALING
          <span className="px-2" style={{ color: colors.accent }}>✧</span>
        </h2>
        <p className="mb-6 text-lg" style={{ color: colors.text, lineHeight: "1.8" }}>
          Each service I offer is designed to address specific aspects of your wellbeing while supporting your overall balance and harmony. I believe in a holistic approach that considers the interconnection between physical, emotional, and spiritual health.
        </p>
        <p className="text-lg" style={{ color: colors.text, lineHeight: "1.8" }}>
          All services begin with a personal consultation to understand your unique needs and goals. Sessions can be enjoyed individually or combined for a more comprehensive healing experience.
        </p>

        {/* What to Expect - Global section */}
        <div className="mt-10 border-t border-b py-10" style={{ borderColor: colors.primary + "30" }}>
          <h3 
            className="text-xl mb-6 font-medium"
            style={{ color: colors.primary }}
          >
            What to Expect During Your Session
          </h3>
          <p className="mb-4 text-lg" style={{ color: colors.text, lineHeight: "1.8" }}>
            Your session begins with a brief consultation to discuss your needs and set intentions. I'll guide you through the process, ensuring you feel comfortable and supported throughout. 
          </p>
          <p className="mb-4 text-lg" style={{ color: colors.text, lineHeight: "1.8" }}>
            For energy healing services like Reiki and Chakra Balancing, you'll relax in a comfortable setting while I work with your energy field. For more interactive modalities like Soul Alignment or Hypnotherapy, we'll work together in a collaborative process.
          </p>
          <p className="text-lg" style={{ color: colors.text, lineHeight: "1.8" }}>
            After your session, we'll discuss what was experienced and I'll provide recommendations for supporting your continued healing at home. It's advisable to drink plenty of water and allow time for rest and integration after your session.
          </p>
        </div>
      </section>

      {/* Services Detailed Listings */}
      <section className="container mx-auto py-8 px-4">
        <div className="space-y-32">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32"
            >
              {/* Service Header */}
              <div 
                className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b mb-8"
                style={{ borderColor: colors.primary + "30" }}
              >
                <div>
                  <span 
                    className="inline-block mb-2 px-3 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: colors.secondary + "20",
                      color: colors.secondary
                    }}
                  >
                    {service.category}
                  </span>
                  <h3 
                    className="text-3xl md:text-4xl flex items-center"
                    style={{ color: colors.primary, fontFamily: fonts.serif }}
                  >
                    <span className="mr-3">{service.icon}</span>
                    {service.title}
                  </h3>
                </div>
                <Link
                  href={currentUser ? "/calendar" : "/login?redirect=/calendar"}
                  className="mt-4 md:mt-0 px-5 py-2 rounded-full text-sm transition-all hover:shadow-md inline-flex items-center gap-2"
                  style={{
                    backgroundColor: colors.secondary,
                    color: colors.neutral,
                  }}
                >
                  Book This Service
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>

              {/* Service Content */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left Column - Service Description */}
                <div className="lg:col-span-3">
                  <div className="prose max-w-none">
                    <p className="text-lg mb-6" style={{ color: colors.text, lineHeight: "1.8" }}>
                      {service.description.split('\n\n').map((paragraph, index) => (
                        <React.Fragment key={index}>
                          {paragraph}
                          {index !== service.description.split('\n\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>

                    {/* Benefits */}
                    <h4 
                      className="text-xl mt-10 mb-4 font-medium"
                      style={{ color: colors.primary }}
                    >
                      Benefits
                    </h4>
                    <ul className="space-y-3 mb-8" style={{ color: colors.text }}>
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div 
                            className="mr-3 mt-1"
                            style={{ color: colors.accent }}
                          >
                            ✓
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Service-specific content */}
                    {service.id === "chakra-balancing" && service.chakras && (
                      <div className="mt-10">
                        <h4 
                          className="text-xl mb-6 font-medium"
                          style={{ color: colors.primary }}
                        >
                          The 7 Main Chakras
                        </h4>
                        <div className="space-y-6">
                          {service.chakras.map((chakra, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                              <h5 className="flex items-center text-lg font-medium mb-2" style={{ color: colors.primary }}>
                                <span className="mr-2">{chakra.color}</span> 
                                {chakra.name}
                              </h5>
                              <div className="flex flex-wrap gap-x-8 gap-y-1 mb-2 text-sm" style={{ color: colors.text + "99" }}>
                                <div><strong>Location:</strong> {chakra.location}</div>
                                <div><strong>Theme:</strong> {chakra.theme}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "soul-alignment" && service.keyFeatures && (
                      <div className="mt-10">
                        <h4 
                          className="text-xl mb-6 font-medium"
                          style={{ color: colors.primary }}
                        >
                          Key Features
                        </h4>
                        <div className="space-y-6">
                          {service.keyFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                              <h5 className="text-lg font-medium mb-2" style={{ color: colors.primary }}>
                                {index + 1}. {feature.title}
                              </h5>
                              <p style={{ color: colors.text }}>{feature.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "reflexology" && service.additionalBenefits && (
                      <div className="mt-10">
                        <h4 
                          className="text-xl mb-4 font-medium"
                          style={{ color: colors.primary }}
                        >
                          Additional Reported Benefits
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.additionalBenefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                              <span
                                className="mr-2 text-lg"
                                style={{ color: colors.accent }}
                              >
                                •
                              </span>
                              <span style={{ color: colors.text }}>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.id === "hypnotherapy" && service.idealFor && (
                      <div className="mt-10">
                        <h4 
                          className="text-xl mb-4 font-medium"
                          style={{ color: colors.primary }}
                        >
                          Perfect For You If You're Feeling
                        </h4>
                        <ul className="space-y-3 mb-8" style={{ color: colors.text }}>
                          {service.idealFor.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div 
                                className="mr-3 mt-1"
                                style={{ color: colors.accent }}
                              >
                                •
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Image & Session Info */}
                <div className="lg:col-span-2">
                  {/* Service Image */}
                  <div className="rounded-lg overflow-hidden shadow-md mb-8">
                    <PlaceholderImage 
                      height="250px" 
                      text={`${service.title} Image`}
                      bgColor={colors.primary + "15"}
                    />
                  </div>

                  {/* Session Options */}
                  <div 
                    className="border rounded-lg overflow-hidden shadow-sm"
                    style={{ borderColor: colors.primary + "20" }}
                  >
                    <div 
                      className="py-4 px-5"
                      style={{ backgroundColor: colors.primary + "10" }}
                    >
                      <h4 
                        className="text-lg font-medium"
                        style={{ color: colors.primary }}
                      >
                        Session Options
                      </h4>
                    </div>
                    <div className="divide-y" style={{ divideColor: colors.primary + "10" }}>
                      {service.sessions.map((session, index) => (
                        <div key={index} className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium" style={{ color: colors.text }}>
                              {session.title}
                            </h5>
                          </div>
                          <div className="flex justify-between text-sm mb-3" style={{ color: colors.text + "99" }}>
                            <span>{session.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-5 text-center">
                      <Link
                        href={currentUser ? "/calendar" : "/login?redirect=/calendar"}
                        className="w-full inline-block px-4 py-3 rounded-md transition-all hover:shadow-lg font-medium"
                        style={{
                          backgroundColor: colors.secondary,
                          color: colors.neutral,
                        }}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2
          className="text-2xl md:text-3xl mb-6"
          style={{ color: colors.primary, fontFamily: fonts.serif }}
        >
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="mb-8 text-lg max-w-3xl mx-auto" style={{ color: colors.text, lineHeight: "1.8" }}>
          Whether you're seeking physical healing, emotional balance, or spiritual connection, I'm here to support you on your path.
        </p>
        <Link
          href={currentUser ? "/calendar" : "/login?redirect=/calendar"}
          className="px-8 py-3 rounded-md text-lg transition-all hover:shadow-lg inline-flex items-center gap-2"
          style={{
            backgroundColor: colors.secondary,
            color: colors.neutral,
          }}
        >
          Schedule a Session
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage;