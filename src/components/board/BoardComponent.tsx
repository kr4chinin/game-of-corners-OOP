import React, { useEffect, useState } from 'react'
import './Board.scss'
import { FC } from 'react'
import { Board } from '../../models/Board'
import SquareComponent from '../square/SquareComponent'
import { Square } from '../../models/Square'
import { Player } from '../../models/Player'
import { MoveLog } from '../../types/MoveLog'
import { getCurrentTime } from '../../helpers/getCurrentTime'
import uniqid from 'uniqid'
import boardCoordinates from '../../helpers/boardCoordinates'

interface BoardComponentProps {
	board: Board
	setBoard: (board: Board) => void
	currentPlayer: Player | null
	swapPlayer: () => void
	setCurrentMove: (currentMove: MoveLog | null) => void
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
				fromX: selectedSquare.x,
				fromY: selectedSquare.y,
				toX: square.x,
				toY: square.y,
				player: currentPlayer,
				timestamp: getCurrentTime()
			})
			setSelectedSquare(null)
			board.checkWin()
		} else {
			if (square.figure?.color === currentPlayer?.color) {
				setSelectedSquare(square)
				board.checkWin()
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
		// selectedSquare updates with every click on figure on board so board as
		// well will be updated inside useEffect even without being in the deps array

		// eslint-disable-next-line
	}, [selectedSquare])

	return (
		<div className="board-frame">
			<div className="board-frame-helper">
				<div className="board-digits">
					{boardCoordinates.digits.map(digit => (
						<p key={uniqid()}>{digit}</p>
					))}
				</div>
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
			<div className="board-letters">
				{boardCoordinates.letters.map(letter => (
					<p key={uniqid()}>{letter}</p>
				))}
			</div>
		</div>
	)
}

export default BoardComponent
