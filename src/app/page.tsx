'use client'

import { HeaderMessage } from "@/components/HeaderMessage";
import { SliderCoins } from "@/components/SliderCoins"
import { NextStepButton } from "@/components/NextStepButton"
import { InputBlock } from "@/components/InputBlock"
import { DropZone } from "@/components/DropZone"

export default function Home() {
  return (
    <div className="body">
      <header className="header">
        <HeaderMessage message="Choosen what you give" />
      </header>
      <main className="main">
        <DropZone />
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
