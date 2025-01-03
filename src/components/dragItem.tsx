'use client'
import { useDrag } from 'react-dnd'

type DragItemProps = {
    coinName: string;
    coinLogo: string;
    children: React.ReactNode;
}

export default function DragItem({coinName, coinLogo, children}: DragItemProps) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'COIN',
        item: {
            type: 'COIN',
            coinName: coinName,
            coinLogo: coinLogo,
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
