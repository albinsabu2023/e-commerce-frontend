import React, { useContext } from "react";
import { PRODUCTS } from "../../../Products";
import { ShopContext } from "../../../context/ShopContext";
import CartCard from "./CartCard";
import "./Cart.css";
function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartCard data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Total :{}</p>
        <button>Countinue Shopping</button>
        <button>Check out</button>
      </div>
    </div>
  );
}

export default Cart;
