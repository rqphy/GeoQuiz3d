type Player = {
	name: string
	score: number
	color: string
	hasFoundAnswer: boolean
}

const FAKE_PLAYERS: Player[] = [
	{ name: "Alice", score: 1200, color: "#FF5733", hasFoundAnswer: true },
	{ name: "Bob", score: 850, color: "#33FF57", hasFoundAnswer: false },
	{ name: "Charlie", score: 1500, color: "#3357FF", hasFoundAnswer: true },
	{ name: "David", score: 600, color: "#F333FF", hasFoundAnswer: false },
]

export default function Scoreboard() {
	return (
		<div className="flex flex-col gap-2 p-4 bg-background rounded-lg max-w-xs">
			<h2 className="text-foreground text-md font-bold mb-2">
				Scoreboard
			</h2>
			{FAKE_PLAYERS.sort((a, b) => b.score - a.score).map((player) => (
				<div
					key={player.name}
					className="flex justify-between items-center gap-2 p-2 rounded transition-colors duration-300"
					style={{
						backgroundColor: player.hasFoundAnswer
							? `${player.color}40` // 25% opacity (hex 40) for desaturated look
							: "transparent",
					}}
				>
					<span
						className="font-semibold text-sm"
						style={{ color: player.color }}
					>
						{player.name}
					</span>
					<span className="text-foreground font-mono text-sm">
						{player.score}
					</span>
				</div>
			))}
		</div>
	)
}
