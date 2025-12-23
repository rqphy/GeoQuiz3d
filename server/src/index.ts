import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import { initializeSocketHandlers } from "./socket/handlers.js"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
})

app.use(express.json())

initializeSocketHandlers(io)

httpServer.listen(3000, () => {
	console.log("Server running on port 3000")
})
