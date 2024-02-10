import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";
function Navbar() {
  return (
    <div className="NavBar">
      <div lassName="shopName">
        <Link to="/">Albin Shop</Link>
      </div>

      <div className="navBarEnd">
        <Link to="/">Shope</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
