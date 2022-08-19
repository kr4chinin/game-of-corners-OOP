import './WelcomeModal.scss'
import { FC, useEffect } from 'react'
import Portal from '../Portal'

interface WelcomeModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const WelcomeModal: FC<WelcomeModalProps> = ({ isOpen, setIsOpen }) => {
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') return setIsOpen(false)
		}
		document.body.addEventListener('keydown', closeOnEscapeKey)
		return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
	}, [setIsOpen])

	function handleClose() {
		setIsOpen(false)
	}

	return (
		<Portal>
			<div
				className={!isOpen ? 'modal' : 'modal active'}
				onClick={() => setIsOpen(false)}
			>
				<div
					className={!isOpen ? 'modal__content' : 'modal__content active'}
					onClick={e => e.stopPropagation()}
				>
					<div className="modal__header">
						<p>Welcome to The Game Of Corners!</p>
						<p className="close-cross" onClick={handleClose}>
							❌
						</p>
					</div>
					<hr className="breaking-line" />
					<div className="modal__body">
						<ul>
							<li>
								Your <span className="blue">goal</span> is to move all your
								units to the enemy's corner, you can move forward / backwards or
								jump over 1, 2 or 3 units
							</li>
							<li>
								You can use <span className="blue">Drag</span> &amp;{' '}
								<span className="red">Drop</span> mechanic to move your units or
								you can manually select them and choose where to go by clicking
								on the preferred square
							</li>
							<li>
								Squares which are available for the current unit to move at will
								be <span className="blue">highlighted</span>
							</li>
							<li>
								On the <span className="red">sidebar</span> you will see whose
								turn is now and movements log
							</li>
							<li>
								A <span className="blue">special pop-up</span> will be shown if
								someone won the game
							</li>
						</ul>
						<p className="closing-text">
							Happy playing! My <span className="red">GitHub</span> &mdash;{' '}
							<a href="https://github.com/kr4chinin" target="blank">
								github.com/kr4chinin
							</a>{' '}
							💻
						</p>
					</div>
				</div>
			</div>
		</Portal>
	)
}

export default WelcomeModal
