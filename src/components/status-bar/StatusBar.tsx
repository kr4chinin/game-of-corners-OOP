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
			<p>
				{currentPlayer?.color === Colors.BLACK
					? "⚫️ Black player's turn"
					: "⚪️ White player's turn"}
			</p>
		</div>
	)
}

export default StatusBar
