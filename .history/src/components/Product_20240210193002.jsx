import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
    </div>
  );
}

export default Product;
