'use client'
import { HeaderMessage } from '@/components/headerMessage'
import { ChoosenCoin } from '@/components/choosenCoin'
import { NextStepButton } from '@/components/nextStepButton'
import { SliderCoins } from '@/components/sliderCoins'

export default function ChooseWallet() {
    return (
        <div className="body">
                <HeaderMessage message="" />
            <main className="main">
                <ChoosenCoin />
                <div className="input-container">
                    <div className="input-block">
                        <span className="input-title">Sender's wallet address</span>
                        <input type="text" />
                    </div>
                    <div className="input-block">
                        <span className="input-title">Recipient's wallet address</span>
                        <input type="text" />
                    </div>
                    <div className="checkbox">
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                        />
                        <span className="checkbox-name">I agree with rules</span>
                    </div>
                </div>
                <NextStepButton
                    buttonText='Next step'
                    path='/succes'
                />
            </main>
        </div>
    )
}
