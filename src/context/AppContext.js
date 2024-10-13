import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProd = prevCart.find((item) => item.name === product.name);
      if (existingProd) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  const value = {
    cart,
    addToCart,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
