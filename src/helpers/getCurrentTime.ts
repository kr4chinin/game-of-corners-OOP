export function getCurrentTime() {
	const now = new Date()

	let hours = String(now.getHours())
	let minutes = String(now.getMinutes())
	let seconds = String(now.getSeconds())

	hours.length === 1 && (hours = '0' + hours)
	minutes.length === 1 && (minutes = '0' + minutes)
	seconds.length === 1 && (seconds = '0' + seconds)

	return `${hours}:${minutes}:${seconds}`
}
