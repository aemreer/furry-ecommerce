import React from "react";
import './CustomersReviews.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import reviews from '../../data/ReviewData'
import slide from '../../assets/images/customerSlide.jpg';

function CustomerReviews() {
    return (
        <div className="customer-reviews">
            <div className="container" style={{ backgroundImage: `url(${slide})` }}>
                <h2 className="section-title">Customer Reviews</h2>

                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="review-card">
                                <p className="review-comment">"{review.comment}"</p>
                                <div className="review-info">
                                    <span className="review-name">— {review.name}</span>
                                    <span className="review-rating">
                                        {"★".repeat(review.rating)}
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default CustomerReviews;