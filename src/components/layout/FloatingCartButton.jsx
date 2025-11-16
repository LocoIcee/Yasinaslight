'use client';
import React from 'react';
import { useCart } from '@/contexts/CartContext';

const FloatingCartButton = () => {
  const { totalItems, toggleCart, isCartOpen } = useCart();

  if (totalItems <= 0) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-label="Open cart"
      className={`fixed bottom-5 right-4 md:bottom-8 md:right-8 z-40 flex items-center gap-2 rounded-full px-4 py-2 shadow-lg border border-purple-200 bg-white/95 text-purple-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-400 ${
        isCartOpen ? 'opacity-0 pointer-events-none translate-y-1' : 'opacity-100'
      }`}
    >
      <span className="relative flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-purple-700"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span className="absolute -top-2 -right-2 min-w-[1.5rem] h-6 rounded-full bg-pink-500 px-2 text-xs font-bold text-white flex items-center justify-center">
          {totalItems}
        </span>
      </span>
      <span className="hidden sm:inline text-sm font-semibold">View Cart</span>
    </button>
  );
};

export default FloatingCartButton;
