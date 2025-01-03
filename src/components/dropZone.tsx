import Image from 'next/image'
import { useDrop } from 'react-dnd'
import { useState } from 'react'

type DroppedItem = {
    coinName: string;
    coinLogo: string;
} | null;

export function DropZone() {
    const [droppedItem, setDroppedItem] = useState<DroppedItem>(null);
    
    const [{ canDrop }, drop] = useDrop(() => ({
        accept: 'COIN',
        drop: (item: { coinName: string; coinLogo: string }) => {
            console.log('Dropped coin:', item);
            setDroppedItem(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))

    return (
        <>
            {droppedItem ? (
                <Image 
                    src={droppedItem.coinLogo}
                    alt={droppedItem.coinName}
                    ref={el => {drop(el)}}
                    role={'Dustbin'}
                    width={80}
                    height={80}
                    className="coin"
                />
            ) : (
                <div
                    className="coin coin--unchoosen"
                    ref={el => {drop(el)}}
                    role={'Dustbin'}
                >
                    {canDrop ? 'Release to drop' : 'Drag a box here'}
                </div>
            )}
        </>
    )
}
