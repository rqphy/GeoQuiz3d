import type { Player, Room, Question } from "@/types/game"

// Mock Players
export const MOCK_PLAYERS: Player[] = [
	{ name: "Alice", score: 1200, color: "#FF5733", hasFoundAnswer: true },
	{ name: "Bob", score: 850, color: "#33FF57", hasFoundAnswer: false },
	{ name: "Charlie", score: 1500, color: "#3357FF", hasFoundAnswer: true },
	{ name: "David", score: 600, color: "#F333FF", hasFoundAnswer: false },
	{ name: "Emma", score: 950, color: "#FFD700", hasFoundAnswer: true },
	{ name: "Frank", score: 1100, color: "#FF1493", hasFoundAnswer: false },
]

// Mock Rooms
export const MOCK_ROOMS: Room[] = [
	{
		id: "ABC123",
		hostId: "player-1",
		players: MOCK_PLAYERS.slice(0, 4),
		isGameStarted: false,
	},
	{
		id: "XYZ789",
		hostId: "player-2",
		players: MOCK_PLAYERS.slice(0, 2),
		isGameStarted: true,
	},
]

// Mock Questions
export const MOCK_QUESTIONS: Question[] = [
	{
		id: "q1",
		country: "France",
		capital: "Paris",
		type: "country-to-capital",
		options: ["Paris", "London", "Berlin", "Madrid"],
		correctAnswer: "Paris",
	},
	{
		id: "q2",
		country: "Japan",
		capital: "Tokyo",
		type: "country-to-capital",
		options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
		correctAnswer: "Tokyo",
	},
	{
		id: "q3",
		country: "Brazil",
		capital: "Brasília",
		type: "capital-to-country",
		options: ["Argentina", "Brazil", "Chile", "Peru"],
		correctAnswer: "Brazil",
	},
	{
		id: "q4",
		country: "Australia",
		capital: "Canberra",
		type: "country-to-capital",
		options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
		correctAnswer: "Canberra",
	},
	{
		id: "q5",
		country: "Egypt",
		capital: "Cairo",
		type: "capital-to-country",
		options: ["Libya", "Sudan", "Egypt", "Tunisia"],
		correctAnswer: "Egypt",
	},
]

// Player colors palette (for generating new players)
export const PLAYER_COLORS = [
	"#FF5733", // Red-Orange
	"#33FF57", // Green
	"#3357FF", // Blue
	"#F333FF", // Magenta
	"#FFD700", // Gold
	"#FF1493", // Deep Pink
	"#00CED1", // Dark Turquoise
	"#FF8C00", // Dark Orange
]
