import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-muted ms-auto " >
      <div className="container">
      
        {/* <Link className="navbar-brand" to="/">
        <img src="download.jpeg" alt="" />
        The Spice Haven</Link> */}
        <button 
          className="navbar-toggler " 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" id="link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;