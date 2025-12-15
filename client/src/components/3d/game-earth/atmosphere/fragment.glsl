uniform vec3 uAtmosphereColor;
uniform float uAtmosphereIntensity;
uniform float uAtmospherePower;
uniform float uInnerRadius;
uniform float uOuterRadius;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;

void main() {
    // Calculate view direction
    vec3 viewDirection = normalize(-vPosition);
    
    // Fresnel effect: glow is stronger at edges (grazing angles)
    float fresnel = dot(viewDirection, vNormal);
    fresnel = pow(1.0 - fresnel, uAtmospherePower);
    
    // Calculate distance-based opacity fade using world space radial distance
    float radialDistance = length(vWorldPosition);
    
    // Map radial distance to opacity: at inner radius = opaque (0.3), at outer radius = transparent (0)
    float normalizedDistance = (radialDistance - uInnerRadius) / (uOuterRadius - uInnerRadius);
    normalizedDistance = clamp(normalizedDistance, 0.0, 1.0);
    float baseOpacity = (1.0 - normalizedDistance) * 0.3; // Fade from 0.3 to 0
    
    // Apply color and intensity
    vec3 atmosphereGlow = uAtmosphereColor * fresnel * uAtmosphereIntensity;
    
    // Output with alpha based on fresnel and distance fade
    gl_FragColor = vec4(atmosphereGlow, fresnel * baseOpacity);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
