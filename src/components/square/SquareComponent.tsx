import { FC } from 'react'
import { Square } from '../../models/Square'
import './Square.scss'

interface SquareComponentProps {
	square: Square
	selected: boolean
	pick: (square: Square) => void
}

const SquareComponent: FC<SquareComponentProps> = ({
	square,
	selected,
	pick
}) => {
	return (
		<div
			className={`square ${square.color} ${selected && 'selected'}`}
			style={{ background: square.available && square.figure ? 'green' : '' }}
            onClick={() => pick(square)}
		>
			{square.available && !square.figure && <div className="available" />}
			{square.figure?.logo && (
				<img src={square.figure.logo} alt={square.figure.name} />
			)}
		</div>
	)
}

export default SquareComponent
