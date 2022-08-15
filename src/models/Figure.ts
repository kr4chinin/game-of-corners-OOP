import { Colors } from "./Colors"
import { Square } from "./Square"
import logo from '../assets/white-unit.png'
import uniqid from 'uniqid'

export enum FigureNames {
	FIGURE = 'Figure',
	UNIT = 'Unit'
}

export class Figure {
    color: Colors
	logo: typeof logo | null
	square: Square
	name: FigureNames
	id: string

    constructor(color: Colors, square: Square) {
		this.color = color
		this.square = square

		this.square.figure = this
		this.logo = null
		this.name = FigureNames.FIGURE
		this.id = uniqid()
	}

    canMove(target: Square): boolean {
        if (target.figure) return false
		return true
    }
}