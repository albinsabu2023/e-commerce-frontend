import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return <div>{(id, productName, productImage, price)}</div>;
}

export default Product;
