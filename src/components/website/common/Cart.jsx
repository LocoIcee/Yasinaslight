import React from 'react';
import { useCart } from '../context/CartContext';
import { colors } from '../utils/constants';

const Cart = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    updateItemQuantity, 
    removeItem, 
    clearCart,
    totalPrice 
  } = useCart();

  // Prevent scrolling when cart is open
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-30 z-50 flex justify-end">
      {/* Cart panel */}
      <div 
        className={`w-full md:w-96 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: colors.neutral }}
      >
        {/* Cart header */}
        <div 
          className="p-4 border-b flex justify-between items-center"
          style={{ borderColor: `${colors.text}20` }}
        >
          <h2 
            className="text-xl font-bold"
            style={{ color: colors.primary }}
          >
            Your Cart
          </h2>
          <button 
            className="p-2 rounded-full hover:bg-gray-100"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cart content */}
        <div className="h-[calc(100%-160px)] overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: `${colors.text}60` }}>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="mt-4 text-lg" style={{ color: colors.text }}>Your cart is empty</p>
              <button 
                className="mt-4 px-4 py-2 rounded-full text-sm transition-colors duration-200 border hover:opacity-80"
                style={{
                  color: colors.secondary,
                  borderColor: colors.secondary
                }}
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div 
                  key={item.id} 
                  className="flex border rounded-lg p-3"
                  style={{ borderColor: `${colors.text}20` }}
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Product details */}
                  <div className="flex-1 ml-3 flex flex-col">
                    <div className="flex justify-between">
                      <h3 
                        className="font-medium"
                        style={{ color: colors.primary }}
                      >
                        {item.name}
                      </h3>
                      <button 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>
                    
                    <span className="text-sm" style={{ color: `${colors.text}80` }}>
                      ${item.price.toFixed(2)}
                    </span>
                    
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border rounded" style={{ borderColor: `${colors.text}30` }}>
                        <button 
                          className="px-2 py-1 text-sm transition-colors duration-200 hover:opacity-80"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-sm">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 text-sm transition-colors duration-200 hover:opacity-80"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      
                      <span className="font-semibold" style={{ color: colors.primary }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button 
                className="w-full text-sm py-2 text-center transition-colors duration-200 hover:opacity-80"
                style={{ color: colors.accent }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Cart footer */}
        {cartItems.length > 0 && (
          <div 
            className="absolute bottom-0 left-0 right-0 p-4 border-t"
            style={{ 
              backgroundColor: colors.neutral,
              borderColor: `${colors.text}20` 
            }}
          >
            <div className="flex justify-between my-2">
              <span style={{ color: colors.text }}>Subtotal:</span>
              <span className="font-bold" style={{ color: colors.primary }}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            
            <button
              className="w-full py-3 rounded-md text-center font-semibold mt-4 border transition-colors duration-200 hover:opacity-80"
              style={{
                color: colors.accent,
                borderColor: colors.accent
              }}
              onClick={() => {
                alert('Checkout functionality will be implemented soon!');
              }}
            >
              Checkout
            </button>
            
            <button 
              className="w-full py-2 mt-2 text-center transition-colors duration-200 hover:opacity-80"
              style={{ color: colors.secondary }}
              onClick={closeCart}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;