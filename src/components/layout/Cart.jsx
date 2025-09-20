import React from 'react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    cartItems,
    updateItemQuantity,
    removeItem,
    clearCart,
    totalPrice,
  } = useCart();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

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
    <div
      className="fixed inset-0 z-50 flex justify-end overlay-soft"
      onClick={closeCart}
    >
      {/* Cart panel */}
      <div 
        className={`w-full md:w-96 h-full bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 shadow-xl transform transition-transform duration-300 ease-in-out pointer-events-auto ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Cart header */}
        <div 
          className="p-4 border-b border-text-soft flex justify-between items-center"
        >
          <h2 
            className="text-xl font-bold text-primary"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-body-muted"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p className="mt-4 text-lg text-body">Your cart is empty</p>
              <button
                type="button"
                className="mt-4 px-4 py-2 rounded-full text-sm transition-colors duration-200 border text-secondary border-secondary hover:opacity-80"
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex border border-text-soft rounded-lg p-3"
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
                      <h3 className="font-medium text-primary">{item.name}</h3>
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>

                    <span className="text-sm text-body-soft">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.optionName && (
                      <span className="text-xs text-body-subtle">
                        {item.optionName}
                      </span>
                    )}

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border border-text-muted rounded">
                        <button
                          className="px-2 py-1 text-sm transition-colors duration-200 hover:opacity-80"
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-2 py-1 text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 text-sm transition-colors duration-200 hover:opacity-80"
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <span className="font-semibold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                className="w-full text-sm py-2 text-center transition-colors duration-200 hover:opacity-80 text-body"
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
            className="absolute bottom-0 left-0 right-0 p-4 border-t border-text-soft bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50"
          >
            <div className="flex justify-between my-2">
              <span className="text-body">Subtotal:</span>
              <span className="font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            {errorMessage && (
              <p className="text-sm mt-2 text-accent">
                {errorMessage}
              </p>
            )}

            <button
              className="w-full py-3 rounded-md text-center font-semibold mt-4 border border-primary bg-primary text-neutral transition-colors duration-200 hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={async () => {
                setErrorMessage('');
                setIsSubmitting(true);

                try {
                  const response = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      items: cartItems.map((item) => ({
                        id: item.id,
                        productId: item.productId,
                        optionId: item.optionId,
                        optionName: item.optionName,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                      })),
                    }),
                  });

                  const data = await response.json();

                  if (!response.ok) {
                    throw new Error(data?.error || 'Unable to start checkout.');
                  }

                  if (data?.checkoutUrl) {
                    window.location.href = data.checkoutUrl;
                  } else {
                    throw new Error('Missing checkout link from Square.');
                  }
                } catch (error) {
                  setErrorMessage(error.message || 'Something went wrong. Please try again.');
                } finally {
                  setIsSubmitting(false);
                }
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Redirecting to Square…' : 'Checkout with Square'}
            </button>
            
            <button 
              className="w-full py-2 mt-2 text-center transition-colors duration-200 hover:opacity-80 text-body"
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
