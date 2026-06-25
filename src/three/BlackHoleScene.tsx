import { Suspense, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Canvas, useFrame, type RootState } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const SPOTS = 6
const SPOT_RADIUS = 2.12

// Animated black hole: the disk turns (ellipse opens/closes), the ring spins,
// bright hot-spots orbit the rim, and the glow pulses. Built in code.
function BlackHole() {
  const tilt = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Group>(null)
  const glow = useRef<THREE.MeshStandardMaterial>(null)
  const halo = useRef<THREE.MeshStandardMaterial>(null)
  const spots = useRef<(THREE.Mesh | null)[]>([])

  useFrame((state: RootState, delta) => {
    const t = state.clock.elapsedTime
    if (tilt.current) {
      tilt.current.rotation.x = 1.28 + Math.sin(t * 0.2) * 0.07
      tilt.current.rotation.y = Math.sin(t * 0.26) * 0.55 // disk turns -> clearly 3D
    }
    if (ring.current) ring.current.rotation.z += delta * 0.5
    if (glow.current) glow.current.emissiveIntensity = 2.4 + Math.sin(t * 2) * 0.9 // pulse
    if (halo.current) halo.current.emissiveIntensity = 1.5 + Math.sin(t * 2 + 1) * 0.6
    // hot-spots orbit the rim
    for (let i = 0; i < SPOTS; i++) {
      const m = spots.current[i]
      if (!m) continue
      const a = t * 0.9 + (i / SPOTS) * Math.PI * 2
      m.position.set(Math.cos(a) * SPOT_RADIUS, 0, Math.sin(a) * SPOT_RADIUS)
      const s = 0.06 + (Math.sin(a * 3 + t * 2) * 0.5 + 0.5) * 0.06
      m.scale.setScalar(s)
    }
  })

  return (
    <group ref={tilt} rotation={[1.28, 0, 0]}>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[2.0, 0.018, 24, 256]} />
          <meshStandardMaterial color="#eaf1ff" emissive="#dce8ff" emissiveIntensity={4.6} toneMapped={false} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.18, 0.11, 24, 256]} />
          <meshStandardMaterial ref={glow} color="#5b7bff" emissive="#4f6bff" emissiveIntensity={2.6} toneMapped={false} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.5, 0.05, 24, 256]} />
          <meshStandardMaterial ref={halo} color="#8a6bff" emissive="#6f5cff" emissiveIntensity={1.6} toneMapped={false} />
        </mesh>
      </group>

      {/* orbiting hot-spots */}
      {Array.from({ length: SPOTS }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            spots.current[i] = el as THREE.Mesh
          }}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#cfe0ff" emissiveIntensity={7} toneMapped={false} />
        </mesh>
      ))}

      {/* event horizon */}
      <mesh>
        <sphereGeometry args={[1.82, 64, 64]} />
        <meshBasicMaterial color="#05060f" />
      </mesh>
    </group>
  )
}

export default function BlackHoleScene() {
  const wrap = useRef<HTMLDivElement>(null)
  const inView = useInView(wrap, { margin: '150px' })
  return (
    <div ref={wrap} className="h-full w-full">
    <Canvas
      frameloop={inView ? 'always' : 'never'}
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <BlackHole />
        <EffectComposer>
          <Bloom intensity={1.4} luminanceThreshold={0.15} luminanceSmoothing={0.5} mipmapBlur radius={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
    </div>
  )
}
