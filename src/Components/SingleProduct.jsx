import axios from "axios";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const SingleProduct = () => {
    let [phone, setPhone] = useState("");
    let [loading, setLoading] = useState("");
    let [success, setSuccess] = useState("");
    let [error, setError] =useState("");

    const {product} = useLocation().state || {}
    const img_url = "https://Muita.pythonanywhere.com/static/images/"
    const submitForm = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait as we process payment...")

        try {
            const data = new FormData()
            data.append("phone", phone)
            data.append("amount", product.product_cost)

            const response = await axios.post("https://Muita.pythonanywhere.com/api/mpesa_payment", data)
            setLoading("")
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    }
    return ( 
        <div id="single">
            <div className="row justify-content-center mt-3">
            {/* <nav className="m-4">
                <Link to="/" className="btn btn-dark mx-2">Home</Link>
                <Link to="/Addproduct" className="btn btn-dark mx-2">Add Product</Link>
                <Link to="/Signin" className="btn btn-dark mx-2">Sign in</Link>
                <Link to="/Signup" className="btn btn-dark mx-2">Sign up</Link>
            </nav> */}
                <div className="col-md-3 card shadow">
                        <img src={img_url + product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                        <h2>{product.product_name}</h2>
                        <h3 className="text-warning">{product.product_cost}</h3>
                        <p className="text-muted">{product.product_desc}</p>
                        <b className="text-warning">{loading}</b>
                        <b className="text-danger">{error}</b>
                        <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                        <input 
                        type="number" 
                        readOnly value={product.product_cost} 
                        required 
                        className="form-control" 
                        />
                        <br />
                        <input 
                        type="tel" 
                        onChange={(e)=>setPhone(e.target.value)} 
                        className="form-control" 
                        required 
                        placeholder="Enter Mpesa No 2547xxxxxxxx" 
                        name="" id="" /> 
                        <br />
                        <button className="btn btn-primary">Pay Now</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default SingleProduct;