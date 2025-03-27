import Navbar from "./navbar";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
const Home =()=>{
  let [products, setProducts] = useState([])
  const navigate = useNavigate();
 return(
    <div id="homepage">
        
      <div className="hero">
    <Navbar/>

        <img src="images/homeimage.jpg" alt="" className="hero-image" />
        <div className="hero-text">
        <h1 id="title">THE SPICE HAVEN</h1>
        <img src="images/logo.webp" alt="" />
        <p id="text">A little spice never hurt anyone. <br />Spices improve the taste of food and also a good source of vitamins, iron, calcium. <br />Spice Haven is the home of quality spices at affordable prices. Spicy food because life is better with a little heat.</p>
        <button className="btn btn-warning w-50" onClick={() => navigate("/getproducts", {state: {products}}) }>View Our Products</button>
        </div>
      </div>

      
    </div>
 )
}
export default Home;