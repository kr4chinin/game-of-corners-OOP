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

		// move vertically
		if ((dx === 1 || dx === -1) && dy === 0) return true

		// move horizontally
		if ((dy === 1 || dy === -1) && dx === 0) return true

		// jump over one vertically
		if (
			(dx === 2 || dx === -2) &&
			dy === 0 &&
			this.square.board.getSquare(this.square.x + dx / 2, this.square.y).figure
		)
			return true

		// jump over one horizontally
		if (
			(dy === 2 || dy === -2) &&
			dx === 0 &&
			this.square.board.getSquare(this.square.x, this.square.y + dy / 2).figure
		)
			return true

		return false
	}
}
