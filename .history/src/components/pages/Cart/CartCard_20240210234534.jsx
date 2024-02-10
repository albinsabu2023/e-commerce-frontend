import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../../context/ShopContext";
function CartCard(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescripiton">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button>-</button>
          <input value={cartItems[id]} />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
