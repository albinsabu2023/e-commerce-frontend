import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./NavBar.css";
function Navbar() {
  return (
    <div className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>
  );
}

export default Navbar;
