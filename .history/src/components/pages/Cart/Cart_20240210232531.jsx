import React from "react";
import { PRODUCTS } from "../../../Products";

function Cart() {
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">{PRODUCTS.map((product) => {})}</div>
    </div>
  );
}

export default Cart;
