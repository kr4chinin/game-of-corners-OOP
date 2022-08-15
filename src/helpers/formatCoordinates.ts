export function formatCoordinatesX(x: number) {
	switch (x) {
		case 0:
			return 'A'
		case 1:
			return 'B'
		case 2:
			return 'C'
		case 3:
			return 'D'
		case 4:
			return 'E'
		case 5:
			return 'F'
		case 6:
			return 'G'
		case 7:
			return 'H'
		default:
			return '❌'
	}
}

export function formatCoordinatesY(y: number) {
	return String(8 - y)
}
