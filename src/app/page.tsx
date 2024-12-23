'use client'

import { HeaderMessage } from "@/components/headerMessage";
import { SliderCoins } from "@/components/sliderCoins"
import { NextStepButton } from "@/components/nextStepButton"
import { InputBlock } from "@/components/inputBlock"
import { DropZone } from "@/components/dropZone"

export default function Home() {
  return (
    <div className="body">
      <header className="header">
        <HeaderMessage message="Choosen what you give" />
      </header>
      <main className="main">
        <DropZone />
        <InputBlock message="How much you want to send"/>
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
