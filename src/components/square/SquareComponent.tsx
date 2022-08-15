import { FC } from 'react'
import { Square } from '../../models/Square'
import './Square.scss'

interface SquareComponentProps {
    square: Square
}

const SquareComponent: FC<SquareComponentProps> = ({square}) => {
    return (
        <div className={`square ${square.color}`}> 
            
        </div>
    )
}

export default SquareComponent