import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-muted ms-auto " >
      <div className="container">
      {/* <header className="App-header" id='nav'>
      
        <h1 id='title'>The Spice Haven</h1>
        <h5><i>Let's Spice It Up</i></h5>
        
      </header> */}
        <Link className="navbar-brand" to="/" id="head">
        <img src="download.jpeg" alt="" />
        The Spice Haven <p><i id="sub">Let's Spice it up</i></p></Link>
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
              <Link className="nav-link" to="/getproducts">Shop</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/addproduct">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            
          </ul>
        </div>
        
        <div class="">
              {user && (
                <div className="navbar-nav ms-auto">
                  <b className="text-dark nav-link">Hello {user.username}</b>
                  <button className="nav-link" onClick={handleLogout}>
                    Log out
                  </button>
                </div>
              )}

              {!user && (
                <div className="navbar-nav ms-auto">
                  <Link to="/signin" class="nav-link">
                    Login
                  </Link>
                  <Link to="/signup" class="nav-link">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

      </div>
    </nav>
  );
};

export default Navbar;