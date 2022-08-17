import { Colors } from './Colors'
import { Square } from './Square'
import logo from '../assets/white-unit.png'
import uniqid from 'uniqid'

export enum FigureNames {
	FIGURE = 'Figure',
	UNIT = 'Unit'
}

export class Figure {
	public color: Colors
	public logo: typeof logo | null
	public square: Square
	public name: FigureNames
	public id: string

	constructor(color: Colors, square: Square) {
		this.color = color
		this.square = square

		this.square.figure = this
		this.logo = null
		this.name = FigureNames.FIGURE
		this.id = uniqid()
	}

	public canMove(target: Square): boolean {
		if (target.figure) return false
		return true
	}

	public moveFigure(target: Square) {}
}
