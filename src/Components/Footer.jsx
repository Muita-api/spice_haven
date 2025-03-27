import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div id="footer">
            <div className="container-fluid">
                <div className="row p-4 Footer">
                    <div className="col-md-4 text-dark">
                        <h4>The Spice Haven</h4>
                        <p>Your Ideal Spice Supplier!<br />
                        Phone: 254113252660 <br />
                        Email: thespicehaven@gmail.com
                        </p>
                        
                    </div>

                    <div className="col-md-4 text-dark">
                        <h4 className="text-center">Stay Connected</h4>
                        {/* links */}
                         
                            <br />
                            <Link  to="https://facebook.com" id="links">
                            Facebook
                            </Link><br />
                            <Link to="https://instagram.com" id="links">
                            Instagram
                            </Link><br />
                            <Link to="https://wa.me/+254113252660.com" id="links">
                            Whatsapp
                            </Link><br /> 

         
                    </div>

                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <Link id="links" to="/">Home</Link> <br />
                        <Link id="links" to="/getproducts">Shop</Link> <br />
                        <Link id="links" to="/signin">Sign In</Link><br />
                        <Link id="links" to="/addproduct">Add Product</Link>
            
                    </div>

                </div>
                <footer className="text-white bg-dark text-center p-2">
                    <h5>Developed by C. Muita &copy; 2025. All rights reserved. Terms and Conditions apply</h5>
                </footer>
            </div>
        </div>
        
    )
}
export default Footer;