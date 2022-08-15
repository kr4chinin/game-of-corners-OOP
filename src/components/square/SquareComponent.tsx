import React, { FC } from 'react'
import { Player } from '../../models/Player'
import { Square } from '../../models/Square'
import './Square.scss'

interface SquareComponentProps {
	square: Square
	selected: boolean
	pick: (square: Square) => void
	setSelectedSquare: (square: Square | null) => void
    currentPlayer: Player | null
}

const SquareComponent: FC<SquareComponentProps> = ({
	square,
	selected,
	pick,
	setSelectedSquare,
    currentPlayer
}) => {

	function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault()
	}

	function handleDrop(e: any, square: Square) {
		if (square.available) {
			e.preventDefault()
			pick(square)
		}
	}

	function handleDragStart(square: Square) {
        if (square.figure?.color === currentPlayer?.color) {
            setSelectedSquare(square)
        }
	}

	function handleDragEnd() {
		setSelectedSquare(null)
	}

	return (
		<div
			className={`square ${square.color} ${selected && 'selected'}`}
			style={{ background: square.available && square.figure ? 'green' : '' }}
			onClick={() => pick(square)}
            onDragOver={e => handleDragOver(e)}
			onDrop={e => handleDrop(e, square)}
		>
			{square.available && !square.figure && <div className="available" />}
			{square.figure?.logo && (
				<img
					draggable
					onDragStart={() => handleDragStart(square)}
					onDragEnd={handleDragEnd}
					src={square.figure.logo}
					alt={square.figure.name}
				/>
			)}
		</div>
	)
}

export default SquareComponent
