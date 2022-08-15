export function getCurrentTime() {
    const now = new Date()
    return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
}