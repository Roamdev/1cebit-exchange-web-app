import { create } from 'zustand'

export type Coin = {
  id: number;
  name: string;
  logo: string;
  inDropZone: boolean;
};

type Coins = Coin[];

let defaultCoins: Coins;

// eslint-disable-next-line prefer-const
defaultCoins = [
  { id: 1, name: 'BTC', logo: '/btc.png', inDropZone: false },
  { id: 2, name: 'BNB', logo: '/bnb.png', inDropZone: false },
  { id: 3, name: 'ETH', logo: '/eth.png', inDropZone: false },
  { id: 4, name: 'USDT', logo: '/usdt.png', inDropZone: false },
  { id: 5, name: 'USD\n(Bank)', logo: '/usd.png', inDropZone: false },
  { id: 6, name: 'UAH\n(Bank)', logo: '/uah.png', inDropZone: false }
]


type CoinStore = {
  coins: Coins;
  dropZoneCoin: Coin | null;
  setDropZoneCoin: (item: Coin) => void;
  moveCoin: (id: number) => void;
};

export const useCoinStore = create<CoinStore>((set) => ({
  coins: defaultCoins,
  dropZoneCoin: null,
  setDropZoneCoin: (coin) => set({ dropZoneCoin: coin }),
  moveCoin: (id) =>
    set((state) => ({
      coins: state.coins.map((coin) =>
        coin.id === id ? { ...coin, inDropZone: true } : coin
      ),
    })),
}));
