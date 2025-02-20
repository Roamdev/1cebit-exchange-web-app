'use client'
import { StepPanel } from '@/components/StepPanel'
import { NextStepButton } from '@/components/NextStepButton'
import { InputBlock } from '@/components/InputBlock'
import { SelectedCoin } from '@/components/SelectedCoin'

import styles from './ChoosenWallet.module.css'

export default function ChooseWallet() {
    return (
        <div className="body">
            <StepPanel countPage={2}/>
            <main className="main">
                <SelectedCoin />
                <InputBlock message="Sender's wallet address" />
                <InputBlock message="Recipient's wallet address" />
                <div className={styles.container}>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                    />
                    <span className={styles.title}>I agree with rules</span>
                </div>
                <NextStepButton
                    buttonText='Next step'
                    path='/'
                />
            </main>
        </div>
    )
}
