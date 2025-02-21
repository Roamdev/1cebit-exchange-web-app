import { create } from 'zustand'

export type Coin = {
  id: number;
  name: string;
  logo: string;
};

type Coins = Coin[];

const DEFAUL_COINS: Coins = [
  { id: 1, name: 'BTC', logo: '/btc.png'},
  { id: 2, name: 'BNB', logo: '/bnb.png'},
  { id: 3, name: 'ETH', logo: '/eth.png'},
  { id: 4, name: 'USDT', logo: '/usdt.png'},
  { id: 5, name: 'USD\n(Bank)', logo: '/usd.png'},
  { id: 6, name: 'UAH\n(Bank)', logo: '/uah.png'}
]

type CoinStore = {
  coins: Coins;
  selectedCoin: Coin | null;
  setSelectedCoin: (item: Coin) => void;
};

export const useCoinStore = create<CoinStore>((set) => ({
  coins: DEFAUL_COINS,
  selectedCoin: null,
  setSelectedCoin: (coin) => set({ selectedCoin: coin })
}));
