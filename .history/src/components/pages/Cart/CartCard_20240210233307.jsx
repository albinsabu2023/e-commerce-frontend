import React from "react";

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
      </div>
    </div>
  );
}

export default CartCard;
