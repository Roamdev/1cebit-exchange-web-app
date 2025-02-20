import Image from 'next/image';
import { clsx } from 'clsx';
import { Coin, useCoinStore } from './store';


import styles from './DropZone.module.css';

type SelectedCoinProps = {
  pageTitle?: string;
  selectedCoin?: Coin;
};


export function SelectedCoin({ pageTitle }: SelectedCoinProps) {
  const selectedCoin = useCoinStore((state) => state.selectedCoin);
  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <div className={styles.dropZone}>
        {selectedCoin != null ? (
          <>
            <Image
              src={selectedCoin.logo}
              alt={selectedCoin.name}
              role={'Dustbin'}
              width={80}
              height={80}
              className={clsx(styles.coin, styles.coinWithoutBorder)}
            />
            {pageTitle && <h1 className={styles.title}>{pageTitle}</h1>}
          </>
        ) : (
          <>
            <div
              className={clsx(styles.coin, styles.coinWithBorder)}
              role={'Dustbin'}>
              Select coin
            </div>
            {pageTitle && <h1 className={styles.title}>{pageTitle}</h1>}
          </>
        )}
      </div>
    </div>
  );
}
