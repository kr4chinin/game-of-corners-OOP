import { useEffect, useMemo, useState } from 'react'
import BoardComponent from './components/board/BoardComponent'
import { Board } from './models/Board'
import { Colors } from './models/Colors'
import { Player } from './models/Player'

const App = () => {
	const [board, setBoard] = useState(new Board())

	const whitePlayer = useMemo(() => new Player(Colors.WHITE), [])
	const blackPlayer = useMemo(() => new Player(Colors.BLACK), [])

	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	useEffect(() => {
		start()
		setCurrentPlayer(whitePlayer)
	}, [whitePlayer])

	function start() {
		const newBoard = new Board()
		newBoard.initSquares()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	function swapPlayer() {
		setCurrentPlayer(
			currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
		)
	}

	return (
		<div>
			<BoardComponent
				board={board}
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
		</div>
	)
}

export default App
