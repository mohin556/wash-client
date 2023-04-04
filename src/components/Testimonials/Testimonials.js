import React from 'react';
import './Testimonials.css';
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import image1 from '../../image/testimonial2.PNG';
import image2 from '../../image/testimonals1.PNG';
import image3 from '../../image/ervin.PNG';



// import required modules
import { EffectCards } from "swiper";
const Testimonials = () => {
    return (
      <section id='review' >
        <div className="container slider">

          <h2 className="section-title">Testimonals</h2>

        <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className="slide-item">
            <div className="slide-img-01">
              <img src={image1}alt="" />
            </div>
            <h4>Jesika Farnandes</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque quod ullam ea est, consectetur voluptas earum. Commodi, provident vero quae tenetur perspiciatis omnis veritatis voluptatem enim doloremque quasi mollitia.</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-item">
            <div className="slide-img-02">
              <img src={image2}alt="" />
            </div>
            <h4>Arvin hawlin</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque quod ullam ea est, consectetur voluptas earum. Commodi, provident vero quae tenetur perspiciatis omnis veritatis voluptatem enim doloremque quasi mollitia.</p>
           </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-item">
            <div className="slide-img-03">
              <img src={image3}alt="" />
            </div>
            <h4>Anderson</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab doloremque quod ullam ea est, consectetur voluptas earum. Commodi, provident vero quae tenetur perspiciatis omnis veritatis voluptatem enim doloremque quasi mollitia.</p>
           </div>
        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
      </section>
    );
};

export default Testimonials;