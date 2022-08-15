import { Board } from "./Board"
import { Colors } from "./Colors"
import uniqid from 'uniqid'

export class Square {
    readonly x: number
	readonly y: number
	readonly color: Colors
	board: Board
	available: boolean
	id: string

    constructor(
		board: Board,
		x: number,
		y: number,
		color: Colors,
	) {
		this.board = board
		this.x = x
		this.y = y
		this.color = color
		this.available = false
		this.id = uniqid()
	}
}