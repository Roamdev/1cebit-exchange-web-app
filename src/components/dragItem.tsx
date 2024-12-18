'use client'
import { ReactChild } from 'react';
import { useDrag } from 'react-dnd'

type DragItemProps = {
    children: ReactChild
}

export default function DragItem({children}: DragItemProps) {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'COIN',
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
