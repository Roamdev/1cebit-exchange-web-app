'use client'
import { HeaderMessage } from '@/components/HeaderMessage'
import { NextStepButton } from '@/components/NextStepButton'
import { InputBlock } from '@/components/InputBlock'
import { DropZone } from '@/components/DropZone'

import styles from './ChoosenWallet.module.css'

export default function ChooseWallet() {
    return (
        <div className="body">
            <HeaderMessage countPage={3}/>
            <main className="main">
                <DropZone />
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
                    path='/dnd-test'
                />
            </main>
        </div>
    )
}
