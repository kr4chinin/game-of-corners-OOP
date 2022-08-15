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

    isEmpty(): boolean {
		return this.figure === null
	}

	setFigure(figure: Figure) {
		this.figure = figure
		this.figure.square = this
	}

	moveFigure(target: Square) {
		if (this.figure && this.figure.canMove(target)) {
			this.figure.moveFigure(target)
			target.setFigure(this.figure)
			this.figure = null
		}
	}
}