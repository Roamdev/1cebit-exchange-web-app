import SliderCoins from "./slider-coins"
import NextStepButton from "./next-step"

export default function MainPage() {
    return (
        <>
            <div className="coin">drag coin here</div>
            <div className="coast-panel">
                <div className="subtitle">How much you want to send</div>
                <input type="text" className="coast-input" />
            </div>
            <SliderCoins />
            <NextStepButton button_text="Next step" />
        </>
    )
}
