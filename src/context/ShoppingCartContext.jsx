import React, { createContext, useContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {

    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex((item) => item.product.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex].quantity += quantity;
        return updatedCartItems;
      } else {
        return [...prevCartItems, { product, quantity }];
      }
    });

  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};



export default ShoppingCartContext

