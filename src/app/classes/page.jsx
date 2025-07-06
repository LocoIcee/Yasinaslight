'use client';
import React, { useState } from "react";
import ImagePlaceholders from "@/utils/ImagePlaceholders";

const ASSET_BASE_URL = "/assets/";

const ClassesPage = () => {
  // Colors from the redesign document
  const colors = {
    primary: "#563D7C", // Deep Purple
    secondary: "#4ECDC4", // Soft Teal
    accent: "#FFD700", // Golden Yellow
    neutral: "#F8F5F2", // Warm White
    text: "#333333", // Dark Charcoal
  };

  // Filter state
  const [filter, setFilter] = useState("all");

  // Class/event categories
  const categories = ["all", "workshops", "retreats", "certifications", "online"];

  // Classes and events data
  const classesEvents = [
    {
      id: "reiki-level-1",
      title: "Reiki Level 1 Certification",
      category: "certifications",
      date: "June 15-16, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Yasina's Light Healing Center, Airdrie",
      price: "$250",
      image: `url(${ASSET_BASE_URL}reiki-class.jpg)`,
      description: "Begin your journey as a Reiki practitioner. This two-day workshop covers the fundamentals of Reiki energy healing, including hand positions, self-healing techniques, and your first attunement.",
      spots: 8,
      spotsLeft: 3,
    },
    {
      id: "crystal-workshop",
      title: "Crystal Healing Workshop",
      category: "workshops",
      date: "May 20, 2024",
      time: "6:30 PM - 9:00 PM",
      location: "Yasina's Light Healing Center, Airdrie",
      price: "$85",
      image: `url(${ASSET_BASE_URL}crystal-workshop.jpg)`,
      description: "Discover the healing properties of crystals and learn how to incorporate them into your spiritual practice. Includes a selection of crystals to take home.",
      spots: 12,
      spotsLeft: 5,
    },
    {
      id: "full-moon-ceremony",
      title: "Full Moon Ceremony",
      category: "retreats",
      date: "May 23, 2024",
      time: "8:00 PM - 10:00 PM",
      location: "Outdoor Location (Weather Permitting)",
      price: "$45",
      image: `url(${ASSET_BASE_URL}full-moon.jpg)`,
      description: "Connect with the powerful energy of the full moon in this sacred ceremony. Includes guided meditation, energy clearing, and intention setting rituals.",
      spots: 15,
      spotsLeft: 8,
    },
    {
      id: "meditation-online",
      title: "Virtual Meditation Series",
      category: "online",
      date: "Every Tuesday in June",
      time: "7:30 PM - 8:15 PM",
      location: "Zoom",
      price: "$60 for 4 sessions",
      image: `url(${ASSET_BASE_URL}online-meditation.jpg)`,
      description: "Join our virtual meditation series to develop a consistent practice from the comfort of your home. Each week focuses on different meditation techniques.",
      spots: "Unlimited",
      spotsLeft: "Available",
    },
    {
      id: "chakra-workshop",
      title: "Chakra Balancing Workshop",
      category: "workshops",
      date: "June 8, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Yasina's Light Healing Center, Airdrie",
      price: "$95",
      image: `url(${ASSET_BASE_URL}chakra-workshop.jpg)`,
      description: "Learn to identify and balance your chakra system. This workshop includes energy assessment techniques, balancing practices, and personalized recommendations.",
      spots: 10,
      spotsLeft: 6,
    },
    {
      id: "sedona-retreat",
      title: "Sedona Spiritual Retreat",
      category: "retreats",
      date: "September 18-22, 2024",
      time: "4 nights, 5 days",
      location: "Sedona, Arizona",
      price: "$1,850",
      image: `url(${ASSET_BASE_URL}sedona-retreat.jpg)`,
      description: "An immersive retreat in the energy vortexes of Sedona. Includes accommodation, guided meditations, hikes to sacred sites, and transformational healing sessions.",
      spots: 8,
      spotsLeft: 2,
    },
  ];

  // Filter classes/events by category
  const filteredEvents = filter === "all" 
    ? classesEvents 
    : classesEvents.filter(event => event.category === filter);

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
            backgroundImage: `url(${ASSET_BASE_URL}sacred-geometry.png)`,
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        ></div>

        <h1
          className="text-3xl md:text-4xl relative z-10"
          style={{ color: colors.neutral, fontFamily: "'Cormorant Garamond', serif" }}
        >
          CLASSES & EVENTS
        </h1>
        <p
          className="mt-2 text-lg relative z-10"
          style={{ color: `${colors.neutral}DD` }}
        >
          Transformative Learning Experiences
        </p>
      </div>

      {/* Classes & Events Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2
            className="text-xl md:text-2xl mb-4"
            style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
            EXPAND YOUR KNOWLEDGE
            <span className="px-2" style={{ color: colors.accent }}>✧</span>
          </h2>
          <p style={{ color: colors.text, lineHeight: "1.8" }}>
            Discover opportunities to deepen your spiritual practice and healing journey through 
            our workshops, certifications, and special events. Join our community of like-minded 
            seekers on the path to wellness and personal growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category ? "shadow-md" : ""
              }`}
              style={{
                backgroundColor: filter === category ? colors.primary : `${colors.primary}20`,
                color: filter === category ? colors.neutral : colors.primary,
                border: filter === category ? "none" : `1px solid ${colors.primary}40`,
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-lg overflow-hidden transition-all hover:shadow-lg"
              style={{
                backgroundColor: colors.neutral,
                border: `1px solid ${colors.secondary}30`,
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              }}
            >
              {/* Event Image */}
              <div className="h-48 w-full relative">
                <ImagePlaceholders.ClassImage name={event.title} className="h-full" />
                {/* Category tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: `${colors.primary}E6`,
                    color: colors.neutral,
                  }}
                >
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </div>
              </div>
              
              {/* Event Content */}
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {event.title}
                </h3>
                
                {/* Event details */}
                <div className="mb-3">
                  <div className="flex items-center text-sm mb-1">
                    <span style={{ color: colors.secondary }}>📅</span>
                    <span className="ml-2" style={{ color: colors.text }}>
                      {event.date}
                    </span>
                  </div>
                  <div className="flex items-center text-sm mb-1">
                    <span style={{ color: colors.secondary }}>⏰</span>
                    <span className="ml-2" style={{ color: colors.text }}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm mb-1">
                    <span style={{ color: colors.secondary }}>📍</span>
                    <span className="ml-2" style={{ color: colors.text }}>
                      {event.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-4" style={{ color: `${colors.text}99` }}>
                  {event.description.length > 120
                    ? `${event.description.substring(0, 120)}...`
                    : event.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span 
                      className="block text-xs" 
                      style={{ color: `${colors.text}70` }}
                    >
                      Investment
                    </span>
                    <span 
                      className="font-medium" 
                      style={{ color: colors.primary }}
                    >
                      {event.price}
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <span 
                      className="block text-xs" 
                      style={{ color: `${colors.text}70` }}
                    >
                      Availability
                    </span>
                    <span 
                      className={`font-medium ${
                        event.spotsLeft <= 3 && event.spotsLeft !== "Available" ? "text-orange-500" : ""
                      }`}
                    >
                      {event.spotsLeft} / {event.spots}
                    </span>
                  </div>
                </div>
                
                <div className="text-center mt-5">
                  <a
                    href={`/classes/${event.id}`}
                    className="inline-block px-5 py-2 rounded-full transition-all hover:shadow-md"
                    style={{
                      backgroundColor: colors.secondary,
                      color: colors.neutral,
                    }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div 
          className="mt-16 p-8 rounded-lg max-w-3xl mx-auto text-center"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
          }}
        >
          <h3
            className="text-xl md:text-2xl mb-3"
            style={{ color: colors.primary, fontFamily: "'Cormorant Garamond', serif" }}
          >
            Stay Updated on Future Events
          </h3>
          <p className="mb-6" style={{ color: colors.text }}>
            Subscribe to our newsletter to be the first to know about upcoming classes, workshops, and special events.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-md"
              style={{
                backgroundColor: "white",
                border: `1px solid ${colors.primary}30`,
                outline: "none",
              }}
            />
            <button
              className="px-5 py-2 rounded-md transition-all hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                color: colors.neutral,
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;