import type { LucideIcon } from "lucide-react"

export type TutorialCard = {
	icon: LucideIcon
	title: string
	description: string
}

export type FAQItem = {
	question: string
	answer: string
}

export type Review = {
	name: string
	text: string
	rating: number
}
