import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function StreamingForm() {
  // return (
  //   <div className="w-full overflow-hidden h-[17.6rem]">
  //     <img src="./image/stateImg2.jpg" alt="" className="" />
  //   </div>
  // );

  return (
    <div className="w-full overflow-hidden h-[17.5rem] relative">
      <div className=" bg-gray-300 absolute z-20">식물앨범</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./image/stateImg.jpg" alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/stateImg2.jpg" alt="" className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./image/stateImg3.jpg" alt="" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
