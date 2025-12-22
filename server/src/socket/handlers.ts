import { Server, Socket } from "socket.io"
import { SOCKET_EVENTS } from "./events.js"
import { GameRoom } from "../game/game-room.js"
import type { Player } from "../types/index.js"

const rooms = new Map<string, GameRoom>()
