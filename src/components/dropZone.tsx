import Image from 'next/image';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { clsx } from 'clsx';

import styles from './DropZone.module.css';
type DropZoneProps = {
  pageTitle?: string;
};
type DroppedItem = {
  coinName: string;
  coinLogo: string;
} | null;

export function DropZone({ pageTitle }: DropZoneProps) {
  const [droppedItem, setDroppedItem] = useState<DroppedItem>(null);

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: 'COIN',
    drop: (item: { coinName: string; coinLogo: string }) => {
      setDroppedItem(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div className={styles.container}>
      {droppedItem ? (
        <>
          <Image
            src={droppedItem.coinLogo}
            alt={droppedItem.coinName}
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
  );
}
