import { useMemo, useRef } from 'react'
import { Canvas, useFrame, type RootState } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 1300
const X = 15
const Y = 9.5

// Glowing particles drifting through a flow field - a living but restrained
// background current. Stays behind all content.
function Field() {
  const group = useRef<THREE.Group>(null)

  const { geo, positions } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)
    const palette = [
      new THREE.Color('#4f8bff'),
      new THREE.Color('#7db1ff'),
      new THREE.Color('#6f86ff'),
      new THREE.Color('#cfe0ff'),
    ]
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * X
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * Y
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * 2
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return { geo, positions }
  }, [])

  useFrame((state: RootState) => {
    const t = state.clock.elapsedTime
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3
      let x = positions[ix]
      let y = positions[ix + 1]
      const angle =
        (Math.sin(x * 0.12 + t * 0.1) + Math.cos(y * 0.14 - t * 0.08) + Math.sin((x + y) * 0.08 + t * 0.05)) * 1.2
      const sp = 0.013
      x += Math.cos(angle) * sp
      y += Math.sin(angle) * sp
      if (x > X) x = -X
      else if (x < -X) x = X
      if (y > Y) y = -Y
      else if (y < -Y) y = Y
      positions[ix] = x
      positions[ix + 1] = y
    }
    geo.attributes.position.needsUpdate = true
    if (group.current) {
      const { x, y } = state.pointer
      group.current.position.x += (x * 0.5 - group.current.position.x) * 0.02
      group.current.position.y += (-y * 0.3 - group.current.position.y) * 0.02
    }
  })

  return (
    <group ref={group}>
      <points geometry={geo}>
        <pointsMaterial
          size={0.055}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.5}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function FlowFieldBackground() {
  return (
    <div
      className="fixed inset-0"
      style={{
        zIndex: -1,
        pointerEvents: 'none',
        WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 42%, #000 60%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 100% 100% at 50% 42%, #000 60%, transparent 100%)',
      }}
      aria-hidden
    >
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Field />
      </Canvas>
    </div>
  )
}
