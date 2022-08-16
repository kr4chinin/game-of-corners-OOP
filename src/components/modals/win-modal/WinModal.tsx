import './WinModal.scss'
import { createPortal } from 'react-dom'
import { FC, useEffect, useState } from 'react'

interface WinModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	winner: string | null
    restart: () => void
}

const WinModal: FC<WinModalProps> = ({ isOpen, setIsOpen, winner, restart}) => {
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') handleRestart()
		}
		document.body.addEventListener('keydown', closeOnEscapeKey)
		return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
	}, [setIsOpen])

	const [winnerColor, setWinnerColor] = useState('')

	useEffect(() => {
		if (winner) {
			setIsOpen(true)
			setWinnerColor(winner)
		}
	}, [winner])

    function handleRestart() {
        setIsOpen(false)
        setWinnerColor('')
        restart()
    }

	return createPortal(
		<div
			className={!isOpen ? 'win-modal' : 'win-modal active'}
			onClick={handleRestart}
		>
			<div
				className={!isOpen ? 'win-modal__content' : 'win-modal__content active'}
				onClick={e => e.stopPropagation()}
			>
				<div className="close-icon-container">
					<p className='close-icon' onClick={handleRestart}>❌</p>
				</div>
				<p className='win-modal-body'>
					<span className="warning-text">{winnerColor} player won!</span>{' '}
					Congratulations! 🎉
				</p>
                <p className='restart-message'>Press <span className='restart-btn' onClick={handleRestart}>here</span> to restart the game!</p>
			</div>
		</div>,
		document.getElementById('win-portal')!
	)
}

export default WinModal
