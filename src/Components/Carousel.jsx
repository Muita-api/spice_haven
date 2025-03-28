import { Link } from "react-router-dom";

const Carousel = () => {
    return ( 
       <section className="row">
        <div className="col-md-12">
            <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="images/slide5.avif" alt="" className="d-block w-100" height="600"/>
                    </div>

                    <div className="carousel-item" >
                        <img src="images/slide4.jpeg" alt="" className="d-block w-100" height="600"/>
                    </div>

                    <div className="carousel-item" >
                        <img src="images/slide3.avif" alt="" className="d-block w-100" height="600"/>
                    </div>
                </div>

                <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link>

                <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </Link>

                {/* <ol className="carousel-indicators">
                    <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="1" ></li>
                    <li data-bs-target="#mycarousel" data-bs-slide-to="2" ></li>
                </ol> */}
            </div>
        </div>
       </section>
    
     );
};
 
export default Carousel;