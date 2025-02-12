'use client'

import { SliderItems } from "./SliderItems"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import DragItem from './DragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCoinStore } from '@/components/store';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from'./SliderCoins.module.css'


export const SliderCoins = () => {
    const coins = useCoinStore((state) => state.coins)
    return (
        <DndProvider backend={HTML5Backend}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                draggable={false}
                simulateTouch={false}
                loop={true}
                className={styles.itemList}
            >
                {coins.map(coin => (
                    <SwiperSlide key={coin.name} >
                        {/* <DragItem onClick={()} coinName={coin.coinName} coinLogo={coin.coinLogo}> */}
                            <SliderItems coinName={coin.name} coinLogo={coin.logo}/>
                        {/* </DragItem> */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </DndProvider>
    )
}
