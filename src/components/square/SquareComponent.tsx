import { FC } from 'react'
import { Square } from '../../models/Square'
import './Square.scss'

interface SquareComponentProps {
	square: Square
}

const SquareComponent: FC<SquareComponentProps> = ({ square }) => {
	return (
		<div className={`square ${square.color}`}>
			{square.figure?.logo && (
				<img src={square.figure.logo} alt={square.figure.name} />
			)}
		</div>
	)
}

export default SquareComponent
