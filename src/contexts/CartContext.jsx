'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// Hook for easy access to the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // State for cart items and visibility
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCartItems(parsedCart);
      } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cart');
    }
    
    // Calculate total price whenever cart changes
    const newTotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    setTotalPrice(newTotal);
  }, [cartItems]);
  
  // Toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  // Close cart
  const closeCart = () => {
    setIsCartOpen(false);
  };
  
  // Add item to cart
  const addToCart = (item) => {
    if (!item) {
      console.warn('Attempted to add an undefined cart item.');
      return;
    }

    const {
      productId,
      optionId,
      optionName,
      name,
      price,
      image,
      quantity = 1,
    } = item;

    if (!productId) {
      console.warn('Cart items require a productId.', item);
      return;
    }

    if (typeof price !== 'number' || Number.isNaN(price)) {
      console.warn('Cart items require a numeric price.', item);
      return;
    }

    const cartItemId = optionId ? `${productId}__${optionId}` : productId;

    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity,
      };
      setCartItems(updatedItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: cartItemId,
          productId,
          optionId: optionId || null,
          optionName: optionName || null,
          name,
          price,
          quantity,
          image: image || null,
        },
      ]);
    }

    setIsCartOpen(true);
  };
  
  // Update item quantity in cart
  const updateItemQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(itemId);
      return;
    }
    
    const updatedItems = cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedItems);
  };
  
  // Remove item from cart
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };
  
  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Calculate total number of items in cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Context value
  const value = {
    cartItems,
    addToCart,
    updateItemQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    toggleCart,
    closeCart,
    totalItems,
    totalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
