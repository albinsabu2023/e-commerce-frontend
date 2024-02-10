import React from "react";
import "../Product.css";
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescription">
        <p>
          <b>{productName}</b>
        </p>
        <p className="productPrice">${price}</p>
      </div>
    </div>
  );
}

export default Product;
