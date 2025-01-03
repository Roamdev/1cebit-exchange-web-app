'use client'
import { useDrag } from 'react-dnd'

type DragItemProps = {
    CoinName: string;
    CoinLogo: string;
    children: React.ReactNode;
}

export default function DragItem({CoinName, CoinLogo, children}: DragItemProps) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'COIN',
        item: {
            type: 'COIN',
            CoinName: CoinName,
            CoinLogo: CoinLogo,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <div ref={el => {dragPreview(el)}} style={{ opacity: isDragging ? 0.5 : 1}} >
            <div role="Handle" ref={el => {drag(el)}} draggable={true} >
                {children}
            </div>
        </div>
    )
}
