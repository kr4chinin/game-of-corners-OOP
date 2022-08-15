import React from 'react'
import './Board.scss'
import { FC } from 'react'
import { Board } from '../../models/Board'
import SquareComponent from '../square/SquareComponent'

interface BoardComponentProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
	return (
		<div className="board">
			{board.squares.map((row, index) => (
				<React.Fragment key={index}>
					{row.map(square => 
						<SquareComponent key={square.id} square={square}/>
					)}
				</React.Fragment>
			))}
		</div>
	)
}

export default BoardComponent
