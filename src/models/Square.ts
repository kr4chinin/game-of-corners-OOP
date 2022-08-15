import { Board } from "./Board"
import { Colors } from "./Colors"
import uniqid from 'uniqid'
import { Figure } from "./Figure"

export class Square {
    readonly x: number
	readonly y: number
	readonly color: Colors
	board: Board
	available: boolean
	id: string
    figure: Figure | null

    constructor(
		board: Board,
		x: number,
		y: number,
		color: Colors,
        figure: Figure | null
	) {
		this.board = board
		this.x = x
		this.y = y
		this.color = color
        this.figure = figure
		this.available = false
		this.id = uniqid()
	}
}