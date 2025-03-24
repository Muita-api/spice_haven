// import { Link } from "react-router-dom";
const Footer = ()=>{
    return(
        <div id="footer">

        <div className="col-md-4">
            <h4>THE SPICE HAVEN</h4>
            <p>Haven Court,<br />Waiyaki Way, Opposite Lions Place, <br />Westlands, Nairobi</p><br /><br />
            Phone : +254113252660
            Email : thespicehaven.gmail.com     
        </div>

        {/* <div className="col-md-4">
            <h4 >Links</h4>
                <Link to="/" className="btn  mx-2">Home</Link>
                <Link to="/Addproduct" className="btn mx-2">Add Product</Link>
                // <Link to="/Signin" className="btn mx-2">Sign in</Link>
                <Link to="/Signup" className="btn mx-2">Sign up</Link>
        </div> */}

        {/* <div className="col-md-4">
            <h4>Stay Connected</h4>
            <br />
            <Link  to="https://facebook.com">
            
                <img src="facebook.png" alt="" width={30} />
            </Link>
            <Link to="https://instagram.com">
                <img src="Instagram_icon.png" alt="" width={30}/>
            </Link>
            <Link to="https://whatsapp.com">
                <img src="whatsapp.png" alt=""width={30} />
            </Link>
        </div> */}
        <footer className=" text-center p-2">
            <h5>Developed by C. Muita &copy; 2025. All rights reserved. Terms and Conditions apply.</h5>
        </footer>
        </div>
        
    )
}
export default Footer;