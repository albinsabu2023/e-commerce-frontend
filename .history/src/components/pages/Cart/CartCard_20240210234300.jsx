import React from "react";
import "./CartItem.css";
function CartCard(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescripiton">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="count-Handler">
          <button>-</button>
          <input />
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
