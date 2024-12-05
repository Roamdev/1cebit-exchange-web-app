import { HeaderMessage } from "@/components/headerMessage";
import { MainPage } from "@/components/mainPage";

export default function Home() {
  return (
    <div className="body">
      <header className="header">
        <HeaderMessage message="Choosen what you give" />
      </header>
      <main className="main">
        <MainPage />
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
