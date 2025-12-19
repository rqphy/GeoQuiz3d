import { useParams, useLocation } from "react-router"
import { Canvas } from "@react-three/fiber"
import Experience from "@/components/3d/dot-earth/experience"

export default function Lobby() {
	const { roomId } = useParams<{ roomId: string }>()
	const location = useLocation()
	const username = location.state?.username

	return (
		<>
			<div className="absolute top-0 left-0 w-full h-screen">
				<Canvas camera={{ fov: 30, position: [6, 0, 0] }}>
					<Experience />
				</Canvas>
			</div>

			{/* Room Info Overlay */}
			<div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 bg-black/80 backdrop-blur-sm border border-secondary/30 rounded-lg px-6 py-4">
				<div className="text-center">
					<p className="text-secondary/70 text-sm uppercase tracking-wider mb-1">
						Code de la partie
					</p>
					<p className="text-secondary text-3xl font-bold tracking-widest">
						{roomId}
					</p>
					{username && (
						<p className="text-secondary/70 text-sm mt-2">
							Bienvenue,{" "}
							<span className="text-secondary font-medium">
								{username}
							</span>
						</p>
					)}
				</div>
			</div>
		</>
	)
}
