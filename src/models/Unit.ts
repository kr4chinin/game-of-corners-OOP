import { Square } from './Square'
import { Colors } from './Colors'
import { Figure, FigureNames } from './Figure'
import blackLogo from '../assets/img/black-unit.png'
import whiteLogo from '../assets/img/white-unit.png'

export class Unit extends Figure {
	constructor(color: Colors, square: Square) {
		super(color, square)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.UNIT
	}

	canMove(target: Square): boolean {
		if (!super.canMove(target)) return false

		const dx = target.x - this.square.x
		const dy = target.y - this.square.y

		// vertical movement
		if (dy === 0) {
			switch (dx) {
				// move left / right
				case 1:
					return true
				case -1:
					return true
				// jump over 1 unit
				case 2:
					if (
						this.square.board.getSquare(this.square.x + 1, this.square.y).figure
					)
						return true
					break
				case -2:
					if (
						this.square.board.getSquare(this.square.x - 1, this.square.y).figure
					)
						return true
					break
				// jump over 2 units
				case 4:
					if (
						this.square.board.getSquare(this.square.x + 1, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x + 2, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x + 3, this.square.y).figure
					)
						return true
					break
				case -4:
					if (
						this.square.board.getSquare(this.square.x - 1, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x - 2, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x - 3, this.square.y).figure
					)
						return true
					break
				// jump over 3 units
				case 6:
					if (
						this.square.board.getSquare(this.square.x + 1, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x + 2, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x + 3, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x + 4, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x + 5, this.square.y).figure
					)
						return true
					break
				case -6:
					if (
						this.square.board.getSquare(this.square.x - 1, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x - 2, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x - 3, this.square.y)
							.figure &&
						!this.square.board.getSquare(this.square.x - 4, this.square.y)
							.figure &&
						this.square.board.getSquare(this.square.x - 5, this.square.y).figure
					)
						return true
					break
				default:
					break
			}
		}

		// horizontal movement
		if (dx === 0) {
			switch (dy) {
				// move forward / backwards
				case 1:
					return true
				case -1:
					return true
				// jump over 1 unit
				case 2:
					if (
						this.square.board.getSquare(this.square.x, this.square.y + 1).figure
					)
						return true
					break
				case -2:
					if (
						this.square.board.getSquare(this.square.x, this.square.y - 1).figure
					)
						return true
					break
				// jump over 2 units
				case 4:
					if (
						this.square.board.getSquare(this.square.x, this.square.y + 1)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y + 2)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y + 3).figure
					)
						return true
					break
				case -4:
					if (
						this.square.board.getSquare(this.square.x, this.square.y - 1)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y - 2)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y - 3).figure
					)
						return true
					break
				// jump over 3 units
				case 6:
					if (
						this.square.board.getSquare(this.square.x, this.square.y + 1)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y + 2)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y + 3)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y + 4)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y + 5).figure
					)
						return true
					break
				case -6:
					if (
						this.square.board.getSquare(this.square.x, this.square.y - 1)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y - 2)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y - 3)
							.figure &&
						!this.square.board.getSquare(this.square.x, this.square.y - 4)
							.figure &&
						this.square.board.getSquare(this.square.x, this.square.y - 5).figure
					)
						return true
					break
				default:
					break
			}
		}
        
        return false
	}
}
