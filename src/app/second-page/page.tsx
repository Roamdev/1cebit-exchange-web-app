'use client'
import { HeaderMessage } from '@/components/headerMessage'
import { NextStepButton } from '@/components/nextStepButton'
import { SliderCoins } from '@/components/sliderCoins'
import { DropZone } from '@/components/dropZone'

export default function Page() {

    return (
        <div className="body">
            <HeaderMessage 
                message="Choosen what you give"
                isActive={2}
            />
            <main className="main">
                <DropZone />
                <div className="course-block">
                    <div className="status-container">
                        <span className="status-message">You will got</span>
                        <span className="status-value">10$</span>
                    </div>
                    <div className="status-container">
                        <span className="status-message">Comission</span>
                        <span className="status-value">1$</span>
                    </div>
                </div>
                <SliderCoins />
                <NextStepButton
                    buttonText='Next step' 
                    path='/choose-wallet'
                />
            </main>
        </div>
    )
}
