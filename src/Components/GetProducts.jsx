import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Carousel from "./Carousel";

import Navbar from "./navbar";
import Footer from "./Footer";
// import { motion } from "motion/react";

const GetProducts = () => {

    let [products, setProducts] = useState([])
    let [error, setError] = useState("")
    let [loading, setLoading] = useState("")
    let [filteredProducts, setFilteredProducts] =useState([])

    const img_url = "https://Muita.pythonanywhere.com/static/images/";
    const navigate = useNavigate();
    

    const getProducts = async () => {
        setError("")
        setLoading("Please wait... receiving products...");
        try{
            const response = await axios.get("https://Muita.pythonanywhere.com/api/getproducts")
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading("");
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    const handleSearch = (value) => {
        const filtered = products && products.filter((product)=>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredProducts(filtered);
    };
     
    // useEffect(function, dependancy)
    useEffect(()=>{
        getProducts();
    }, [])
    return ( 
        <div className="container-fluid">
        <Navbar/>
        

            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
        <Carousel/>
        <div className="row p-4 " id="main" >

            
           
            
            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input 
                    type="text" 
                    placeholder="Search for Spices" 
                    className="form-control" 
                    onChange={(e)=> handleSearch(e.target.value)}
                    />
                </div>
            </div>
            {filteredProducts.map((product)=>(
                <div className="col-md-3 justify-content-center mb-4 ">
                 <div className="card shadow " id="card">
                     {/* <motion.div 
                        whileHover={{scale:5.1}}
                        whileTap={{scale:0.95}}
                        /> */}
                     <img src={img_url + product.product_photo} className="product_img" alt="" />
                     <div className="card-body ">
                         <h5 className="mt-2">{product.product_name}</h5>
                         <p className="text-muted">{product.product_desc.slice(0,70)}</p>
                         <b className="text-warning">{product.product_cost} Ksh</b>
                        
                         <button className="btn btn-dark w-100" onClick={() => navigate("/singleproduct", {state: {product}}) }>View Product</button>
                     </div>
                 </div>
             </div>
            ))}
           


            </div>
            <Footer/>
        </div>
     );
}
 
export default GetProducts;