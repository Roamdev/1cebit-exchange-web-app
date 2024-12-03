import { SliderCoins } from "./sliderCoins"
import { NextStepButton } from "./nextStepButton"
import { ChoosenCoin } from "./choosenCoin"

export const MainPage = () => {
    return (
        <>
            <ChoosenCoin />
            <div className="cost-panel">
                <div className="cost-title">How much you want to send</div>
                <input type="text" className="cost-input" />
            </div>
            <SliderCoins />
            <NextStepButton 
                buttonText="Next step"
                path="/second-page"
            />
        </>
    )
}
