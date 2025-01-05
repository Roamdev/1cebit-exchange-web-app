'use client'

import { HeaderMessage } from '@/components/HeaderMessage'
import { NextStepButton } from '@/components/NextStepButton'
import { SliderCoins } from '@/components/SliderCoins'
import { DropZone } from '@/components/DropZone'

import styles from './SecondPage.module.css'

export default function Page() {

    return (
        <div className="body">
            <HeaderMessage 
                message="Choosen what you give"
                activePage={2}
            />
            <main className="main">
                <DropZone />
                <div className={styles.courseBlock}>
                    <div className={styles.statusContainer}>
                        <span className={styles.statusMessage}>You will got</span>
                        <span className={styles.statusValue}>10$</span>
                    </div>
                    <div className={styles.statusContainer}>
                        <span className={styles.statusMessage}>Comission</span>
                        <span className={styles.statusValue}>1$</span>
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
