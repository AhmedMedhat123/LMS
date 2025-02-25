import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../HeroSlider/HeroSlider.css";

const slides = [
    {
        image: "assets/images/slider-img1.jpg",
        title: "We Help You to Learn<br> What You Love",
        subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        image: "assets/images/slider-img2.jpg",
        title: "Join Aduca & Get<br> Get Your Free Courses!",
        subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        image: "assets/images/slider-img3.jpg",
        title: "Lear Anything,<br> Anytime, Anywhere",
        subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
];


const HeroSlider = () => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop
            className="hero-slider"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="slide"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="overlay">
                            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                            <p className="hero-content">{slide.subtitle}</p>
                            <button className="hero-button">Join with Us</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;
