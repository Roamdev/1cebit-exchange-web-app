import { SliderCoins } from "./sliderCoins"
import { NextStepButton } from "./nextStepButton"

export const MainPage = () => {
    return (
        <>
            <div className="coin">drag coin here</div>
            <div className="cost-panel">
                <div className="cost-title">How much you want to send</div>
                <input type="text" className="cost-input" />
            </div>
            <SliderCoins />
            <NextStepButton buttonText="Next step" />
        </>
    )
}
