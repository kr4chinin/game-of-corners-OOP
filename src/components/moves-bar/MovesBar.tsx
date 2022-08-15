import { FC, useEffect, useState } from 'react'
import { MoveLog } from '../../types/MoveLog'
import './MovesBar.scss'
import uniqid from 'uniqid'
import { Colors } from '../../models/Colors'

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
					{move.player?.color === Colors.BLACK ? '⚫️' : '⚪️'} {move.x}{' '}
					{move.y} {'->'} <span className='gray-text'>{move.timestamp}</span>
				</p>
			))}
		</div>
	)
}

export default MovesBar
