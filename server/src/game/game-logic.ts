// TODO: Add more complex scoring logic
export function calculateScore(timeRemaining: number): number {
	const baseScore = 100
	const speedBonus = Math.floor(timeRemaining * 2.5)

	return baseScore + speedBonus
}