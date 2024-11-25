import Image from 'next/image'

type SliderItemsProperty = {
    coinName: string;
    coinLogo: string;
}

export const SliderItems = ({ coinName, coinLogo }: SliderItemsProperty)  => {
    return (
        <div className="slider-item">
            <Image 
                src={coinLogo}
                alt={coinName}
                width={80}
                height={80}
                className="slider-item--logo"
            />
            <div className="slider-item--title">{coinName}</div>
        </div>
    )
}
