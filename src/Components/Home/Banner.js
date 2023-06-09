import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Movies from '../../Data/MovieData';

const Banner = () => {
  return (
    <div className="realtive w-full">
        <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{delay: 4000, disableOnInteraction: false}}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48">
            {
                // Movies.slice(0,6).map((movie, i) => (
                //     <SwiperSlide key={i} className="relative rounded overflow-hidden">
                //         <img src={`/Images/${movie.image}`} alt={movie.title} className="w-full h-full object-cover" />
                //     </SwiperSlide>
                // ))
            }
        </Swiper>
    </div>
  )
}

export default Banner