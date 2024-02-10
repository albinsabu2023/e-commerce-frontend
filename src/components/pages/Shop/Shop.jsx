import React from "react";
import { PRODUCTS } from "../../../Products";
import Product from "../../Product";
import "./Shop.css";
function Shop() {
  return (
    <div className="shop">
      <div className="shopProducts">
        {" "}
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
