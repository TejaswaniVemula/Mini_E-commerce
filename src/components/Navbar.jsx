import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🛒 ShopEase</h2>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
