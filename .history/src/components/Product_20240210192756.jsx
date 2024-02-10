import React from "react";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return <div>{id}</div>;
}

export default Product;
