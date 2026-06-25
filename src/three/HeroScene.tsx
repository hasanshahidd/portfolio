import { Suspense, useMemo, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Canvas, useFrame, type RootState } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  Torus,
  MeshDistortMaterial,
  Environment,
  Points,
  PointMaterial,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// Glowing, distorted "AI core" + orbiting rings that react to the cursor.
function Core() {
  const group = useRef<THREE.Group>(null)
  const ringA = useRef<THREE.Mesh>(null)
  const ringB = useRef<THREE.Mesh>(null)

  useFrame((state: RootState, delta) => {
    if (group.current) {
      const { x, y } = state.pointer
      group.current.rotation.y += (x * 0.6 - group.current.rotation.y) * 0.04
      group.current.rotation.x += (-y * 0.4 - group.current.rotation.x) * 0.04
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.4
    if (ringB.current) {
      ringB.current.rotation.x += delta * 0.3
      ringB.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={1.0}>
        {/* Glowing core */}
        <Icosahedron args={[1.25, 8]}>
          <MeshDistortMaterial
            color="#3b6ef5"
            emissive="#1940b5"
            emissiveIntensity={1.1}
            roughness={0.1}
            metalness={0.7}
            distort={0.42}
            speed={1.8}
          />
        </Icosahedron>

        {/* Faceted wireframe shell */}
        <Icosahedron args={[1.7, 1]}>
          <meshBasicMaterial color="#7db1ff" wireframe transparent opacity={0.22} />
        </Icosahedron>

        {/* Orbiting rings (glow via bloom) */}
        <Torus ref={ringA} args={[2.3, 0.015, 16, 120]} rotation={[Math.PI / 2.4, 0, 0]}>
          <meshStandardMaterial color="#6ea8ff" emissive="#4f8bff" emissiveIntensity={2.2} toneMapped={false} />
        </Torus>
        <Torus ref={ringB} args={[2.7, 0.012, 16, 120]} rotation={[Math.PI / 3, Math.PI / 5, 0]}>
          <meshStandardMaterial color="#9ec5ff" emissive="#7db1ff" emissiveIntensity={1.8} toneMapped={false} />
        </Torus>
      </Float>
    </group>
  )
}

// Drifting particle field for depth.
function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 1400
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.025
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#9ec5ff" size={0.03} sizeAttenuation depthWrite={false} opacity={0.8} />
    </Points>
  )
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null)
  const inView = useInView(wrap, { margin: '150px' })
  return (
    <div ref={wrap} className="h-full w-full">
    <Canvas
      frameloop={inView ? 'always' : 'never'}
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} color="#ffffff" />
        <pointLight position={[-5, -3, -4]} intensity={2.4} color="#1940b5" />
        <pointLight position={[4, -2, 3]} intensity={2} color="#4f8bff" />
        {/* Core offset to the right so it never sits behind the hero text */}
        <group position={[1.9, 0, 0]}>
          <Core />
        </group>
        <ParticleField />
        <Environment preset="city" />
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.4} mipmapBlur radius={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
    </div>
  )
}
