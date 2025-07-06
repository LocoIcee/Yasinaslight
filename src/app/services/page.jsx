'use client';
import React, { useState, useContext, use } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { colors, fonts } from "@/utils/constants";
import PlaceholderImage from "@/utils/PlaceholderImage";

const ServicesPage = () => {
  const { currentUser } = useAuth();
  // State for active service (for scrolling to)
  const [activeService, setActiveService] = useState(null);

  // Services data
  const services = [
    {
      id: "reiki",
      title: "Reiki Healing",
      category: "Energy Healing",
      icon: "✨",
      shortDesc: "Universal energy healing that promotes balance and wellness.",
      longDesc: "Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It's administered by laying hands on or above the body, allowing life force energy to flow through and restore balance. Reiki treats the whole person including body, emotions, mind, and spirit, creating many beneficial effects including relaxation and feelings of peace, security, and wellbeing.",
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
          duration: "90 minutes",
          price: "$120",
          description: "Includes consultation, full Reiki treatment, and post-session guidance."
        },
        {
          title: "Follow-up Reiki Session",
          duration: "60 minutes",
          price: "$85",
          description: "Focused energy healing to maintain and deepen the benefits."
        }
      ]
    },
    {
      id: "reflexology",
      title: "Reflexology",
      category: "Physical Wellness",
      icon: "👣",
      shortDesc: "Therapeutic foot massage targeting pressure points connected to organs and systems throughout the body.",
      longDesc: "Reflexology is a therapeutic method of relieving pain by stimulating predefined pressure points on the feet and hands. This controlled pressure helps restore the free flow of energy throughout the body. The theory behind reflexology is that these reflex points correspond to different body organs and systems, and pressing them creates real benefits for the person's health.",
      benefits: [
        "Improves circulation throughout the body",
        "Reduces tension and stress",
        "Promotes natural detoxification",
        "Can help relieve headaches and digestive issues",
        "Supports hormonal balance"
      ],
      sessions: [
        {
          title: "Reflexology Session",
          duration: "60 minutes",
          price: "$90",
          description: "Complete foot reflexology treatment with aromatherapy."
        },
        {
          title: "Reflexology with Reiki",
          duration: "75 minutes",
          price: "$115",
          description: "Combined approach for enhanced healing and relaxation."
        }
      ]
    },
    {
      id: "intuitive-counseling",
      title: "Intuitive Counseling",
      category: "Spiritual Guidance",
      icon: "🔮",
      shortDesc: "Guidance and insight to help you navigate life's challenges and align with your higher purpose.",
      longDesc: "Intuitive counseling combines spiritual guidance with practical advice to help you navigate challenging situations, make important decisions, and connect with your higher purpose. Using my intuitive abilities, I can help reveal patterns, blocks, and potentials that may not be immediately obvious to you. This is not a replacement for licensed therapy, but a complementary approach to personal growth and self-understanding.",
      benefits: [
        "Gain clarity about life path and purpose",
        "Receive guidance for important decisions",
        "Identify and release limiting beliefs",
        "Develop a deeper connection to your intuition",
        "Find meaning during challenging transitions"
      ],
      sessions: [
        {
          title: "Intuitive Guidance Session",
          duration: "60 minutes",
          price: "$100",
          description: "In-depth intuitive reading and personalized guidance."
        },
        {
          title: "Life Path Alignment",
          duration: "90 minutes",
          price: "$145",
          description: "Comprehensive session for major life transitions or decisions."
        }
      ]
    },
    {
      id: "chakra-balancing",
      title: "Chakra Balancing",
      category: "Energy Healing",
      icon: "⚡",
      shortDesc: "Energy work to align and harmonize your body's energy centers for optimal wellbeing.",
      longDesc: "Chakra balancing is a form of energy healing that focuses on harmonizing the seven main energy centers of the body. When these chakras are blocked or imbalanced, it can lead to physical discomfort, emotional distress, and mental fog. During a chakra balancing session, I use a combination of Reiki, crystals, sound, and guided visualization to clear blockages and restore the natural flow of energy through each center.",
      benefits: [
        "Clears energy blockages in the body",
        "Promotes emotional stability and wellbeing",
        "Enhances spiritual connection and awareness",
        "Improves mental clarity and focus",
        "Supports physical vitality and immune function"
      ],
      sessions: [
        {
          title: "Chakra Assessment & Balancing",
          duration: "75 minutes",
          price: "$110",
          description: "Complete chakra assessment and targeted energy balancing."
        },
        {
          title: "Crystal Chakra Therapy",
          duration: "90 minutes",
          price: "$130",
          description: "Chakra balancing with crystal layouts and sound healing."
        }
      ]
    },
    {
      id: "crystal-healing",
      title: "Crystal Healing",
      category: "Energy Healing",
      icon: "💎",
      shortDesc: "Harness the natural energy of crystals to promote healing, balance, and positive energy flow.",
      longDesc: "Crystal healing utilizes the unique vibrational properties of crystals and gemstones to remove energy blockages, stabilize physical and emotional conditions, and promote the free flow of energy throughout the body. Each crystal has specific properties that resonate with different aspects of our being. During a session, carefully selected crystals are placed on or around the body to facilitate healing, balance chakras, and enhance overall wellbeing.",
      benefits: [
        "Balances and amplifies your natural energy",
        "Helps clear negative or stagnant energy",
        "Promotes deep relaxation and stress relief",
        "Supports specific healing intentions",
        "Can be combined with other healing modalities for enhanced effects"
      ],
      sessions: [
        {
          title: "Crystal Healing Session",
          duration: "60 minutes",
          price: "$95",
          description: "Personalized crystal layout and energy balancing."
        },
        {
          title: "Crystal Grid & Intention Setting",
          duration: "75 minutes",
          price: "$115",
          description: "Custom crystal grid creation with intention setting ritual."
        }
      ]
    },
    {
      id: "meditation-guidance",
      title: "Meditation & Mindfulness Guidance",
      category: "Spiritual Guidance",
      icon: "🧘‍♀️",
      shortDesc: "Learn techniques to quiet the mind, reduce stress, and connect with your inner wisdom.",
      longDesc: "Meditation and mindfulness practices offer powerful tools for reducing stress, improving mental clarity, and connecting with your inner wisdom. Whether you're new to meditation or looking to deepen your practice, I offer personalized guidance to help you develop sustainable techniques that fit your lifestyle. Sessions may include breath work, guided visualization, mantra meditation, mindfulness practices, and tools for incorporating meditation into daily life.",
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
          duration: "60 minutes",
          price: "$85",
          description: "Learn basic meditation techniques tailored to your needs."
        },
        {
          title: "Advanced Meditation & Energy Work",
          duration: "90 minutes",
          price: "$125",
          description: "Deeper practices combined with energy balancing."
        }
      ]
    },
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
        className="py-12 text-center relative overflow-hidden"
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
          className="text-3xl md:text-4xl relative z-10"
          style={{ color: colors.neutral, fontFamily: fonts.serif }}
        >
          HEALING SERVICES
        </h1>
        <p
          className="mt-2 text-lg relative z-10"
          style={{ color: `${colors.neutral}DD` }}
        >
          Holistic Therapies for Mind, Body & Spirit
        </p>
      </div>

      {/* Services Navigation */}
      <div 
        className="sticky top-20 z-30 py-4 shadow-sm"
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

      {/* Introduction */}
      <section className="container mx-auto py-12 px-4 text-center max-w-3xl">
        <h2
          className="text-xl md:text-2xl mb-6"
          style={{ color: colors.primary, fontFamily: fonts.serif }}
        >
          <span className="px-2" style={{ color: colors.accent }}>✧</span>
          MY APPROACH TO HEALING
          <span className="px-2" style={{ color: colors.accent }}>✧</span>
        </h2>
        <p className="mb-4" style={{ color: colors.text, lineHeight: "1.8" }}>
          Each service I offer is designed to address specific aspects of your wellbeing while supporting your overall balance and harmony. I believe in a holistic approach that considers the interconnection between physical, emotional, and spiritual health.
        </p>
        <p style={{ color: colors.text, lineHeight: "1.8" }}>
          All services begin with a personal consultation to understand your unique needs and goals. Sessions can be enjoyed individually or combined for a more comprehensive healing experience.
        </p>
      </section>

      {/* Services Detailed Listings */}
      <section className="container mx-auto py-8 px-4">
        <div className="space-y-24">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-32"
            >
              {/* Service Header */}
              <div 
                className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b mb-8"
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
                    className="text-2xl md:text-3xl flex items-center"
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
                    <p className="text-lg mb-4" style={{ color: colors.text, lineHeight: "1.8" }}>
                      {service.longDesc}
                    </p>

                    {/* Benefits */}
                    <h4 
                      className="text-lg mt-8 mb-4 font-medium"
                      style={{ color: colors.primary }}
                    >
                      Benefits
                    </h4>
                    <ul className="space-y-2 mb-8" style={{ color: colors.text }}>
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
                    
                    {/* What to expect */}
                    <h4 
                      className="text-lg mt-8 mb-4 font-medium"
                      style={{ color: colors.primary }}
                    >
                      What to Expect
                    </h4>
                    <p className="mb-4" style={{ color: colors.text, lineHeight: "1.8" }}>
                      Your session begins with a brief consultation to discuss your needs and set intentions. You'll relax fully clothed in a comfortable setting while I work with your energy field. Most clients report feeling deeply relaxed, with sensations of warmth, tingling, or gentle pulsing during the session.
                    </p>
                    <p style={{ color: colors.text, lineHeight: "1.8" }}>
                      After your session, we'll discuss what was experienced and I'll provide recommendations for supporting your continued healing at home. It's advisable to drink plenty of water and allow time for rest and integration after your session.
                    </p>
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
                    className="border rounded-lg overflow-hidden"
                    style={{ borderColor: colors.primary + "20" }}
                  >
                    <div 
                      className="py-3 px-4"
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
                        <div key={index} className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium" style={{ color: colors.text }}>
                              {session.title}
                            </h5>
                            <span 
                              className="font-bold"
                              style={{ color: colors.secondary }}
                            >
                              {session.price}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm mb-2" style={{ color: colors.text + "99" }}>
                            <span>{session.duration}</span>
                          </div>
                          <p className="text-sm" style={{ color: colors.text + "99" }}>
                            {session.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 text-center">
                      <Link
                        href={currentUser ? "/calendar" : "/login?redirect=/calendar"}
                        className="w-full inline-block px-4 py-2 rounded-md transition-all hover:shadow-md"
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

      {/* FAQ Section */}
      <section 
        className="py-16 mt-12"
        style={{ backgroundColor: colors.neutral + "80" }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-center text-xl md:text-2xl mb-10"
            style={{ color: colors.primary, fontFamily: fonts.serif }}
          >
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
            FREQUENTLY ASKED QUESTIONS
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div 
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ borderLeft: `4px solid ${colors.secondary}` }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  How many sessions will I need?
                </h3>
                <p style={{ color: colors.text, lineHeight: "1.7" }}>
                  This varies greatly depending on your specific goals and condition. Some clients experience significant benefits from a single session, while others benefit from regular ongoing care. After your first session, we'll discuss a recommended treatment plan tailored to your needs.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div 
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ borderLeft: `4px solid ${colors.secondary}` }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  Is energy healing safe?
                </h3>
                <p style={{ color: colors.text, lineHeight: "1.7" }}>
                  Yes, energy healing is a non-invasive complementary therapy that is generally considered safe for people of all ages. It can be used alongside conventional medical treatments and other therapies. However, it should not replace medical care for serious conditions, and I always recommend maintaining your relationship with healthcare providers.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div 
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ borderLeft: `4px solid ${colors.secondary}` }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  What should I wear to a session?
                </h3>
                <p style={{ color: colors.text, lineHeight: "1.7" }}>
                  Comfortable, loose-fitting clothing is recommended. You'll remain fully clothed during all sessions. Consider layers as your body temperature may fluctuate during the treatment. Please avoid strong perfumes or colognes as some clients may be sensitive.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div 
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ borderLeft: `4px solid ${colors.secondary}` }}
              >
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  Which service is right for me?
                </h3>
                <p style={{ color: colors.text, lineHeight: "1.7" }}>
                  If you're unsure which service would best address your needs, I offer a complimentary 15-minute phone consultation to discuss your goals and recommend the most appropriate treatment. You can also book an initial assessment session where we can explore different modalities and create a personalized wellness plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 px-4">
        <div 
          className="bg-white rounded-lg p-8 md:p-12 text-center shadow-sm"
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}10, ${colors.secondary}10)`,
          }}
        >
          <h2 
            className="text-2xl md:text-3xl mb-4"
            style={{ color: colors.primary, fontFamily: fonts.serif }}
          >
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8" style={{ color: colors.text }}>
            Take the first step toward balance, wellness, and spiritual growth. Schedule your session today and experience the transformative power of energy healing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={currentUser ? "/calendar" : "/login?redirect=/calendar"}
              className="px-6 py-3 rounded-md transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.secondary,
                color: colors.neutral,
              }}
            >
              Book Your Session
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md border transition-all hover:bg-white/20"
              style={{
                borderColor: colors.primary + "40",
                color: colors.primary,
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;