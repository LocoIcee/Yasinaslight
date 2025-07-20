// This merged code uses Design 2 layout with functionality from Design 1
'use client'

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

const products = [
  {
    id: 'intention-coasters',
    title: 'Intention Coasters',
    subtitle: 'Infuse Your Food & Drink with the Frequency of Your Highest Good',
    description: 'Imagine if every sip of water or bite of food could help you align with your manifestations, heal your energy, and reconnect with your soul\'s purpose. With Intention Coasters, this isn\'t just a dream—it\'s an energetic reality.',
    image: '/assets/products/intention-coasters.svg',
    price: 33,
    details: [
      'Each coaster is hand-crafted and infused with specific healing intentions',
      'Made from natural materials including wood and resin',
      'Features sacred geometry patterns and healing symbols',
      'Perfect for placing under water glasses to infuse with positive energy',
      'Set of 4 coasters, each with different healing properties',
      'Includes a guide explaining how to use them for maximum benefit',
      'Durable and water-resistant finish'
    ]
  },
  {
    id: 'healing-oils',
    title: 'Healing Oils',
    subtitle: 'Custom-blended essential oils for various healing purposes',
    description: 'Each oil blend is created specifically for your healing intentions and made with high-quality, therapeutic-grade essential oils.',
    image: '/assets/products/healing-oils.svg',
    price: 44,
    details: [
      'Each oil blend is created specifically for your healing intentions',
      'Made with high-quality, therapeutic-grade essential oils',
      'Includes detailed instructions for use and application',
      'Available for emotional healing, physical ailments, chakra balancing, and more',
      'Comes in a 10ml amber glass bottle with roller top for easy application',
      'All natural ingredients with no synthetic additives'
    ]
  },
  {
    id: 'crystal-package',
    title: 'Crystal Package',
    subtitle: 'Hand-selected crystals for healing and manifestation',
    description: 'Each package includes hand-selected crystals based on your current energy and intentions.',
    image: '/assets/products/crystal-package.svg',
    price: 77,
    details: [
      'Each crystal is hand-selected specifically for you based on your current needs and energy',
      'Includes a personalized guide explaining each crystal\'s properties and how to use them',
      'Perfect for beginners or those looking to expand their crystal collection',
      'Comes with cleansing and charging instructions',
      'Package includes 3-5 crystals depending on size and type'
    ]
  },
  {
    id: 'custom-meditation',
    title: 'Custom Meditation',
    subtitle: 'Personalized guided meditation recordings tailored to your needs',
    description: 'Completely personalized meditation created just for you based on your specific goals, challenges, and spiritual needs.',
    image: '/assets/products/custom-meditation.svg',
    price: 55,
    details: [
      'Completely personalized meditation created just for you',
      'Based on your specific goals, challenges, and spiritual needs',
      'Includes consultation to understand your meditation preferences',
      'High-quality audio recording (20-30 minutes)',
      'Available in various styles: manifestation, healing, chakra balancing, stress relief',
      'Delivered digitally in MP3 format',
      'Includes written affirmations and meditation notes',
      'Unlimited access - yours to keep forever'
    ]
  },
  {
    id: 'soul-painting',
    title: 'Soul Painting',
    subtitle: 'Intuitive artwork channeled specifically for your soul\'s journey',
    description: 'Original artwork channeled specifically for your soul\'s current journey. Created through intuitive connection with your energy and higher self.',
    image: '/assets/products/soul-painting.svg',
    price: 111,
    details: [
      'Original artwork channeled specifically for your soul\'s current journey',
      'Created through intuitive connection with your energy and higher self',
      'Each painting is unique and holds specific healing frequencies',
      'Size: 11x14 inches on high-quality canvas or watercolor paper',
      'Includes a detailed explanation of the symbols and messages in your painting',
      'Perfect for meditation focus or as healing artwork for your space',
      'Process includes initial consultation and energy reading',
      'Completed within 2-3 weeks of order'
    ]
  },
  {
    id: 'spiritual-guidance',
    title: 'Spiritual Guidance Session',
    subtitle: 'One-on-one session for spiritual insight and guidance',
    description: 'Personal one-on-one session via video call or phone. Includes intuitive reading and spiritual guidance.',
    image: '/assets/products/spiritual-guidance.svg',
    price: 88,
    details: [
      'Personal one-on-one session via video call or phone',
      'Duration: 60-90 minutes depending on your needs',
      'Includes intuitive reading and spiritual guidance',
      'Covers areas such as life purpose, relationships, career, spiritual growth',
      'May include card readings, energy work, or channeled messages',
      'Recording of session provided for your reference',
      'Follow-up email with key insights and recommended actions',
      'Flexible scheduling to accommodate your timezone'
    ]
  }
];

export default function MergedProductsPage() {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);

  const toggleDetails = (id) => {
    setExpandedProduct(prev => (prev === id ? null : id));
  };

  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-800 text-center mb-10">Holistic Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="aspect-square relative bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                <Image src={product.image} alt={product.title} fill className="object-contain p-8" />
              </div>
              <h2 className="text-xl font-bold text-purple-900 mb-1">{product.title}</h2>
              <p className="text-purple-600 italic mb-3">{product.subtitle}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl font-bold text-purple-700">${product.price}</span>
                <button
                  onClick={() => toggleDetails(product.id)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  {expandedProduct === product.id ? <ChevronUp /> : <ChevronDown />}
                </button>
              </div>
              <button
                onClick={() => alert(`Added ${product.title} to cart`)}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-lg hover:from-purple-700 hover:to-purple-800 mb-3"
              >
                <div className="flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </div>
              </button>
              {expandedProduct === product.id && (
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Details:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {product.details.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                  <button
                    onClick={() => openModal(product)}
                    className="mt-4 w-full text-purple-700 font-semibold hover:underline"
                  >
                    Learn More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalProduct && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-purple-900 mb-2">{modalProduct.title}</h2>
            <p className="text-purple-600 italic mb-4">{modalProduct.subtitle}</p>
            <div className="relative aspect-video mb-4">
              <Image src={modalProduct.image} alt={modalProduct.title} fill className="object-contain p-4" />
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{modalProduct.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {modalProduct.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
