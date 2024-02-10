import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return <div>{productName}</div>;
}

export default Product;
