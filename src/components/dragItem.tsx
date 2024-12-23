'use client'
import { useDrag } from 'react-dnd'

type DragItemProps = {
    children: React.ReactElement<{
        coinName: string;
        coinLogo: string;
    }>;
}

export default function DragItem({children}: DragItemProps) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'COIN',
        item: {
            type: 'COIN',
            coinName: children.props.coinName,
            coinLogo: children.props.coinLogo,
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
