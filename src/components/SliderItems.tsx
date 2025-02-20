import Image from 'next/image'

import styles from './SliderItems.module.css'
import { Coin, useCoinStore } from './store';

type SliderItemsProperty = {
    coin: Coin;
}

export const SliderItems = ({ coin }: SliderItemsProperty)  => {
    const setSelectedCoin = useCoinStore((state) => state.setSelectedCoin);
    const handleClick = () => {
        setSelectedCoin(coin);
    }

    return (
        <div className={styles.item} draggable={true} onClick={handleClick}>
            <Image
                src={coin.logo}
                alt={coin.name}
                width={80}
                height={80}
                className={styles.logo}
            />
            <div className={styles.title}>{coin.name}</div>
        </div>
    )
}
