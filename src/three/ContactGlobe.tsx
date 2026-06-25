import { Suspense, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

function Globe() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.25
  })
  return (
    <group ref={group} rotation={[0.4, 0, 0.2]}>
      {/* solid inner glow sphere */}
      <Sphere args={[1.35, 48, 48]}>
        <meshStandardMaterial color="#1940b5" emissive="#1940b5" emissiveIntensity={0.5} roughness={0.4} metalness={0.3} />
      </Sphere>
      {/* wireframe latitude/longitude shell */}
      <Sphere args={[1.55, 24, 24]}>
        <meshBasicMaterial color="#6ea8ff" wireframe transparent opacity={0.4} />
      </Sphere>
      {/* faceted outer cage */}
      <Icosahedron args={[1.9, 1]}>
        <meshBasicMaterial color="#4f8bff" wireframe transparent opacity={0.15} />
      </Icosahedron>
    </group>
  )
}

export default function ContactGlobe() {
  const wrap = useRef<HTMLDivElement>(null)
  const inView = useInView(wrap, { margin: '150px' })
  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        frameloop={inView ? 'always' : 'never'}
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 2, 4]} intensity={2.5} color="#4f8bff" />
          <pointLight position={[-3, -2, -2]} intensity={1.5} color="#1940b5" />
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}
