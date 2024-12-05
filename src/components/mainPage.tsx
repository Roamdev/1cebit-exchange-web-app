import { SliderCoins } from "./sliderCoins"
import { NextStepButton } from "./nextStepButton"
import { ChoosenCoin } from "./choosenCoin"
import { InputBlock } from "./inputBlock"

export const MainPage = () => {
    return (
        <>
            <ChoosenCoin />
            <InputBlock message="How much you want to send"/>
            <SliderCoins />
            <NextStepButton 
                buttonText="Next step"
                path="/second-page"
            />
        </>
    )
}
