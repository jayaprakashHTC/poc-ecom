import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SeoBlock from "../layouts/seo";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slider4.jpg";

const BannerSection = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <SeoBlock
                HeadTitle={"HTC | E-commerce App"}
                HeadDescription={"E-commerce App"}
            />
            <div className="banner-section">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default BannerSection;