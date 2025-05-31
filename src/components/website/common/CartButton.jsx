import React from 'react';
import { useCart } from '../context/CartContext';
import { colors } from '../utils/constants';

const CartButton = () => {
  const { toggleCart, totalItems } = useCart();

  // Only render the cart button if there are items in the cart
  if (totalItems <= 0) {
    return null;
  }
  
  return (
    <li className="ml-2">
      <button
        className="relative flex items-center justify-center p-2 rounded-full transition-all hover:bg-opacity-80"
        style={{
          backgroundColor: colors.primary,
          color: colors.neutral,
        }}
        onClick={toggleCart}
        aria-label="Shopping Cart"
      >
        {/* Shopping cart icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        
        {/* Item count badge */}
        <span 
          className="absolute -top-1 -right-1 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: colors.accent,
            color: colors.text
          }}
        >
          {totalItems}
        </span>
      </button>
    </li>
  );
};

export default CartButton;