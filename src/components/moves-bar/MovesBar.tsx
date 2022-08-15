import { FC, useEffect, useState } from 'react'
import { MoveLog } from '../../types/MoveLog'
import './MovesBar.scss'
import uniqid from 'uniqid'
import { Colors } from '../../models/Colors'
import { formatCoordinatesX, formatCoordinatesY } from '../../helpers/formatCoordinates'

interface MovesBarProps {
	currentMove: MoveLog | null
}

const MovesBar: FC<MovesBarProps> = ({ currentMove }) => {
	const [moves, setMoves] = useState<MoveLog[]>([])

	useEffect(() => {
		if (currentMove) {
			setMoves(prev => [...prev, currentMove])
		}
	}, [currentMove])

	return (
		<div className="moves-bar-container">
			{moves.map(move => (
				<p key={uniqid()}>
					{move.player?.color === Colors.BLACK ? '⚫️' : '⚪️'} {formatCoordinatesX(move.x)}{' '}
					{formatCoordinatesY(move.y)} {'->'} <span className='gray-text'>{move.timestamp}</span>
				</p>
			))}
		</div>
	)
}

export default MovesBar
