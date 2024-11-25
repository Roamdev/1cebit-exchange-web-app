import { SliderCoins } from "./sliderCoins"
import { NextStepButton } from "./nextStepButton"

export const MainPage = () => {
    return (
        <>
            <div className="coin">drag coin here</div>
            <div className="coast-panel">
                <div className="subtitle">How much you want to send</div>
                <input type="text" className="coast-input" />
            </div>
            <SliderCoins />
            <NextStepButton buttonText="Next step" />
        </>
    )
}
