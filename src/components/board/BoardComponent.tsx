import React, { useEffect, useState } from 'react'
import './Board.scss'
import { FC } from 'react'
import { Board } from '../../models/Board'
import SquareComponent from '../square/SquareComponent'
import { Square } from '../../models/Square'
import { Player } from '../../models/Player'

interface BoardComponentProps {
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
    setCurrentMove: (currentMove: {x: number, y: number} | null) => void
}

const BoardComponent: FC<BoardComponentProps> = ({
	board,
	setBoard,
	swapPlayer,
	currentPlayer,
    setCurrentMove
}) => {
	const [selectedSquare, setSelectedSquare] = useState<Square | null>(null)

	function pick(square: Square) {
		if (
			selectedSquare &&
			selectedSquare !== square &&
			selectedSquare.figure?.canMove(square)
		) {
			swapPlayer()
			selectedSquare.moveFigure(square)
            setCurrentMove({
                x: square.x,
                y: square.y
            })
			setSelectedSquare(null)
		} else {
			if (square.figure?.color === currentPlayer?.color) {
				setSelectedSquare(square)
			}
		}
	}

	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	const highlightSquares = () => {
		board.highlightSquares(selectedSquare)
		updateBoard()
	}

	useEffect(() => {
		highlightSquares()
	}, [selectedSquare])

	return (
		<div className='board-frame'>
			<div className="board">
				{board.squares.map((row, index) => (
					<React.Fragment key={index}>
						{row.map(square => (
							<SquareComponent
								key={square.id}
								square={square}
								setSelectedSquare={setSelectedSquare}
								selected={
									square.x === selectedSquare?.x &&
									square.y === selectedSquare?.y
								}
								pick={pick}
								currentPlayer={currentPlayer}
							/>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default BoardComponent
