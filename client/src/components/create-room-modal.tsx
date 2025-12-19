import { useState } from "react"
import { useNavigate } from "react-router"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { GamepadIcon } from "lucide-react"

interface CreateRoomModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function CreateRoomModal({
	open,
	onOpenChange,
}: CreateRoomModalProps) {
	const [username, setUsername] = useState("")
	const [error, setError] = useState("")
	const navigate = useNavigate()

	const handleCreateRoom = () => {
		// Validate username
		if (!username.trim()) {
			setError("Veuillez entrer un nom d'utilisateur")
			return
		}

		if (username.trim().length < 2) {
			setError("Le nom doit contenir au moins 2 caractères")
			return
		}

		if (username.trim().length > 20) {
			setError("Le nom ne peut pas dépasser 20 caractères")
			return
		}

		// Generate a unique room ID (6 characters)
		const roomId = Math.random().toString(36).substring(2, 8).toUpperCase()

		// Navigate to lobby with username in state
		navigate(`/lobby/${roomId}`, {
			state: { username: username.trim() },
		})

		// Reset form
		setUsername("")
		setError("")
		onOpenChange(false)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleCreateRoom()
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md bg-black/95 border-secondary/30 backdrop-blur-sm">
				<DialogHeader>
					<DialogTitle className="text-2xl font-light text-secondary uppercase tracking-wide">
						Créer une partie
					</DialogTitle>
					<DialogDescription className="text-secondary/70">
						Entrez votre nom pour commencer une nouvelle partie
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<Input
							id="username"
							placeholder="Votre nom d'utilisateur"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value)
								setError("")
							}}
							onKeyDown={handleKeyDown}
							className="bg-secondary/5 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary/60"
							autoFocus
						/>
						{error && (
							<p className="text-sm text-red-400 animate-in slide-in-from-top-1">
								{error}
							</p>
						)}
					</div>
					<Button
						onClick={handleCreateRoom}
						className="w-full bg-secondary hover:bg-secondary/90 text-black font-medium"
					>
						Créer la partie
						<GamepadIcon className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
