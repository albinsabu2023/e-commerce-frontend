import React from "react";

function CartCard(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} />
    </div>
  );
}

export default CartCard;
