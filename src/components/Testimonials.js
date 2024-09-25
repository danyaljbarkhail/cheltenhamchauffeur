import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper base CSS
import 'swiper/css/pagination'; // Swiper pagination module CSS
import 'swiper/css/navigation'; // Swiper navigation module CSS
import './Testimonials.css'; // Custom CSS

// Import required modules from Swiper v11
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  {
    name: "John Doe",
    gender: "male",
    rating: 4.5,
    comment: "Excellent service! The driver was punctual and very professional. Highly recommend Cheltenham Chauffeurs.",
  },
  {
    name: "Emily Smith",
    gender: "female",
    rating: 5,
    comment: "A truly luxurious experience. The car was immaculate and comfortable. Will definitely use this service again!",
  },
  {
    name: "David Johnson",
    gender: "male",
    rating: 4,
    comment: "Great chauffeur service. The driver was courteous and the ride was smooth. Perfect for business travel.",
  },
  {
    name: "Sarah Williams",
    gender: "female",
    rating: 5,
    comment: "We hired Cheltenham Chauffeurs for our wedding, and it was an amazing experience! Everything was perfect.",
  },
  {
    name: "Michael Brown",
    gender: "male",
    rating: 4.5,
    comment: "Very reliable and professional service. The driver was knowledgeable and made our tour of the Cotswolds enjoyable.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <h2 className="testimonials-title">
          <span className="title-main">Customer</span> <span className="title-highlight">Testimonials</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]} // Register the modules
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="profile-icon">
                  {/* Use Font Awesome icons for male and female */}
                  <i className={`fas fa-${testimonial.gender === "male" ? "male" : "female"} fa-3x`}></i>
                </div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <i key={i} className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}></i>
                  ))}
                  <span>{testimonial.rating} / 5</span>
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
