import { Link } from "react-router-dom";
const Carousel = () => {
    return ( 
    
        <div>

        <section className="row">
        <div className="col-md-12">
            <div className="carousel slide" id="my_Carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/download.jpeg" alt="" className="d-block w-100" height="350px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/carousel.jpeg" alt="" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/wallpaper2.jpeg" alt="" className="d-block w-100" height="350PX"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/Slide3.png" alt="" className="d-block w-100" height="350PX "/>
                        {/* <div className="carousel-caption">
                            <h2>Spice Up Family Time with good food</h2>
                            
                        </div> */}
                    </div>
                </div>
                <Link to="#my_Carousel" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </Link >
                <Link
                 to="#my_Carousel" className="carousel-control-next" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </Link >

                <ol className="carousel-indicators">
                    <li data-bs-target="#my_Carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#my_Carousel" data-bs-slide-to="1" ></li>
                    <li data-bs-target="#my_Carousel" data-bs-slide-to="2" ></li>
                    <li data-bs-target="#my_Carousel" data-bs-slide-to="3"></li>

                </ol> 
            </div>
        </div>
     </section>
    </div>
     );
};
 
export default Carousel;