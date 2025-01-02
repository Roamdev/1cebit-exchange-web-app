'use client'
import { HeaderMessage } from '@/components/headerMessage'
import { NextStepButton } from '@/components/nextStepButton'
import { InputBlock } from '@/components/inputBlock'
import { DropZone } from '@/components/dropZone'

export default function ChooseWallet() {
    return (
        <div className="body">
            <HeaderMessage isActive={3}/>
            <main className="main">
                <DropZone />
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
                    path='/dnd-test'
                />
            </main>
        </div>
    )
}
