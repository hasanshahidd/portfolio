import { Suspense, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

const PETALS = 8

// A faceted glass flower / asterisk that slowly spins. Real refractive glass
// (physical material + environment), with a glowing core. Built in code.
function Flower() {
  const g = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (g.current) {
      g.current.rotation.z += delta * 0.45
      g.current.rotation.y += delta * 0.2
    }
  })
  return (
    <group ref={g}>
      {Array.from({ length: PETALS }).map((_, i) => {
        const a = (i / PETALS) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * 0.72, Math.sin(a) * 0.72, 0]}
            rotation={[0, 0, a + Math.PI / 2]}
            scale={[0.5, 1.15, 0.5]}
          >
            <octahedronGeometry args={[0.5, 0]} />
            <meshPhysicalMaterial
              transmission={0.96}
              thickness={0.7}
              roughness={0.05}
              ior={1.5}
              metalness={0}
              clearcoat={1}
              clearcoatRoughness={0.1}
              color="#8fb0ff"
              attenuationColor="#3b6ef5"
              attenuationDistance={1.4}
            />
          </mesh>
        )
      })}
      {/* glowing core */}
      <mesh>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshStandardMaterial color="#bcd4ff" emissive="#4f8bff" emissiveIntensity={3.2} toneMapped={false} />
      </mesh>
    </group>
  )
}

export default function GlassFlower() {
  const wrap = useRef<HTMLDivElement>(null)
  const inView = useInView(wrap, { margin: '150px' })
  return (
    <div ref={wrap} className="h-full w-full">
    <Canvas
      frameloop={inView ? 'always' : 'never'}
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 4]} intensity={1.3} />
        <pointLight position={[-3, -2, -2]} intensity={1.5} color="#4f8bff" />
        <Flower />
        <Environment preset="city" />
        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.3} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
    </div>
  )
}
