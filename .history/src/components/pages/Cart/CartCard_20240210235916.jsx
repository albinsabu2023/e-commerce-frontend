import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../../context/ShopContext";
function CartCard(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescripiton">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => {
              updateCartItemCount(Number(e.target.value));
            }}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
