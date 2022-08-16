import { useEffect, useMemo, useState } from 'react'
import BoardComponent from './components/board/BoardComponent'
import WelcomeModal from './components/modals/welcome-modal/WelcomeModal'
import MovesBar from './components/moves-bar/MovesBar'
import StatusBar from './components/status-bar/StatusBar'
import { Board } from './models/Board'
import { Colors } from './models/Colors'
import { Player } from './models/Player'
import './styles/App.scss'
import { MoveLog } from './types/MoveLog'

const App = () => {
	const [board, setBoard] = useState(new Board())

	const whitePlayer = useMemo(() => new Player(Colors.WHITE), [])
	const blackPlayer = useMemo(() => new Player(Colors.BLACK), [])
	const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

	const [currentMove, setCurrentMove] = useState<MoveLog | null>(null)

    const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true)

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
		<div className="global-container">
			<div className="elements-container">
                <WelcomeModal isOpen={isWelcomeModalOpen} setIsOpen={setIsWelcomeModalOpen} />
				<BoardComponent
					board={board}
					setBoard={setBoard}
					currentPlayer={currentPlayer}
					swapPlayer={swapPlayer}
					setCurrentMove={setCurrentMove}
				/>
				<div className="info-container">
					<StatusBar currentPlayer={currentPlayer} />
					<MovesBar currentMove={currentMove} />
				</div>
			</div>
		</div>
	)
}

export default App
