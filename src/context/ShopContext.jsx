import React, { createContext, useState } from "react";

import { PRODUCTS } from "../Products";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let tot = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let ItemInfo = PRODUCTS.find((product) => product.id === Number(item));
        tot += cartItems[item] * ItemInfo.price;
      }
    }
    return tot;
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
