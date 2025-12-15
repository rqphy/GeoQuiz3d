import { useMemo } from "react"
import * as THREE from "three"
import atmosphereVertexShader from "./atmosphere/vertex.glsl"
import atmosphereFragmentShader from "./atmosphere/fragment.glsl"

interface AtmosphereProps {
	radius?: number
	innerRadius?: number
	color?: string
	intensity?: number
	power?: number
}

export default function Atmosphere({
	radius = 105,
	innerRadius = 100,
	color = "#4a90e2",
	intensity = 1.5,
	power = 3.0,
}: AtmosphereProps) {
	const uniforms = useMemo(
		() => ({
			uAtmosphereColor: new THREE.Uniform(new THREE.Color(color)),
			uAtmosphereIntensity: new THREE.Uniform(intensity),
			uAtmospherePower: new THREE.Uniform(power),
			uInnerRadius: new THREE.Uniform(innerRadius),
			uOuterRadius: new THREE.Uniform(radius),
		}),
		[color, intensity, power, innerRadius, radius]
	)

	return (
		<mesh>
			<sphereGeometry args={[radius, 64, 64]} />
			<shaderMaterial
				uniforms={uniforms}
				vertexShader={atmosphereVertexShader}
				fragmentShader={atmosphereFragmentShader}
				transparent
				side={THREE.BackSide}
				blending={THREE.AdditiveBlending}
				depthWrite={false}
			/>
		</mesh>
	)
}
