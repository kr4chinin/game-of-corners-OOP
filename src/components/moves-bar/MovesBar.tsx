import { FC, useEffect, useRef, useState } from 'react'
import { MoveLog } from '../../types/MoveLog'
import './MovesBar.scss'
import { Colors } from '../../models/Colors'
import {
	formatCoordinatesX,
	formatCoordinatesY
} from '../../helpers/formatCoordinates'
import { useAutoAnimate } from '@formkit/auto-animate/react'

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

	const [list] = useAutoAnimate<HTMLDivElement>()

	const scrollTo = useRef<HTMLDivElement>(null)

	useEffect(() => {
		scrollTo?.current?.scrollIntoView(true)
	}, [moves])

	return (
		<div className="moves-bar-container" ref={list}>
			{moves.map((move, index) => (
				<p key={index}>
					{move.player?.color === Colors.BLACK ? '⚫️' : '⚪️'}{' '}
					{formatCoordinatesX(move.x)} {formatCoordinatesY(move.y)} {'->'}{' '}
					<span className="gray-text">{move.timestamp}</span>
				</p>
			))}
			<div ref={scrollTo} />
		</div>
	)
}

export default MovesBar
