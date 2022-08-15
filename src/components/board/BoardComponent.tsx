import React, { useCallback, useEffect, useState } from 'react'
import './Board.scss'
import { FC } from 'react'
import { Board } from '../../models/Board'
import SquareComponent from '../square/SquareComponent'
import { Square } from '../../models/Square'

interface BoardComponentProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
	const [selectedSquare, setSelectedSquare] = useState<Square | null>(null)

	function pick(square: Square) {
		if (
			selectedSquare &&
			selectedSquare !== square &&
			selectedSquare.figure?.canMove(square)
		) {
			selectedSquare.moveFigure(square)
			setSelectedSquare(null)
		} else {
			setSelectedSquare(square)
		}
	}

	const updateBoard = useCallback(() => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}, [setBoard, board])

	const highlightSquares = useCallback(() => {
		board.highlightSquares(selectedSquare)
		updateBoard()
	}, [board, selectedSquare, updateBoard])

	useEffect(() => {
		highlightSquares()
	}, [selectedSquare, highlightSquares])

	return (
		<div className="board">
			{board.squares.map((row, index) => (
				<React.Fragment key={index}>
					{row.map(square => (
						<SquareComponent
							key={square.id}
							square={square}
							selected={
								square.x === selectedSquare?.x && square.y === selectedSquare?.y
							}
							pick={pick}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default BoardComponent
