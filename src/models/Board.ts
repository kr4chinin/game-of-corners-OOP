import { Colors } from './Colors'
import { Square } from './Square'
import { Unit } from './Unit'

export class Board {
	squares: Square[][] = []

	public initSquares() {
		for (let i = 0; i < 8; i++) {
			const row: Square[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Square(this, j, i, Colors.BLACK, null))
				} else {
					row.push(new Square(this, j, i, Colors.WHITE, null))
				}
			}
			this.squares.push(row)
		}
	}

	public getCell(x: number, y: number) {
		return this.squares[y][x]
	}

	public getCopyBoard(): Board {
		const newBoard = new Board()
		newBoard.squares = this.squares
		return newBoard
	}

	addFigures() {
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4; x++) {
				new Unit(Colors.WHITE, this.getCell(x, y))
			}
		}
		for (let y = 4; y < 8; y++) {
			for (let x = 4; x < 8; x++) {
				new Unit(Colors.BLACK, this.getCell(x, y))
			}
		}
	}
}
