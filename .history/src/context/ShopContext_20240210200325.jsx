import React, { createContext } from "react";
import { useContext } from "react";
export const ShopContext = createContext(null);

function ShopContextProvider(props) {
  return;
  <ShopContext.Provider>{props.childre}</ShopContext.Provider>;
}

export default ShopContextProvider;
