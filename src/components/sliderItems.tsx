import Image from 'next/image'

import styles from './SliderItems.module.css'

type SliderItemsProperty = {
    coinName: string;
    coinLogo: string;
}

export const SliderItems = ({ coinLogo, coinName }: SliderItemsProperty)  => {

    return (
        <div className={styles.sliderItem} draggable={true}>
            <Image
                src={coinLogo}
                alt={coinName}
                width={80}
                height={80}
                className={styles.sliderItemLogo}
            />
            <div className={styles.sliderItemTitle}>{coinName}</div>
        </div>
    )
}
