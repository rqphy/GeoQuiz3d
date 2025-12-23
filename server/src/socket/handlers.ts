import { Server, Socket } from "socket.io"
import { SOCKET_EVENTS } from "./events.js"
import { GameRoom } from "../game/game-room.js"
import type { Player } from "../types/index.js"

const rooms = new Map<string, GameRoom>()

export function initializeSocketHandlers(io: Server) {
	io.on(SOCKET_EVENTS.CONNECTION, (socket: Socket) => {
		console.log("Client connected:", socket.id)

		// Create room
		socket.on(SOCKET_EVENTS.CREATE_ROOM, (playerName: string) => {
			const room = new GameRoom(io)
			rooms.set(room.id, room)

			const player: Player = {
				id: socket.id,
				name: playerName,
				score: 0,
				isAdmin: true,
			}

			room.addPlayer(player)
			socket.join(room.id)

			socket.emit(SOCKET_EVENTS.ROOM_CREATED, {
				roomId: room.id,
				player,
			})
		})

		// Join room
		socket.on(
			SOCKET_EVENTS.JOIN_ROOM,
			(roomId: string, playerName: string) => {
				const room = rooms.get(roomId)
				if (!room) {
					socket.emit(SOCKET_EVENTS.ERROR, "Room not found")
					return
				}

				if (room.isGameStarted) {
					socket.emit(SOCKET_EVENTS.ERROR, "Game already started")
					return
				}

				const player: Player = {
					id: socket.id,
					name: playerName,
					score: 0,
					isAdmin: false,
				}

				room.addPlayer(player)
				socket.join(roomId)

				socket.emit(SOCKET_EVENTS.PLAYER_JOINED, {
					player,
					room: room.getState(),
				})

				socket.to(roomId).emit(SOCKET_EVENTS.PLAYER_JOINED, {
					player,
				})
			}
		)

		// Start game
        socket.on(SOCKET_EVENTS.START_GAME, (roomId: string) => {
            const room = rooms.get(roomId)
            if(!room) return

            const admin = room.getPlayer(socket.id)
            if(!admin || !admin.isAdmin) {
                socket.emit(SOCKET_EVENTS.ERROR, "You are not the admin")
                return
            }

            room.startGame()
        })

		// Submit answer
        socket.on(SOCKET_EVENTS.SUBMIT_ANSWER, (roomId: string, answer: string) => {
            const room = rooms.get(roomId)
            if(!room) return

            room.submitAnswer(socket.id, answer)
        })

		io.on(SOCKET_EVENTS.DISCONNECTION, (socket: Socket) => {
			rooms.forEach((room, roomId) => {
				if (room.hasPlayer(socket.id)) {
					room.removePlayer(socket.id)
					io.to(roomId).emit(SOCKET_EVENTS.PLAYER_LEFT, socket.id)

					if (room.isEmpty()) {
						rooms.delete(roomId)
					}
				}
			})
		})
	})
}
