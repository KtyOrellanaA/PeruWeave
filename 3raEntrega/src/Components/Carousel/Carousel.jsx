import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = ({ greeting1, greeting2, greeting3, greeting }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            src: "../../../public/Carousel/Carousel1.png",
            greeting1: greeting1,
            greeting2: greeting2
        },
        {
            src: "../../../public/Carousel/Carousel2.png",
            greeting1: "Viste a tu familia con tradición.",
            greeting2: "Textiles peruanos que unen calidad y cultura en cada prenda para toda la familia."
        }
    ];

    const handlePrevClick = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                <img src={slides[currentSlide].src} className="carousel-image" alt="Slide" />
                <div className="carousel-caption">
                    <h5 className="greeting1">{slides[currentSlide].greeting1}</h5>
                    <p className="greeting2">{slides[currentSlide].greeting2}</p>
                </div>
            </div>
            <button className="carousel-control-prev" onClick={handlePrevClick}>
                <span className="carousel-control-icon">‹</span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" onClick={handleNextClick}>
                <span className="carousel-control-icon">›</span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
