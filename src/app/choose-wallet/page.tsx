'use client'
import { HeaderMessage } from '@/components/headerMessage'
import { ChoosenCoin } from '@/components/choosenCoin'
import { NextStepButton } from '@/components/nextStepButton'
import { InputBlock } from '@/components/inputBlock'

export default function ChooseWallet() {
    return (
        <div className="body">
            <HeaderMessage isActive={3}/>
            <main className="main">
                <ChoosenCoin />
                <InputBlock message="Sender's wallet address" />
                <InputBlock message="Recipient's wallet address" />
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        name="" 
                        id="" 
                    />
                    <span className="checkbox-name">I agree with rules</span>
                </div>
                <NextStepButton
                    buttonText='Next step'
                    path='/'
                />
            </main>
        </div>
    )
}
