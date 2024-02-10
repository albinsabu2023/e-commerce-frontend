import React from "react";
import "../Product.css";
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescription">
        <h3>{productName}</h3>

        <p className="productPrice">${price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
