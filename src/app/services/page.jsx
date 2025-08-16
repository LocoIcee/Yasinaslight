'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Sparkles, Moon, Sun, Eye, Crown, Flower, Zap, Home, Shield, Clock, Star } from 'lucide-react';

const ServicesPage = () => {
  const [expandedChakra, setExpandedChakra] = useState(null);
  const [expandedService, setExpandedService] = useState(null);

  const chakras = [
    {
      name: "Root Chakra",
      sanskrit: "Muladhara",
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: <Flower className="w-6 h-6" />,
      theme: "Safety, grounding, survival",
      location: "Base of spine",
      description: "The Root Chakra is your energetic foundation, connected to safety, stability, and your sense of belonging. When blocked, it can lead to insecurity around basic needs, finances, or physical well-being. When balanced, it brings a deep sense of calm, focus, and inner strength. You feel grounded, supported, and clear in your direction."
    },
    {
      name: "Sacral Chakra",
      sanskrit: "Svadhisthana",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      icon: <Sparkles className="w-6 h-6" />,
      theme: "Emotions, pleasure, creativity",
      location: "Lower abdomen",
      description: "The Sacral Chakra is your center of passion, creativity, and emotional connection. It governs your ability to feel joy, express desires, and experience intimacy with yourself and others. When balanced, you feel comfortable in your body, open to pleasure, and inspired to create."
    },
    {
      name: "Solar Plexus Chakra",
      sanskrit: "Manipura",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      icon: <Sun className="w-6 h-6" />,
      theme: "Confidence, willpower, personal power",
      location: "Upper abdomen/stomach",
      description: "The Solar Plexus Chakra is your center of personal power, self-esteem, and inner confidence. It influences how you see yourself, trust your instincts, and make aligned choices. This chakra empowers you to stand in your truth, set boundaries, and stop seeking external approval."
    },
    {
      name: "Heart Chakra",
      sanskrit: "Anahata",
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: <Heart className="w-6 h-6" />,
      theme: "Love, compassion, forgiveness",
      location: "Center of chest",
      description: "The Heart Chakra sits at the center of your chest and governs love, compassion, and connection—with yourself, others, and the divine. When balanced, you release past wounds, embrace forgiveness, and open yourself to joy and meaningful relationships."
    },
    {
      name: "Throat Chakra",
      sanskrit: "Vishuddha",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      icon: <Zap className="w-6 h-6" />,
      theme: "Communication, truth, self-expression",
      location: "Throat",
      description: "The Throat Chakra empowers you to express your truth with clarity, courage, and compassion. It governs communication on all levels and is closely connected to your Higher Self. When tuned in, your voice becomes a channel for intuition and authenticity."
    },
    {
      name: "Third Eye Chakra",
      sanskrit: "Ajna",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      icon: <Eye className="w-6 h-6" />,
      theme: "Intuition, vision, insight",
      location: "Between the eyebrows",
      description: "The Third Eye Chakra is your portal to insight, clarity, and intuitive guidance. It supports your ability to trust the unknown, tap into imagination, and see beyond surface-level reality. Balancing this chakra activates both sides of the brain and fuels all the senses."
    },
    {
      name: "Crown Chakra",
      sanskrit: "Sahasrara",
      color: "text-white",
      bgColor: "bg-gray-50",
      icon: <Crown className="w-6 h-6" />,
      theme: "Spiritual connection, enlightenment, divine consciousness",
      location: "Top of the head",
      description: "The Crown Chakra is your gateway to higher consciousness, inner peace, and spiritual clarity. When activated, it helps you trust the divine plan, even during uncertain times. You begin to feel deeply present, connected to something greater, and more aligned with your soul's purpose."
    }
  ];

  const services = [
    {
      id: 'soul-alignment',
      title: 'The Soul Alignment Session',
      subtitle: 'Feel grounded. Feel lighter. Feel like you again.',
      duration: '60 minutes',
      description: 'An intuitive healing experience designed to help you release emotional weight, calm your nervous system, and reconnect with your soul\'s inner truth—gently, safely, and powerfully.',
      icon: <Star className="w-8 h-8" />,
      tiers: [
        {
          name: 'The Reset',
          price: '$211',
          description: 'Perfect if you\'re new to energy healing or need a light tune-up.',
          includes: [
            '60-minute intuitive session',
            'Grounding energy clearing + chakra balance',
            '1 personalized affirmation',
            'Brief post-session reflection notes'
          ]
        },
        {
          name: 'The Soul Alignment Experience',
          price: '$311',
          description: 'The full, signature experience. Deep support for clarity and transformation.',
          recommended: true,
          includes: [
            '60-minute intuitive session',
            'Reiki, Hypnotherapy or Soul Journey (depends on what you need)',
            'Energetic body scan + clearing',
            'Personalized journal prompts + energy message + EFT',
            '15-min post-call check-in (within 7 days)'
          ]
        },
        {
          name: 'The Reset & Rise Package',
          price: '$411',
          description: 'For those ready to go deeper. Includes integration and follow-up support.',
          includes: [
            'Everything in Soul Alignment Experience',
            '1 x 45-minute follow-up session (within 2–3 weeks)',
            'Custom guided meditation OR hypno audio',
            'Text support for 5 days after session'
          ]
        }
      ]
    },
    {
      id: 'alignment-journey',
      title: 'The Alignment Journey',
      subtitle: '4-Week Coaching + Healing Package',
      duration: '4 weeks',
      price: '$1033',
      description: 'A 4-week 1:1 coaching + healing experience for soul-led women ready to move beyond stuckness and step into clarity, confidence, and self-trust.',
      icon: <Moon className="w-8 h-8" />,
      includes: [
        '1x Soul Reset Session to open the journey',
        '3x Weekly 60-min Integration Calls',
        'Personalized affirmations + journal prompts',
        'Customized meditation or hypno recording',
        'Optional text/voice support between sessions (Mon–Fri)',
        'Additional support based on your initial consultation'
      ]
    },
    {
      id: 'oracle-readings',
      title: 'Oracle Readings',
      subtitle: 'Clarity. Connection. Soul-Led Guidance.',
      duration: '60 minutes',
      price: '$125',
      description: 'Sacred conversations with your higher self, your guides, and divine energy. Using intuition, energy, and card symbolism to offer clarity, perspective, and soul-level confirmation.',
      icon: <Eye className="w-8 h-8" />,
      includes: [
        'Intuitive card reading based on your intention',
        'Clarity & perspective on your situation',
        'Soul-level confirmation and insights',
        'Interactive session with conversation and reflection',
        'Connection to your inner knowing'
      ]
    },
    {
      id: 'reiki-healing',
      title: 'Reiki Healing',
      subtitle: 'Spiritually guided energy for balance, clarity, and renewal',
      duration: '60 minutes',
      price: '$75',
      description: 'An ancient, sacred healing art that channels universal life force energy to support the body, mind, and spirit. Available in-person or distance healing.',
      icon: <Sparkles className="w-8 h-8" />,
      benefits: [
        'Deep relaxation and stress relief',
        'Pain management and physical healing',
        'Emotional clearing and trauma release',
        'Improved sleep and increased vitality',
        'Energetic alignment (chakras, meridians, aura cleansing)',
        'Immune system support and detoxification',
        'Spiritual connection and inner clarity'
      ]
    },
    {
      id: 'chakra-balancing',
      title: 'Chakra Balancing Session',
      subtitle: 'Realign your energy. Reconnect to your truth. Restore your flow.',
      duration: '60 minutes',
      price: '$125',
      description: 'A gentle, intuitive healing experience that helps restore harmony to your entire energetic system using energy work, crystals, sound, and aromatherapy.',
      icon: <Flower className="w-8 h-8" />,
      includes: [
        'Intuitive scan of your chakras to identify imbalances',
        'Hands-on or remote energy healing',
        'Chakra-specific tools (crystals, sound, affirmations, essential oils)',
        'Personalized insights and messages',
        'Deep sense of calm, clarity, and inner alignment'
      ],
      chakrasTypes: [chakras[0], chakras[1], chakras[2], chakras[3], chakras[4], chakras[5], chakras[6]]
      
    },
    {
      id: 'energy-clearings',
      title: 'Energy & Entity Clearings',
      subtitle: 'Cleanse your space. Reclaim your energy. Restore your peace.',
      duration: 'Variable',
      price: 'Contact for pricing',
      description: 'Intuitive clearing sessions for homes, businesses, and personal energy fields to release heavy energy, emotional residue, and unwanted spiritual attachments.',
      icon: <Shield className="w-8 h-8" />,
      types: [
        {
          name: 'Home Clearings',
          description: 'Cleanse old imprints and bring harmony back to your living space'
        },
        {
          name: 'Business Clearings',
          description: 'Reset workspace energy to support success and abundance'
        },
        {
          name: 'Personal Entity & Energy Clearings',
          description: 'Remove spiritual attachments, cut cords, and restore your sense of self'
        }
      ]
    },
    {
      id: 'past-life-healing',
      title: 'Past Life Energy & Soul Healing',
      subtitle: 'Release the past so your soul can rise in the present.',
      duration: 'Variable',
      price: '$222',
      description: 'Soul clearing sessions to release karmic ties, soul contracts, and energetic imprints from past lives that may be impacting your present path.',
      icon: <Clock className="w-8 h-8" />,
      includes: [
        'Past Life Exploration or Regression',
        'Akashic Record insight',
        'Oracle or intuitive card guidance',
        'Energy clearing & cord cutting',
        'Soul contract release or rewriting',
        'Guided meditation and healing activations'
      ]
    },
    {
      id: 'hypnotherapy',
      title: 'Hypnotherapy',
      subtitle: 'Release the past. Rewire the mind. Reclaim your power.',
      duration: 'Variable',
      price: '$250 and up',
      description: 'A gentle, guided process to access your subconscious mind and release limiting beliefs, heal emotional wounds, and align with your truth.',
      icon: <Moon className="w-8 h-8" />,
      benefits: [
        'Let go of limiting beliefs and self-sabotage',
        'Heal emotional wounds and past experiences',
        'Rewire subconscious patterns for confidence',
        'Alleviate anxiety, fear, or emotional overwhelm',
        'Align with your truth, purpose, and inner peace'
      ]
    },
    {
      id: 'reflexology',
      title: 'Reflexology',
      subtitle: 'Ancient healing through pressure point therapy',
      duration: '30 or 60 minutes',
      price: '$75',
      description: 'Based on the theory that hands, and feet are connected to organs and body systems. Promotes QI flow and overall well-being.',
      icon: <Heart className="w-8 h-8" />,
      benefits: [
        'Stress reduction and anxiety relief',
        'Pain relief and improved circulation',
        'Enhanced relaxation and better sleep',
        'Detoxification and immune support',
        'Hormonal balance and digestive improvement'
      ]
    }
  ];

  const toggleChakra = (index) => {
    setExpandedChakra(expandedChakra === index ? null : index);
  };

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-5xl font-bold text-purple-900 mb-6">
            ✧ MY APPROACH TO HEALING ✧
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            My approach to healing is intuitive, integrative, and deeply personal. I hold space for the whole
            of you—body, mind, and soul—recognizing that true transformation happens when all aspects of
            your being are seen, heard, and supported.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Healing Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Healing Is a Journey, Not a One-Time Fix</h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
              While one session can spark powerful shifts, lasting transformation often unfolds over time.
              Deep-rooted patterns, energetic imprints, and past life wounds can take more than one session
              to fully release and integrate.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
                <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Multi-Session Bundles</h3>
                <p className="text-gray-700">Receive a discount when booking 3 or more sessions</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl">
                <Moon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Soul Alignment Package</h3>
                <p className="text-gray-700">A full journey of healing, clearing, intuitive support & soul reconnection</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl">
                <Sparkles className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Custom Packages</h3>
                <p className="text-gray-700">We can build a plan based on your unique energetic needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-900 mb-12 text-center">Healing Services</h2>
          
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-900">{service.title}</h3>
                        <p className="text-lg text-gray-600 italic">{service.subtitle}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                          {service.price && (
                            <span className="text-lg font-semibold text-purple-700">{service.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleService(service.id)}
                      className="p-2 hover:bg-purple-50 rounded-full transition-colors"
                    >
                      {expandedService === service.id ? (
                        <ChevronUp className="w-6 h-6 text-purple-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-600" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  {expandedService === service.id && (
                    <div className="border-t pt-6">
                      {service.tiers && (
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          {service.tiers.map((tier, index) => (
                            <div key={index} className={`p-6 rounded-xl ${tier.recommended ? 'bg-gradient-to-br from-purple-50 to-blue-50 ring-2 ring-purple-200' : 'bg-gray-50'}`}>
                              {tier.recommended && (
                                <div className="text-center mb-3">
                                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Recommended
                                  </span>
                                </div>
                              )}
                              <h4 className="text-xl font-semibold text-purple-900 mb-2">{tier.name}</h4>
                              <p className="text-2xl font-bold text-purple-700 mb-3">{tier.price}</p>
                              <p className="text-gray-600 mb-4">{tier.description}</p>
                              <ul className="space-y-2">
                                {tier.includes.map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="text-purple-600 mt-1">•</span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {service.includes && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">What's Included:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {service.includes.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-purple-600 mt-1">•</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.benefits && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Benefits:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-green-600 mt-1">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {service.types && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Types Available:</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {service.types.map((type, idx) => (
                              <div key={idx} className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                                <h5 className="font-semibold text-purple-900 mb-2">{type.name}</h5>
                                <p className="text-gray-700 text-sm">{type.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {service.id === 'chakra-balancing' && service.chakrasTypes && (
                      <div className="mt-10">
                        <h4 className="text-lg font-semibold text-purple-900 mb-4">The 7 Main Chakras</h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {service.chakrasTypes.map((chakra, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
                              <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <div className={`p-3 rounded-full ${chakra.bgColor}`}>
                                    <div className={chakra.color}>{chakra.icon}</div>
                                  </div>
                                  <button
                                    onClick={() => toggleChakra(index)}
                                    className="p-2 hover:bg-purple-50 rounded-full transition-colors"
                                  >
                                    {expandedChakra === index ? (
                                      <ChevronUp className="w-5 h-5 text-purple-600" />
                                    ) : (
                                      <ChevronDown className="w-5 h-5 text-purple-600" />
                                    )}
                                  </button>
                                </div>
                                <h3 className="text-xl font-bold text-purple-900 mb-1">{chakra.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{chakra.sanskrit}</p>
                                <p className="text-sm text-gray-500 mb-3">{chakra.location}</p>
                                <p className="text-sm font-medium text-purple-700">{chakra.theme}</p>
                                {expandedChakra === index && (
                                  <div className="mt-4 pt-4 border-t">
                                    <p className="text-gray-700 text-sm leading-relaxed">{chakra.description}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Ready to Begin Your Healing Journey?</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Healing isn't linear, and you're never alone in it. If you're ready to commit to your growth, 
              I'm here to walk beside you—one aligned step at a time. 💖
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                <Home className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-purple-900 mb-2">In-Person Sessions</h3>
                <p className="text-gray-700">Available in Calgary, Alberta</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl">
                <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Virtual Sessions</h3>
                <p className="text-gray-700">Available worldwide via Zoom</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              💛 Sliding scale may be available for single moms, or those in need—just ask
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Book a Session
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;