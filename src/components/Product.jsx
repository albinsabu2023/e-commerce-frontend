import React, { useContext } from "react";
import "../Product.css";
import { ShopContext } from "../context/ShopContext";
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="productCard">
      <img src={productImage} alt="" />
      <div className="productDescription">
        <h3>{productName}</h3>

        <p className="productPrice">${price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add To Cart{cartItemAmount > 0 && <>{cartItemAmount}</>}
      </button>
    </div>
  );
}

export default Product;
