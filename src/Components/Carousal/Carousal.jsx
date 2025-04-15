import { Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import styles from "./Carousal.module.css"
import Card from '../Card/Card';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import CarousalLeftNav from './CarousalLeftNav/CarousalLeftNav';
import CarousalRightNav from './CarousalRightNav/CarousalRightNav';

export default function Carousal({ Component, data,pagination=false, }) {
  // console.log(data)
  return (
    <div className={styles.carousalC}>
      <Swiper
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        className={styles.swiper}
        modules={[Pagination]}
        initialSlide={0}
        // spaceBetween={15}
        allowTouchMove
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      //   scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      >
          
        {pagination&&<CarousalLeftNav></CarousalLeftNav>}
        {data.map((item,idx) =>
          <SwiperSlide className={styles.SwiperSlide} key={item.id?item.id:idx}>{Component(item)}</SwiperSlide>
        )}
        {pagination&&<CarousalRightNav></CarousalRightNav>}
      </Swiper>
      </div>
  );
};