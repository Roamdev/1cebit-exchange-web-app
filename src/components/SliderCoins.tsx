'use client';

import { SliderItems } from './SliderItems';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCoinStore } from '@/components/store';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SliderCoins.module.css';

export const SliderCoins = () => {
  const coins = useCoinStore((state) => state.coins);
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation={{
          prevEl: '#prev-button',
          nextEl: '#next-button'
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        draggable={false}
        simulateTouch={false}
        loop={true}
        className={styles.list}
      >
        {coins.map((coin) => (
          <SwiperSlide key={coin.name}>
            <SliderItems coin={coin} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button 
        id="prev-button"
        className={`${styles.button} ${styles.prev}`}
      >
        <ArrowBackIosNewIcon sx={{ color: '#fff' }} />
      </button>
      <button 
        id="next-button"
        className={`${styles.button} ${styles.next}`}
      >
        <ArrowForwardIosIcon sx={{ color: '#fff' }} />
      </button>
    </div>
  );
};
