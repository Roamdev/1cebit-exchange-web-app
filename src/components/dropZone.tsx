import { useDrop } from 'react-dnd'

export function DropZone() {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'COIN',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    }))
    return (
        <div
            className="coin"
            ref={el => {drop(el)}}
            role={'Dustbin'}
            style={{ backgroundColor: isOver ? 'red' : 'white' }}
        >
            {canDrop ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
}
