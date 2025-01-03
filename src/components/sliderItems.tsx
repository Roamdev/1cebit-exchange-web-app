import Image from 'next/image'

type SliderItemsProperty = {
    CoinName: string;
    CoinLogo: string;
}

export const SliderItems = ({ CoinLogo, CoinName }: SliderItemsProperty)  => {

    
    return (
        <div className="slider-item" draggable={true}>
            <Image 
                src={CoinLogo}
                alt={CoinName}
                width={80}
                height={80}
                className="slider-item--logo"
                />
            <div className="slider-item--title">{CoinName}</div>
        </div>
    )
}
