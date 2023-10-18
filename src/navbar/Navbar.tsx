import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";

const  Navbar = () => {
  return (
    <div className='header'>
      <div className='Navbar'>
          <div className='webName'>
            <h1>Beautify</h1>
          </div>

          <div>
            <ul className='real-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pages">Pages</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className='pseudo-nav'>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>
    </div>
    </div>
  )
}

export default Navbar;
