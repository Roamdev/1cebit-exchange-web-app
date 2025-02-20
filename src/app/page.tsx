'use client'

import { useState } from 'react';
import { StepPanel } from "@/components/StepPanel";
import { SliderCoins } from "@/components/SliderCoins"
import { NextStepButton } from "@/components/NextStepButton"
import { InputBlock } from "@/components/InputBlock"
import { SelectedCoin } from "@/components/SelectedCoin"
import { Coin } from '@/components/store';




export default function Home() {
  const [selectedCoin] = useState<Coin>();

  return (
    <div className="body">
      <header className="header">
        <StepPanel />
      </header>
      <main className="main">
        <SelectedCoin
          pageTitle="Choose what you give"
          selectedCoin={selectedCoin}
          />
        <InputBlock message="How much you want to send" />
        <SliderCoins />
        <NextStepButton
          buttonText="Next step"
          path="/second-page"
        />
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
