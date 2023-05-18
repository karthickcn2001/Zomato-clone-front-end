import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Carousel1 from "../../Assets/Details/Carousel1.jpg"
import Carousel2 from "../../Assets/Details/Carousel2.jpg"
import Carousel3 from "../../Assets/Details/Carousel3.jpg"


class ReactCarousel extends React.Component {
    render() {
        return (
            <div>
                <div >
                    <Carousel showThumbs={false} autoPlay={true} interval={2500} infiniteLoop={true}>
                        <div>
                            <img src={Carousel1} alt="img not found" style={{ height: "500px", width: "100%" }} />
                        </div>
                        <div>
                            <img src={Carousel2} alt="img not found" style={{ height: "500px", width: "100%" }} />
                        </div>
                        <div>
                            <img src={Carousel3} alt="img not found" style={{ height: "500px", width: "100%" }} />
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default ReactCarousel;