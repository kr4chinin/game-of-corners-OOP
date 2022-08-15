import { useEffect, useState } from 'react'
import BoardComponent from './components/board/BoardComponent'
import { Board } from './models/Board'

const App = () => {
	const [board, setBoard] = useState(new Board())

    useEffect(() => {
        start()
    }, [])

	function start() {
		const newBoard = new Board()
		newBoard.initSquares()
        newBoard.addFigures()
		setBoard(newBoard)
	}

	return (
		<div>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}

export default App
