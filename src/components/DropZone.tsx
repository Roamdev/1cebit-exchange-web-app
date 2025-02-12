import Image from 'next/image';
import { useDrop } from 'react-dnd';
import { clsx } from 'clsx';
import { Coin } from './store';

import styles from './DropZone.module.css';

type DropZoneProps = {
  pageTitle?: string;
  selectedCoin?: Coin;
  setSelectedCoin: (newCoin: Coin) => void;
};


export function DropZone({ pageTitle, setSelectedCoin, selectedCoin }: DropZoneProps) {

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: 'COIN',
    drop: (coin: Coin) => {
      setSelectedCoin(coin);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <div className={styles.dropZone}>
        {selectedCoin ? (
          <>
            <Image
              src={selectedCoin.logo}
              alt={selectedCoin.name}
              ref={(el) => {
                drop(el);
              }}
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
              ref={(el) => {
                drop(el);
              }}
              role={'Dustbin'}>
              {canDrop ? 'Release to drop' : 'Drag a box here'}
            </div>
            {pageTitle && <h1 className={styles.title}>{pageTitle}</h1>}
          </>
        )}
      </div>
    </div>
  );
}
