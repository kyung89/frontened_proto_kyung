
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function IntroduceForm() {
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="image/intro_sample1.jpg" />
          <div className="text-overlay">
              <h2>다양한 작물 정보 제공</h2>
              <p>소비자에게 다양한 작물 정보를 제공하여 본인이 원하는 작물을 선택하는 데 가이드라인을 제공합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/intro_sample2.jpg" />
          <div className="text-overlay">
              <h2>개인화된 구역 제공</h2>
              <p>선택한 작물을 재배하는 농가와 매치해 농가의 재배지 일부분을 소비자의 구역으로 임시 형성합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/intro_sample3.jpg" />
          <div className="text-overlay">
              <h2>실시간 작물의 성장 과정 관찰</h2>
              <p>작물이 성장하는 과정을 시간과 장소의 제약 없이 실시간으로 관찰할 수 있도록 합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/intro_sample4.jpg" />
          <div className="text-overlay">
              <h2>병충해로 인한 작물의 상태 분석</h2>
              <p>잎사귀를 통해 질병과 상태를 분석하여 제공하며, 해당 작물의 주요 취약 사항들도 제공합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image/intro_sample5.jpg" />
          <div className="text-overlay">
              <h2>작물 재배 체험 서비스</h2>
              <p>농가를 체험하고 싶은 일반 소비자에게 개화 시기와 수확시기 등을 이용하여 방문 체험 서비스를 제공합니다.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
