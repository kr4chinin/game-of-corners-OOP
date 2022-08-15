import { FC } from 'react'
import './MovesBar.scss'

interface MovesBarProps {
    currentMove: {x: number, y: number} | null
}

const MovesBar: FC<MovesBarProps> = ({currentMove}) => {
    return (
        <div className='moves-bar-container'>
            <p>{currentMove?.x} {currentMove?.y}</p>
        </div>
    )
}

export default MovesBar