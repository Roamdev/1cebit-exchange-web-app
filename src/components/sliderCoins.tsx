'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import { SliderItems } from "./sliderItems"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DragItem from './dragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mock = [
    {coinName: 'BTC', coinLogo: '/btc.png' },
    {coinName: 'BNB', coinLogo: '/bnb.png' },
    {coinName: 'ETH', coinLogo: '/eth.png' },
    {coinName: 'USDT', coinLogo: '/usdt.png' },
    {coinName: 'USD\n(Bank)', coinLogo: '/usd.png' },
    {coinName: 'UAH\n(Bank)', coinLogo: '/uah.png' }
]

export const SliderCoins = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false }}
                draggable={false}
                simulateTouch={false}
                loop={true}
                className='slider-item-list'
            >
                {mock.map(coin => (
                    <SwiperSlide key={coin.coinName} >
                        <DragItem coinName={coin.coinName} coinLogo={coin.coinLogo}>
                            <SliderItems coinName={coin.coinName} coinLogo={coin.coinLogo}/>
                        </DragItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </DndProvider>
    )
}
