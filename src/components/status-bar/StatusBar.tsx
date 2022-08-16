import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
import { Colors } from '../../models/Colors'
import { Player } from '../../models/Player'
import './StatusBar.scss'

interface StatusBarProps {
	currentPlayer: Player | null
}

const StatusBar: FC<StatusBarProps> = ({ currentPlayer }) => {
	return (
		<div className="status-bar-container">
			{currentPlayer?.color === Colors.BLACK ? (
				<p>⚫️ Black player's turn</p>
			) : (
				<p>⚪️ White player's turn</p>
			)}
		</div>
	)
}

export default StatusBar
