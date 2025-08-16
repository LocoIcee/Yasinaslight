'use client'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Heart, Sparkles, Moon, Sun, Palette, Shield, Gem, ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import ImageCarousel from '@/components/ui/carousel';

 const products = [
    {
      togLearn: true,
      id: 'intention-coasters',
      title: 'Intention Coasters',
      subtitle: 'Infuse Your Food & Drink with the Frequency of Your Highest Good',
      description: `Imagine if every sip of water or bite of food could help you align with your manifestations, heal your energy, and reconnect with your soul's purpose. With Intention Coasters, this isn't just a dream—it's an energetic reality. Your thoughts, emotions, and energetic state don't just affect your mood—they imprint into everything you touch, cook, drink, or eat. According to energy studies like Dr. Emoto’s water experiment, water is especially responsive to emotional frequencies, creating beautiful crystalline structures when exposed to love, gratitude, or hope—and distorted ones when exposed to fear, anger, or stress. Now imagine what happens when you drink or eat food while thinking about your to-do list, stress, or past hurts. That energy goes right back into your body. That’s where Intention Coasters come in.`,
      images: [
      "/assets/products/IC1.jpeg",
      "/assets/products/IC2.jpeg",
      "/assets/products/IC3.jpeg"
      ],
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'One Coaster', price: 15, id: 'one-coaster' },
        { option: 'Four Coasters', price: 50, id: 'four-coasters' },
        { option: 'Seven Coasters', price: 75, id: 'seven-coasters' }
      ],
      details: [
      "Each coaster is hand-crafted and infused with specific healing intentions",
      "Features sacred geometry patterns and healing symbols",
      "Perfect for placing under cups, glasses, and plates to infuse with positive energy",
      "Set of 7 coasters, each with different healing properties based on the chakra system",
      "Includes a guide explaining how to use them for maximum benefit",
      "Durable and water-resistant finish"
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
      togLearn: false,
      id: 'custom-meditations',
      title: 'Custom Meditations & EFT',
      subtitle: 'Sacred support for your soul\'s unique journey',
      description: 'Whether you\'re moving through a season of growth, seeking inner clarity, or simply craving deeper connection, I offer soul-aligned meditations and intuitive guidance crafted with your energy in mind.',
      images: [
      "/assets/products/CM2.webp",
      ],
      icon: <Moon className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Custom Meditation', price: 'Contact for pricing', id: 'custom-meditation' }
      ],
       details: [
      "Completely personalized meditation created just for you, based on your specific goals, challenges, and spiritual needs",
      "Includes consultation to understand your meditation preferences",
      "High-quality audio recording",
      "Pre-recorded meditations and EFT also available for: manifestation, healing, chakra balancing, stress relief and more",
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
      togLearn: true,
      id: 'crystal-packages',
      title: 'Crystal Packages',
      subtitle: 'For a Reason, Season, or Lifetime',
      description: 'These thoughtfully curated crystal bundles are designed to support you through whatever life is bringing your way—whether you\'re navigating a block, going through a transition, or simply seeking extra energetic support.',
       images: [
      "/assets/products/IC1.jpeg",
      "/assets/products/IC2.jpeg",
      "/assets/products/IC3.jpeg"
      ],
      icon: <Gem className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Crystal Package', price: 15, id: 'crystal-package' }
      ],
      packageExamples: [
        'Job', 'Relationship', 'Feminine Issues', 'Male Issues', 'Exams', 'Stress', 'Anxiety', 'Anger', 'Grounding', 'Shielding', 'Friendship', 'Blockages and Awareness', 'New Home', 'Confidence', 'Protection (home, office, or person)', 'Breaking attachments', 'Abundance'
      ],
      details: [
        'Minimum 5 crystals that pertain to the topic',
        'Complete information on each crystal and its properties',
        'A personalized affirmation to help with your specific topic',
        'Energetic intention infused into each package'
      ],
      note: 'Each package is infused with intention and aligned to meet you where you are, and guide you where you\'re meant to go. They can be made for anything that is happening in your life.'
    },
    {
      togLearn: true,
      id: 'soul-paintings',
      title: 'Soul Paintings',
      subtitle: 'A visual channeling of your soul\'s essence',
      description: 'A Soul Painting is a channeled piece of art created through direct transmission from the Universe, expressed through my hands as a reflection of your soul\'s energy. Using either a video call or a photo of you, I tune into your frequency and allow your soul\'s essence to flow onto the canvas.',
      images: [
      "/assets/products/IC1.jpeg",
      "/assets/products/IC2.jpeg",
      "/assets/products/IC3.jpeg"
      ],
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: '10x10 Canvas', price: 105, id: 'soul-painting-10x10' },
        { option: '14x14 Canvas', price: 175, id: 'soul-painting-14x14' }
      ],
      details: [
        'Each painting is done on canvas',
        'Shipping available worldwide',
        'Please allow 1–2 weeks for creation and channeling process',
        'I will reach out to collect your photo or schedule a brief call before painting begins'
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
      
      yasinaNote: `This is more than art—it’s soul medicine. Every Soul Painting is a co-creation between you, me, and the Universe. I simply become the channel so your soul can show itself to you. If you're seeking alignment, clarity, or a tangible reminder of who you truly are… this is your invitation home.`,
      noteAddon: `The colors are shown to me and the painting itself is lead by the universe in the flow it should be.  You may feel emotions, see pictures, get intuitive messages, butterflies, find peace and much more.  There is no wrong or right way to look at the picture, because each time you look at it or turn it, a new message will be seen.`
    },
    {
      togLearn: true,
      id: 'rapid-recovery-oil',
      title: 'Rapid Recovery Oil',
      subtitle: 'A powerful handmade healing oil designed to sooth relieve and heal',
      description: 'Crafted with intention and ancient wisdom, this healing oil blend brings powerful relief to sore muscles, stiff joints, and stagnant energy. Infused with nature\'s most potent anti-inflammatory and circulatory herbs, each drop is designed to activate healing on both a physical and energetic level.',
      images: [
      "/assets/products/IC1.jpeg",
      "/assets/products/IC2.jpeg",
      "/assets/products/IC3.jpeg"
      ],
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Healing Oil', price: 'Contact for pricing', id: 'rapid-recovery-oil' }
      ],
       details: [
      "Introducing a powerful handmade healing oil blend designed to soothe, relieve and heal. Crafted with intention and ancient wisdom, this healing oil blend brings powerful relief!  ",
      "Infused with nature's most potent anti-inflammatory and circulatory herbs, each drop is designed to activate healing on both a physical and energetic level",
      "With the natural heat of cayenne and the anti-inflammatory power of arnica",
      "Supports circulation and detoxification with castor oil and black seed oil, known for reducing swelling and promoting cellular repair",
      " Soothes inflammation and strengthens tissue with neem oil—a powerful ally for chronic pain and skin conditions",
      " Calms the nervous system and relaxes tension with lavender and frankincense, supporting both body and spirit",
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
      togLearn: true,
      id: 'radiance-glow-oil',
      title: 'Radiance Glow Oil',
      subtitle: 'Nourish. Cleanse. Restore.',
      description: 'This luxurious multi-use skin elixir is your all-in-one daily ritual for glowing, balanced, and deeply nourished skin. Whether you use it to melt away makeup, moisturize your face and body, or protect your skin from environmental stress, Radiance Glow Oil does it all—naturally.Infused with a blend of potent plant-based oils, each ingredient is chosen for its healing, soothing, and rejuvenating properties. Lightweight yet deeply hydrating, this oil leaves your skin feeling soft, smooth, and radiant without clogging pores or leaving a greasy residue.',
      images: [
      "/assets/products/IC1.jpeg",
      "/assets/products/IC2.jpeg",
      "/assets/products/IC3.jpeg"
      ],
      icon: <Sun className="w-8 h-8 text-purple-600" />,
      pricing: [
        { option: 'Glow Oil', price: 'Contact for pricing', id: 'radiance-glow-oil' }
      ],
      details: [
      "Each oil blend is created specifically for your healing intentions",
      "Made with high-quality, therapeutic-grade essential oils",
      "Includes detailed instructions for use and application",
      "Available for emotional healing, physical ailments, chakra balancing, and more",
      "Comes in a 10ml amber glass bottle with roller top for easy application",
      "All natural ingredients with no synthetic additives"
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

export default function Products() {
  const [expandedProducts, setExpandedProducts] = useState({});
  const [modalProduct, setModalProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const modalRef = useRef(null);
  
  const toggleProduct = (productId) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
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
  }

  const priceDisplay = (price) => {
    if (typeof price[0] === 'number') {
      return `$${price.toFixed(2)}`;
    }
    return price; // For 'Contact for pricing' or similar strings
  } 

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  if (modalProduct) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [modalProduct]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">Sacred Products</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our collection of handcrafted spiritual tools and personalized healing products, 
            each created with love and intention to support your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square relative bg-gradient-to-br from-purple-100 to-pink-100">
                <Image
                  src="/assets/products/IC17.jpeg"
                  alt={product.title}
                  fill
                  className="object-contain p-8"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-purple-800">{product.title}</h3>
                  <span className="text-2xl font-bold text-pink-600">{}</span>
                  <button
                  onClick={() => toggleProduct(product.id)}
                  className="p-2 hover:bg-purple-50 rounded-full transition-colors"
                >
                  {expandedProducts[product.id] ? (
                        <ChevronUp className="w-6 h-6 text-purple-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-purple-600" />
                      )}
                </button>
                </div>
                
                <p className="text-gray-600 mb-4">{product.subtitle}</p>
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 mb-4"
                >
                  Add to Cart
                </button>
                
                {expandedProducts[product.id] && (
                  <>
                  <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Details:</h4>
                    <ul className="space-y-2">
                      {product.details.map((detail, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start">
                          <span className="text-pink-500 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {product.togLearn && (
                   <div className="mt-5 w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 p-[2px]">
                    <div className="w-full bg-white rounded-lg">
                      <button
                        onClick={() => openModal(product)}
                        className="w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
                  </>
                )}
              </div>

              {/* Modal */}
              {modalProduct && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto backdrop-blur-md bg-black/10">
                  <div ref={modalRef} className="bg-white/80 backdrop-blur-xl rounded-xl w-[80vw] max-w-7xl max-h-[80vh] p-6 relative overflow-y-auto">
                    <button
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                      <X className="w-6 h-6" />
                    </button>
                                  {/* Products Section */}
                    <section className="py-16 px-4">
                      <div className="max-w-6xl mx-auto">
                          <div className="space-y-8">
                            <div className="relative aspect-video mb-4">
                              <ImageCarousel 
                              images={modalProduct.images} 
                              />
                            </div>
                            <div key={modalProduct.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 overflow-hidden hover:shadow-2xl transition-shadow">
                              <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                  <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full">
                                      {modalProduct.icon}
                                    </div>
                                    <div>
                                      <h3 className="text-2xl font-bold text-purple-900">{modalProduct.title}</h3>
                                      <p className="text-lg text-purple-600 italic">{modalProduct.subtitle}</p>
                                    </div>
                                  </div>
                                </div>
                                
                                <p className="text-gray-700 mb-6 leading-relaxed">{modalProduct.description}</p>
                                
                                {/* Pricing and Add to Cart */}
                                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 mb-6">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-2">
                                      <h4 className="text-lg font-semibold text-purple-900">Pricing Options:</h4>
                                      <div className="space-y-2">
                                        {modalProduct.pricing.map((price, idx) => (
                                          <div key={idx} className="flex items-center space-x-3">
                                            {modalProduct.pricing.length > 1 && (
                                              <input
                                                type="radio"
                                                id={`${modalProduct.id}-${price.id}`}
                                                name={`${modalProduct.id}-option`}
                                                value={price.id}
                                                checked={selectedOptions[modalProduct.id] === price.id}
                                                onChange={() => selectOption(modalProduct.id, price.id)}
                                                className="text-purple-600 focus:ring-purple-500"
                                              />
                                            )}
                                            <label 
                                              htmlFor={`${modalProduct.id}-${price.id}`}
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
                                      onClick={() => addToCart(modalProduct)}
                                      className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                                    >
                                      <ShoppingCart className="w-5 h-5" />
                                      <span>Add to Cart</span>
                                    </button>
                                  </div>
                                </div>
                                
                               
                                <div className="border-t border-purple-100 pt-6 space-y-6">
                                    {modalProduct.features && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                                          <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                                          What It Does:
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                          {modalProduct.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-purple-600 mt-1 text-lg">•</span>
                                              <span className="text-gray-700">{feature}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.whatMakesUnique && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                                          <Gem className="w-5 h-5 mr-2 text-purple-600" />
                                          What Makes These Unique:
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                          {modalProduct.whatMakesUnique.map((unique, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-amber-500 mt-1">💎</span>
                                              <span className="text-gray-700">{unique}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.whyTheyMatter && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                                          <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                                          Why They Matter:
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                          {modalProduct.whyTheyMatter.map((unique, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-amber-500 mt-1">💎</span>
                                              <span className="text-gray-700">{unique}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.howToUse && (
                                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">How to Use:</h4>
                                        <p className="text-gray-700 leading-relaxed">{modalProduct.howToUse}</p>
                                      </div>
                                    )}

                                    {modalProduct.chakras && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-4">The 7 Main Chakras:</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                          {modalProduct.chakras.map((chakra, idx) => (
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

                                    {modalProduct.whatYouReceive && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">What You'll Receive:</h4>
                                        <ul className="space-y-2">
                                          {modalProduct.whatYouReceive.map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-green-500 mt-1">✓</span>
                                              <span className="text-gray-700">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.preRecordedCollections && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Pre-Recorded Collections:</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                          {modalProduct.preRecordedCollections.map((collection, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                              <span className="text-blue-500 mt-1">🎵</span>
                                              <span className="text-gray-700">{collection}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {modalProduct.packageExamples && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Package Examples:</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                          {modalProduct.packageExamples.map((example, idx) => (
                                            <span key={idx} className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg px-3 py-2 text-sm text-purple-900 font-medium text-center">
                                              {example}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {modalProduct.whatsIncluded && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">What's Included:</h4>
                                        <ul className="space-y-2">
                                          {modalProduct.whatsIncluded.map((item, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-green-500 mt-1">✓</span>
                                              <span className="text-gray-700">{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.whyGetOne && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Why Get a Soul Painting:</h4>
                                        <p className="text-gray-700 mb-4">
                                          Sometimes we feel disconnected from who we are or where we’re going. A Soul Painting bypasses the busy mind and brings you back into harmony with your heart and higher self.
                                        </p>
                                        <ul className="grid md:grid-cols-2 gap-3">
                                          {modalProduct.whyGetOne.map((reason, idx) => (
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

                                    {modalProduct.keyBenefits && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                          {modalProduct.keyBenefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start space-x-2">
                                              <span className="text-green-500 mt-1">✓</span>
                                              <span className="text-gray-700">{benefit}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {modalProduct.ingredients && (
                                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Ingredients:</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {modalProduct.ingredients.map((ingredient, idx) => (
                                            <span key={idx} className="bg-white/80 rounded-full px-3 py-1 text-sm text-gray-700 border border-green-200">
                                              {ingredient}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {modalProduct.specialNote && (
                                      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                                        <p className="text-gray-700 italic">
                                          <span className="font-semibold text-orange-800">Special Note:</span> {modalProduct.specialNote}
                                        </p>
                                      </div>
                                    )}

                                    {modalProduct.note && (
                                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                                        <p className="text-gray-700 italic">
                                          <span className="font-semibold text-purple-800">Note:</span> {modalProduct.note}
                                        </p>
                                      </div>
                                    )}

                                    {modalProduct.yasinaNote && (
                                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                                        <p className="text-gray-700 italic">
                                          <span className="font-semibold text-purple-800">A Note from Yasina:</span> {modalProduct.yasinaNote}
                                          <p className='mt-2'>{modalProduct.noteAddon}</p>
                                        </p>
                                      </div>
                                    )}

                                    {modalProduct.whyItWorks && (
                                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Why It Works:</h4>
                                        <p className="text-gray-700">{modalProduct.whyItWorks}</p>
                                      </div>
                                    )}

                                    {modalProduct.perfectFor && (
                                      <div>
                                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Perfect For:</h4>
                                        <div className="grid md:grid-cols-2 gap-2">
                                          {modalProduct.perfectFor.map((purpose, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                              <span className="text-purple-600 mt-1">✨</span>
                                              <span className="text-gray-700">{purpose}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                
                              </div>
                            </div>
                          
                        </div>
                      </div>
                    </section>
          
                  </div>
                </div>,
                document.body
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
