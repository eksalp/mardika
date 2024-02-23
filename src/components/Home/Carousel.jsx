import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gambarbanner1 from "./banner1.png"
import gambarbanner2 from "./banner2.png"
import gambarbanner3 from "./banner3.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiperr"
      >
        <SwiperSlide className="slide">
          <img src={gambarbanner1} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={gambarbanner2} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={gambarbanner3} alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
