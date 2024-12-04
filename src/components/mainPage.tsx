import { SliderCoins } from "./sliderCoins"
import { NextStepButton } from "./nextStepButton"
import { ChoosenCoin } from "./choosenCoin"

export const MainPage = () => {
    return (
        <>
            <ChoosenCoin />
            <div className="input-container">
                <span className="input-title">How much you want to send</span>
                <input type="text" />
            </div>
            <SliderCoins />
            <NextStepButton 
                buttonText="Next step"
                path="/second-page"
            />
        </>
    )
}
