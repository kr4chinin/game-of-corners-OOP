import { Player } from "../models/Player"

export type MoveLog = {
    x: number,
    y: number,
    player: Player | null
}