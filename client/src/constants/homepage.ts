import { Globe, Zap, Trophy } from "lucide-react"
import type { TutorialCard, FAQItem, Review } from "@/types/content"

// Tutorial Cards for "How to Play" section
export const TUTORIAL_CARDS: TutorialCard[] = [
	{
		icon: Globe,
		title: "Devinez les capitales",
		description:
			"Trouvez la capitale d'un pays donné ou identifiez le pays d'une capitale. Testez vos connaissances géographiques !",
	},
	{
		icon: Zap,
		title: "Soyez rapide",
		description:
			"20 secondes pour répondre ! Plus vous répondez vite, plus vous marquez de points.",
	},
	{
		icon: Trophy,
		title: "Affrontez vos amis",
		description:
			"Jouez en multijoueur et grimpez dans le classement en battant vos adversaires !",
	},
]

// FAQ Items
export const FAQ_ITEMS: FAQItem[] = [
	{
		question: "Comment sont calculés les points ?",
		answer: "Plus vous répondez rapidement, plus vous gagnez de points ! Une réponse instantanée rapporte le maximum de points, tandis qu'une réponse juste avant la fin du chrono rapporte moins. Une mauvaise réponse ne fait pas perdre de points.",
	},
	{
		question: "Combien de joueurs peuvent jouer ensemble ?",
		answer: "GeoQuiz supporte de 2 à 8 joueurs par partie. Plus on est de fous, plus on rit !",
	},
	{
		question: "Les questions sont-elles aléatoires ?",
		answer: "Oui ! Chaque partie propose un mélange aléatoire de questions sur les capitales et les pays du monde entier. Vous ne tomberez jamais deux fois sur la même série de questions.",
	},
	{
		question: "Puis-je jouer sur mobile ?",
		answer: "Absolument ! GeoQuiz est entièrement responsive et fonctionne parfaitement sur smartphone, tablette et ordinateur.",
	},
]

// User Reviews
export const REVIEWS: Review[] = [
	{
		name: "Marie L.",
		text: "Super jeu pour réviser sa géographie en s'amusant ! J'ai enfin retenu toutes les capitales d'Afrique.",
		rating: 5,
	},
	{
		name: "Thomas D.",
		text: "On joue avec mes collègues pendant la pause déj. L'ambiance est au top !",
		rating: 5,
	},
	{
		name: "Sophie M.",
		text: "Parfait pour les soirées entre amis. Simple, rapide et addictif !",
		rating: 4,
	},
]

// App Statistics (can be updated dynamically later)
export const APP_STATS = {
	questionsAnswered: "1200+",
	activePlayers: "500+",
	gamesPlayed: "300+",
}
