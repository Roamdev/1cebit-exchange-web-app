'use client';

import { StepPanel } from '@/components/StepPanel';
import { NextStepButton } from '@/components/NextStepButton';
import { SliderCoins } from '@/components/SliderCoins';
import { SelectedCoin } from '@/components/SelectedCoin';

import styles from './SecondPage.module.css';

export default function Page() {
  return (
    <div className="body">
      <StepPanel countPage={1} />
      <main className="main">
        <SelectedCoin pageTitle="Choose what you got" />
        <div className={styles.container}>
          <div className={styles.block}>
            <span className={styles.message}>You will got</span>
            <span className={styles.value}>10$</span>
          </div>
          <div className={styles.block}>
            <span className={styles.message}>Comission</span>
            <span className={styles.value}>1$</span>
          </div>
        </div>
        <SliderCoins />
        <NextStepButton buttonText="Next step" path="/choose-wallet" />
      </main>
    </div>
  );
}
