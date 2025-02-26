import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

const feedbacks = [
    {
        name: "Ahmed Ali",
        feedback: "This platform helped me a lot in my studies. The courses are well-structured and easy to follow!",
        image: "images/user_placeholder.png",
        rating: 5,
    },
    {
        name: "Sarah Mohamed",
        feedback: "I love the interactive learning style. The AI chatbot is super helpful! I love the interactive learning style. The AI chatbot is super helpful!I love the interactive learning style. The AI chatbot is super helpful!",
        image: "images/user_placeholder.png",
        rating: 4,
    },
    {
        name: "Kareem Hassan",
        feedback: "A great experience! I improved my coding skills significantly.",
        image: "images/user_placeholder.png",
        rating: 5,
    },
    {
        name: "Lina Hossam",
        feedback: "The platform is useful, but I wish there were more courses.",
        image: "images/user_placeholder.png",
        rating: 3,
    },
];

const renderStars = (rating) => {
    return (
        <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
            ))}
        </div>
    );
};

const TestimonialArea = () => {
    return (
        <section className="testimonial-area section-padding">
            <div className="container">
                <div className="section-heading text-center">
                    <h5 className="ribbon ribbon-lg mb-2">Testimonials</h5>
                    <h2 className="section__title">Student's Feedback</h2>
                    <span className="section-divider" />
                </div>
            </div>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="feedback-slider"
            >
                {feedbacks.map((student, index) => (
                    <SwiperSlide key={index}>
                        <div className="feedback-card">
                            <div className="flex justify-center gap-4 items-center">
                                <img src={student.image} alt={student.name} className="student-img" />
                                <div>
                                    <h4 className="student-name">{student.name}</h4>
                                    {renderStars(student.rating)}
                                </div>
                            </div>
                            <p className="feedback-text">"{student.feedback}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TestimonialArea;
