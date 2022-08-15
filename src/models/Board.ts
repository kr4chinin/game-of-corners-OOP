import { Colors } from "./Colors";
import { Square } from "./Square";

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
}