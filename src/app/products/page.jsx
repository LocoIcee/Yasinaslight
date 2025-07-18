'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Sparkles, Moon, Sun, Palette, Shield, Gem, ShoppingCart, Plus, Minus } from 'lucide-react';

const ProductsPage = () => {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const products = [
    {
      id: 'intention-coasters',
      title: 'Intention Coasters',
      subtitle: 'Infuse Your Food & Drink with the Frequency of Your Highest Good',
      description: `Imagine if every sip of water or bite of food could help you align with your manifestations, heal your energy, and reconnect with your soul's purpose. With Intention Coasters, this isn't just a dream—it's an energetic reality. Your thoughts, emotions, and energetic state don't just affect your mood—they imprint into everything you touch, cook, drink, or eat. According to energy studies like Dr. Emoto’s water experiment, water is especially responsive to emotional frequencies, creating beautiful crystalline structures when exposed to love, gratitude, or hope—and distorted ones when exposed to fear, anger, or stress. Now imagine what happens when you drink water, any drink or eat food while thinking about your to-do list, stress, or past hurts. That energy goes right back into your body. That’s where Intention Coasters come in.`,
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'One Coaster', price: 15, id: 'one-coaster' },
        { option: 'Four Coasters', price: 50, id: 'four-coasters' },
        { option: 'Seven Coasters', price: 75, id: 'seven-coasters' }
      ],
      features: [
        'Clear unwanted or misaligned frequencies from your food or drink',
        'Balance your energy with the correct chakra frequency',
        'Infuse your nourishment with healing vibrations of love, clarity, and abundance',
        'Strengthen your main manifestation chakra and align your entire energetic system',
        'Elevate your manifestation power by supporting clean, high-vibrational intake'
      ],
      whatMakesUnique: [
        'Infused with Reiki and Blue Light Healing',
        'Tuned to the frequencies of each chakra',
        'Designed with copper and the five elements (Air, Water, Fire, Earth & Spirit)',
        'Energetically programmed to work on your behalf—no matter your emotional state',
        'Crafted with unique designs and symbols to visually connect to your energetic body',
        'Clears, balances, and activates—without effort or memorization'
      ],
      whyTheyMatter: [
        'Manifest more effortlessly',
        'Eat and drink with intention',
        'Heal emotional and energetic imprints',
        'Reconnect with their divine purpose through everyday rituals'
      ],
      howToUse: `Place your glass, mug, plate, or food container directly on the coaster for a few moments before consuming. No need to write anything down, speak affirmations, or control your emotions—the coaster does the energetic reset for you.

Want to amplify a specific chakra or manifestation? Use the coaster aligned to your primary chakra—the one that governs your soul’s expression and manifestation power. (Don’t worry if you’re not sure—we’ll help you discover it!)`,
      chakras: [
        { name: 'Root Chakra', sanskrit: 'Muladhara', color: '🔴', theme: 'Safety, grounding, survival' },
        { name: 'Sacral Chakra', sanskrit: 'Svadhisthana', color: '🟠', theme: 'Emotions, pleasure, creativity' },
        { name: 'Solar Plexus Chakra', sanskrit: 'Manipura', color: '🟡', theme: 'Confidence, willpower, personal power' },
        { name: 'Heart Chakra', sanskrit: 'Anahata', color: '💚', theme: 'Love, compassion, forgiveness' },
        { name: 'Throat Chakra', sanskrit: 'Vishuddha', color: '🔵', theme: 'Communication, truth, self-expression' },
        { name: 'Third Eye Chakra', sanskrit: 'Ajna', color: '🟣', theme: 'Intuition, vision, insight' },
        { name: 'Crown Chakra', sanskrit: 'Sahasrara', color: '⚪', theme: 'Spiritual connection, enlightenment, divine consciousness' }
      ],
      note: `Not sure which chakra is your main manifestation center? Contact me and I'll guide you to the one that's most aligned with your soul's journey.`,
      yasinaNote: `I created these coasters after realizing how much my own thoughts—especially the unconscious, stressful ones—were being absorbed into what I ate and drank. Once I began placing my water on an intention-charged surface, everything shifted: I felt lighter, more supported, and more aligned with what I was calling in. These coasters are a gift from the universe, created to help you remember that you are the vibration that leads the way.`
    },
    {
      id: 'custom-meditations',
      title: 'Custom Meditations & Mindful Guidance',
      subtitle: 'Sacred support for your soul\'s unique journey',
      description: 'Whether you\'re moving through a season of growth, seeking inner clarity, or simply craving deeper connection, I offer soul-aligned meditations and intuitive guidance crafted with your energy in mind.',
      icon: <Moon className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Custom Meditation', price: '$13 - $55', id: 'custom-meditation' }
      ],
      features: [
        'Intuitively created based on what you\'re currently navigating—emotionally, energetically, and spiritually',
        'Perfect for emotional healing and release',
        'Energetic realignment (chakra support, grounding, clearing)',
        'Boosting confidence, clarity, and intuitive trust',
        'Integration after energy healing or coaching sessions'
      ],
      whatYouReceive: [
        'A fully personalized audio meditation (10–20 minutes)',
        'Soothing background music or nature sounds',
        'Intuitive language tailored to your goals, energy, and life situation'
      ],
      preRecordedCollections: [
        'Chakra Balancing Series',
        'Soul Reset Meditations',
        'Abundance & Worthiness Activation',
        'Grounding & Protection Practices',
        'Emotional Calm & Nervous System Regulation',
        'Morning Activation & Evening Wind-Down'
      ],
      perfectFor: [
        'Quiet your mind',
        'Boost confidence',
        'Heal past wounds',
        'Open your heart',
        'Balance your chakras',
        'Connect with your higher self'
      ],
      whyItWorks: 'Unlike generic meditations, these are created specifically for you—your story, your energy, your needs. This deep alignment helps you relax more quickly, connect more deeply, and receive the support and clarity you\'re truly seeking.'
    },
    {
      id: 'crystal-packages',
      title: 'Crystal Packages',
      subtitle: 'For Every Season, Shift, or Soul Calling',
      description: 'These thoughtfully curated crystal bundles are designed to support you through whatever life is bringing your way—whether you\'re navigating a block, going through a transition, or simply seeking extra energetic support.',
      icon: <Gem className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Crystal Package', price: 15, id: 'crystal-package' }
      ],
      packageExamples: [
        'Job', 'Relationship', 'Feminine Issues', 'Male Issues', 'Exams', 'Stress', 'Anxiety', 'Anger', 'Grounding', 'Shielding', 'Friendship', 'Blockages and Awareness', 'New Home', 'Confidence', 'Protection (home, office, or person)', 'Breaking attachments', 'Abundance'
      ],
      whatsIncluded: [
        'Minimum 5 crystals that pertain to the topic',
        'Complete information on each crystal and its properties',
        'A personalized affirmation to help with your specific topic',
        'Energetic intention infused into each package'
      ],
      note: 'Each package is infused with intention and aligned to meet you where you are, and guide you where you\'re meant to go. They can be made for anything that is happening in your life.'
    },
    {
      id: 'soul-paintings',
      title: 'Soul Paintings',
      subtitle: 'A visual channeling of your soul\'s essence',
      description: 'A Soul Painting is a channeled piece of art created through direct transmission from the Universe, expressed through my hands as a reflection of your soul\'s energy. Using either a video call or a photo of you, I tune into your frequency and allow your soul\'s essence to flow onto the canvas.',
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: '10x10 Canvas', price: 105, id: 'soul-painting-10x10' },
        { option: '14x14 Canvas', price: 175, id: 'soul-painting-14x14' }
      ],
      whatYouReceive: [
        'A one-of-a-kind soul painting, intuitively channeled and divinely guided',
        'A personal soul message—this may include soul purpose insight, spiritual guidance, or a message your higher self wants you to know',
        'A custom affirmation to anchor your connection',
        'Optional: sealing of your painting if requested (otherwise left in its raw, natural state)'
      ],
      whyGetOne: [
        'Raise your vibration',
        'Reconnect you to your soul\'s truth',
        'Shift emotional blocks or resistance',
        'Spark inspiration, clarity, or healing',
        'Ground your energy in times of transition'
      ],
      specialNote: 'This is great as a gift for someone, a painting of a soul that has moved on, for yourself and for animals as well.',
      details: [
        'Each painting is done on canvas or mixed media paper',
        'Shipping available worldwide',
        'Please allow 1–2 weeks for creation and channeling process',
        'I will reach out to collect your photo or schedule a brief call before painting begins'
      ],
      yasinaNote: `This is more than art—it’s soul medicine. Every Soul Painting is a co-creation between you, me, and the Universe. I simply become the channel so your soul can show itself to you. If you're seeking alignment, clarity, or a tangible reminder of who you truly are… this is your invitation home.`
    },
    {
      id: 'soul-soothe-oil',
      title: 'Soul Soothe Healing Oil',
      subtitle: 'Deep Relief for Muscles, Joints & Energy Flow',
      description: 'Crafted with intention and ancient wisdom, this healing oil blend brings powerful relief to sore muscles, stiff joints, and stagnant energy. Infused with nature\'s most potent anti-inflammatory and circulatory herbs, each drop is designed to activate healing on both a physical and energetic level.',
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Healing Oil', price: 'Contact for pricing', id: 'soul-soothe-oil' }
      ],
      keyBenefits: [
        'Relieves muscle and joint pain with the natural heat of cayenne and the anti-inflammatory power of arnica',
        'Supports circulation and detoxification with castor oil and black seed oil, known for reducing swelling and promoting cellular repair',
        'Soothes inflammation and strengthens tissue with neem oil—a powerful ally for chronic pain and skin conditions',
        'Calms the nervous system and relaxes tension with lavender and frankincense, supporting both body and spirit',
        'Energetically cleansing, this oil helps release blocked energy and invites peace, ease, and flow into your body'
      ],
      ingredients: [
        'Castor Oil', 'Cayenne Pepper', 'Neem Oil', 'Arnica Oil', 'Black Seed Oil', 'Lavender Essential Oil', 'Frankincense Essential Oil'
      ]
    },
    {
      id: 'radiance-glow-oil',
      title: 'Radiance Glow Oil',
      subtitle: 'Nourish. Cleanse. Restore.',
      description: 'This luxurious multi-use skin elixir is your all-in-one daily ritual for glowing, balanced, and deeply nourished skin. Whether you use it to melt away makeup, moisturize your face and body, or protect your skin from environmental stress, Radiance Glow Oil does it all—naturally.Infused with a blend of potent plant-based oils, each ingredient is chosen for its healing, soothing, and rejuvenating properties. Lightweight yet deeply hydrating, this oil leaves your skin feeling soft, smooth, and radiant without clogging pores or leaving a greasy residue.',
      icon: <Sun className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Glow Oil', price: 'Contact for pricing', id: 'radiance-glow-oil' }
      ],
      keyBenefits: [
        'Gently removes makeup (even waterproof) while calming the skin with lavender, frankincense, and peppermint',
        'Daily moisturizer for face and body, balancing oil production and improving skin elasticity',
        'Soothes inflammation and reduces redness with neem and black seed oil',
        'Brightens and protects with rosehip and raspberry seed oil, rich in antioxidants and natural SPF properties',
        'Heals and nourishes with coconut oil, leaving skin soft and visibly refreshed'
      ],
      ingredients: [
        'Neem Oil', 'Black Seed Oil', 'Frankincense', 'Lavender Essential Oil', 'Coconut Oil', 'Peppermint', 'Rosehip Oil', 'Raspberry Seed Oil'
      ]
    }
  ];

  const toggleProduct = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  const selectOption = (productId, optionId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: optionId
    }));
  };

  const addToCart = (product) => {
    const selectedOption = selectedOptions[product.id];
    if (product.pricing.length > 1 && !selectedOption) {
      alert('Please select an option before adding to cart');
      return;
    }
    
    // This is where you would integrate with your cart system
    console.log('Adding to cart:', {
      productId: product.id,
      selectedOption: selectedOption || product.pricing[0].id,
      product: product.title
    });
    
    // For now, show a simple alert
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent mb-6">
            ✧ Holistic Products ✧
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Each product is energetically designed to support your healing journey, raise your vibration, 
            and reconnect you to your soul's truth. Created with intention, infused with healing energy, 
            and crafted to meet you exactly where you are.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-900">{product.title}</h3>
                        <p className="text-lg text-purple-600 italic">{product.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleProduct(product.id)}
                      className="p-2 hover:bg-purple-50 rounded-full transition-colors"
                    >
                      {expandedProduct === product.id ? (
                        <ChevronUp className="w-6 h-6 text-purple-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-600" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Pricing and Add to Cart */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-purple-900">Pricing Options:</h4>
                        <div className="space-y-2">
                          {product.pricing.map((price, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              {product.pricing.length > 1 && (
                                <input
                                  type="radio"
                                  id={`${product.id}-${price.id}`}
                                  name={`${product.id}-option`}
                                  value={price.id}
                                  checked={selectedOptions[product.id] === price.id}
                                  onChange={() => selectOption(product.id, price.id)}
                                  className="text-purple-600 focus:ring-purple-500"
                                />
                              )}
                              <label 
                                htmlFor={`${product.id}-${price.id}`}
                                className="flex items-center space-x-2 cursor-pointer"
                              >
                                <span className="text-purple-800 font-medium">{price.option}:</span>
                                <span className="text-2xl font-bold text-purple-900">
                                  {typeof price.price === 'number' ? `$${price.price}` : price.priceRange ? `$${price.priceRange}` : price.price}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                  
                  {expandedProduct === product.id && (
                    <div className="border-t border-purple-100 pt-6 space-y-6">
                      {product.features && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                            What It Does:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-purple-600 mt-1 text-lg">•</span>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.whatMakesUnique && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                            <Gem className="w-5 h-5 mr-2 text-purple-600" />
                            What Makes These Unique:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {product.whatMakesUnique.map((unique, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-amber-500 mt-1">💎</span>
                                <span className="text-gray-700">{unique}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.whyTheyMatter && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                            Why They Matter:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {product.whatMakesUnique.map((unique, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-amber-500 mt-1">💎</span>
                                <span className="text-gray-700">{unique}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.howToUse && (
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">How to Use:</h4>
                          <p className="text-gray-700 leading-relaxed">{product.howToUse}</p>
                        </div>
                      )}

                      {product.chakras && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-4">The 7 Main Chakras:</h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {product.chakras.map((chakra, idx) => (
                              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-100 hover:border-purple-200 transition-colors">
                                <div className="flex items-center space-x-3 mb-2">
                                  <span className="text-3xl">{chakra.color}</span>
                                  <div>
                                    <h5 className="font-semibold text-purple-900">{chakra.name}</h5>
                                    <p className="text-sm text-purple-600 italic">{chakra.sanskrit}</p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-700">{chakra.theme}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.whatYouReceive && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">What You'll Receive:</h4>
                          <ul className="space-y-2">
                            {product.whatYouReceive.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.preRecordedCollections && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Pre-Recorded Collections:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {product.preRecordedCollections.map((collection, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">🎵</span>
                                <span className="text-gray-700">{collection}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.packageExamples && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Package Examples:</h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {product.packageExamples.map((example, idx) => (
                              <span key={idx} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg px-3 py-2 text-sm text-purple-900 font-medium text-center">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.whatsIncluded && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {product.whatsIncluded.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.whyGetOne && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Why Get a Soul Painting:</h4>
                          <p className="text-gray-700 mb-4">
                            Sometimes we feel disconnected from who we are or where we’re going. A Soul Painting bypasses the busy mind and brings you back into harmony with your heart and higher self.
                          </p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {product.whyGetOne.map((reason, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-pink-500 mt-1">💖</span>
                                <span className="text-gray-700">{reason}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-gray-700 mt-4">
                            It’s like catching a glimpse of your soul in visual form—a reminder of who you truly are, beyond fear, beyond doubt, beyond the noise.
                            Whenever you’re feeling out of alignment, simply return to your Soul Painting. Let it hold you, guide you, and remind you: you are already whole.
                          </p>
                        </div>
                      )}

                      {product.keyBenefits && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {product.keyBenefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-green-500 mt-1">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.ingredients && (
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Ingredients:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.ingredients.map((ingredient, idx) => (
                              <span key={idx} className="bg-white/80 rounded-full px-3 py-1 text-sm text-gray-700 border border-green-200">
                                {ingredient}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {product.specialNote && (
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                          <p className="text-gray-700 italic">
                            <span className="font-semibold text-orange-800">Special Note:</span> {product.specialNote}
                          </p>
                        </div>
                      )}

                      {product.details && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Details:</h4>
                          <ul className="space-y-2">
                            {product.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-blue-500 mt-1">ℹ️</span>
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {product.note && (
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                          <p className="text-gray-700 italic">
                            <span className="font-semibold text-purple-800">Note:</span> {product.note}
                          </p>
                        </div>
                      )}

                      {product.yasinaNote && (
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                          <p className="text-gray-700 italic">
                            <span className="font-semibold text-purple-800">A Note from Yasina:</span> {product.yasinaNote}
                          </p>
                        </div>
                      )}

                      {product.whyItWorks && (
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Why It Works:</h4>
                          <p className="text-gray-700">{product.whyItWorks}</p>
                        </div>
                      )}

                      {product.perfectFor && (
                        <div>
                          <h4 className="text-lg font-semibold text-purple-900 mb-3">Perfect For:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {product.perfectFor.map((purpose, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-purple-600 mt-1">✨</span>
                                <span className="text-gray-700">{purpose}</span>
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

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Ready to Elevate Your Energy?</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Each product is created with love, intention, and deep respect for your healing journey. 
              Whether you're seeking energetic support, physical healing, or spiritual connection, 
              these sacred tools are here to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                Contact for Custom Orders
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;