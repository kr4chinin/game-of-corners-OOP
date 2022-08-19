import './WinModal.scss'
import { FC, useCallback, useEffect, useState } from 'react'
import Portal from '../Portal'

interface WinModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	winner: string | null
	restart: () => void
}

const WinModal: FC<WinModalProps> = ({
	isOpen,
	setIsOpen,
	winner,
	restart
}) => {
	const [winnerColor, setWinnerColor] = useState('')

	const handleRestart = useCallback(() => {
		setIsOpen(false)
		setWinnerColor('')
		restart()
	}, [restart, setWinnerColor, setIsOpen])

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') handleRestart()
		}
		document.body.addEventListener('keydown', closeOnEscapeKey)
		return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
	}, [setIsOpen, handleRestart])

	useEffect(() => {
		if (winner) {
			setIsOpen(true)
			setWinnerColor(winner)
		}
	}, [winner, setIsOpen])

	return (
		<Portal>
			<div
				className={!isOpen ? 'win-modal' : 'win-modal active'}
				onClick={handleRestart}
			>
				<div
					className={
						!isOpen ? 'win-modal__content' : 'win-modal__content active'
					}
					onClick={e => e.stopPropagation()}
				>
					<div className="close-icon-container">
						<p className="close-icon" onClick={handleRestart}>
							❌
						</p>
					</div>
					<p className="win-modal-body">
						<span className="warning-text">{winnerColor} player won!</span>{' '}
						Congratulations! 🎉
					</p>
					<p className="restart-message">
						Press{' '}
						<span className="restart-btn" onClick={handleRestart}>
							here
						</span>{' '}
						to restart the game!
					</p>
				</div>
			</div>
		</Portal>
	)
}

export default WinModal
