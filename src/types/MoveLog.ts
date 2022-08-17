import { Player } from '../models/Player'

export type MoveLog = {
	fromX: number
	fromY: number
    toX: number
    toY: number
	player: Player | null
	timestamp: string
}
