import Footer from "./Footer";

const ContactUs =()=>{
    return(
    <div className="card content-justify-center">

        <div className="container-fluid" id="contact">
            <div className="row">
                <div className="col-md-6">
                    <h1>Contact Us</h1>
                    <p>We Would Love To Hear From You</p>
                    <input type="text"
                    className="form-control" 
                    placeholder="Please Enter Your Name"
                    required/>
<br />
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Please Enter Your Email"
                    required/>
<br />
                    <textarea name="" id="" cols="80" rows="5">Details</textarea><br />
                    <button className="btn btn-primary">Submit</button>
                </div>

                <div className="col-md-6">
                    <h1>Our Location</h1>
                    <h2>Find us at </h2>
                        <div><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Westlands,%20Nairobi+(The%20Spice%20Haven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">The Spice Haven</a></iframe></div>
                    
                </div>
                <Footer/>
            </div>
        </div>
    </div>
    )
}
export default ContactUs;