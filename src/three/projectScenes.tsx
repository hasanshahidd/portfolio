import { useMemo, useRef } from 'react'
import { useFrame, type RootState } from '@react-three/fiber'
import * as THREE from 'three'

// Shared glass recipe (premium look); geometry/motion is unique per scene.
const glass = {
  transmission: 0.95,
  thickness: 0.7,
  roughness: 0.06,
  ior: 1.5,
  metalness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  color: '#9fbcff',
  attenuationColor: '#3b6ef5',
  attenuationDistance: 1.6,
} as const
const core = { color: '#bcd4ff', emissive: '#4f8bff', emissiveIntensity: 3, toneMapped: false } as const
const glow = { color: '#cfe0ff', emissive: '#7db1ff', emissiveIntensity: 2.6, toneMapped: false } as const

// 1. Agentic Procurement - glass torus-knot core with orbiting glass cubes.
function Procurement() {
  const g = useRef<THREE.Mesh>(null)
  const cubes = useRef<(THREE.Mesh | null)[]>([])
  useFrame((s: RootState, d) => {
    if (g.current) { g.current.rotation.y += d * 0.3; g.current.rotation.x += d * 0.1 }
    cubes.current.forEach((m, i) => {
      if (!m) return
      const a = s.clock.elapsedTime * (0.5 + i * 0.1) + i
      m.position.set(Math.cos(a) * 1.8, Math.sin(a * 0.7) * 0.7, Math.sin(a) * 1.8)
      m.rotation.x += 0.02
      m.rotation.y += 0.02
    })
  })
  return (
    <group>
      <mesh ref={g}><torusKnotGeometry args={[0.7, 0.22, 160, 32]} /><meshPhysicalMaterial {...glass} /></mesh>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} ref={(el) => { cubes.current[i] = el }}>
          <boxGeometry args={[0.28, 0.28, 0.28]} /><meshPhysicalMaterial {...glass} />
        </mesh>
      ))}
    </group>
  )
}

// 2. Enterprise GRC - glass gem (vault) with two crossed glowing rings.
function Compliance() {
  const a = useRef<THREE.Mesh>(null)
  const b = useRef<THREE.Mesh>(null)
  useFrame((_, d) => {
    if (a.current) a.current.rotation.z += d * 0.6
    if (b.current) b.current.rotation.x += d * 0.5
  })
  return (
    <group>
      <mesh><octahedronGeometry args={[1.0, 0]} /><meshPhysicalMaterial {...glass} /></mesh>
      <mesh><octahedronGeometry args={[0.4, 0]} /><meshStandardMaterial {...core} /></mesh>
      <mesh ref={a}><torusGeometry args={[1.55, 0.025, 16, 140]} /><meshStandardMaterial {...glow} /></mesh>
      <mesh ref={b} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.75, 0.02, 16, 140]} /><meshStandardMaterial {...glow} /></mesh>
    </group>
  )
}

// 3. Voice AI Patient Registration - radial waveform of glass bars.
function PatientVoice() {
  const bars = useRef<(THREE.Mesh | null)[]>([])
  const N = 16
  useFrame((s: RootState) => {
    const t = s.clock.elapsedTime
    for (let i = 0; i < N; i++) {
      const m = bars.current[i]
      if (!m) continue
      m.scale.y = 0.4 + (Math.sin(t * 3 + i * 0.5) * 0.5 + 0.5) * 1.6
    }
  })
  return (
    <group rotation={[Math.PI / 2.4, 0, 0]}>
      <mesh><icosahedronGeometry args={[0.5, 1]} /><meshStandardMaterial {...core} /></mesh>
      {Array.from({ length: N }).map((_, i) => {
        const a = (i / N) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4]} ref={(el) => { bars.current[i] = el }}>
            <boxGeometry args={[0.1, 1, 0.1]} /><meshPhysicalMaterial {...glass} />
          </mesh>
        )
      })}
    </group>
  )
}

// 4. RAG Compliance - stacked glass document plates that fan and rotate.
function RagDocs() {
  const g = useRef<THREE.Group>(null)
  useFrame((s: RootState, d) => {
    if (g.current) {
      g.current.rotation.y += d * 0.4
      g.current.children.forEach((c, i) => {
        c.position.y = (i - 2) * 0.45 + Math.sin(s.clock.elapsedTime + i) * 0.06
        c.rotation.z = Math.sin(s.clock.elapsedTime * 0.5 + i) * 0.15
      })
    }
  })
  return (
    <group ref={g}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[1.6, 0.08, 1.1]} /><meshPhysicalMaterial {...glass} />
        </mesh>
      ))}
    </group>
  )
}

// 5. OMANI Therapist Voice - glass core with expanding sound rings.
function OmaniVoice() {
  const rings = useRef<(THREE.Mesh | null)[]>([])
  const c = useRef<THREE.Mesh>(null)
  const R = 4
  useFrame((s: RootState) => {
    const t = s.clock.elapsedTime
    if (c.current) c.current.scale.setScalar(1 + Math.sin(t * 3) * 0.08)
    for (let i = 0; i < R; i++) {
      const m = rings.current[i]
      if (!m) continue
      const p = (t * 0.45 + i / R) % 1
      m.scale.setScalar(0.5 + p * 2.6)
      ;(m.material as THREE.MeshStandardMaterial).opacity = (1 - p) * 0.9
    }
  })
  return (
    <group rotation={[Math.PI / 2.1, 0, 0]}>
      <mesh ref={c} rotation={[-Math.PI / 2.1, 0, 0]}><icosahedronGeometry args={[0.58, 1]} /><meshPhysicalMaterial {...glass} /></mesh>
      {Array.from({ length: R }).map((_, i) => (
        <mesh key={i} ref={(el) => { rings.current[i] = el }}>
          <torusGeometry args={[1, 0.03, 16, 120]} />
          <meshStandardMaterial color="#7db1ff" emissive="#4f8bff" emissiveIntensity={2.4} transparent opacity={0.6} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

// 6. Healthcare Readmission - a beating core inside a glass pulse ring + vitals.
function HealthPulse() {
  const c = useRef<THREE.Mesh>(null)
  const ring = useRef<THREE.Mesh>(null)
  const dots = useRef<(THREE.Mesh | null)[]>([])
  useFrame((s: RootState, d) => {
    const t = s.clock.elapsedTime
    const beat = 1 + Math.max(0, Math.sin(t * 3)) ** 8 * 0.4
    if (c.current) c.current.scale.setScalar(0.5 * beat)
    if (ring.current) ring.current.rotation.z += d * 0.4
    dots.current.forEach((m, i) => {
      if (!m) return
      const a = t * 0.8 + (i / 3) * Math.PI * 2
      m.position.set(Math.cos(a) * 1.5, Math.sin(a) * 1.5, 0)
    })
  })
  return (
    <group>
      <mesh ref={ring}><torusGeometry args={[1.4, 0.04, 16, 140]} /><meshPhysicalMaterial {...glass} /></mesh>
      <mesh ref={c}><icosahedronGeometry args={[1, 1]} /><meshStandardMaterial {...core} /></mesh>
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} ref={(el) => { dots.current[i] = el }}>
          <sphereGeometry args={[0.09, 16, 16]} /><meshStandardMaterial {...glow} />
        </mesh>
      ))}
    </group>
  )
}

// 7. Emotion Detection - faceted glass lens with iris + scan ring.
function EmotionLens() {
  const shell = useRef<THREE.Mesh>(null)
  const scan = useRef<THREE.Mesh>(null)
  const iris = useRef<THREE.Mesh>(null)
  useFrame((s: RootState, d) => {
    if (shell.current) { shell.current.rotation.y += d * 0.3; shell.current.rotation.x += d * 0.12 }
    if (scan.current) scan.current.rotation.z += d * 1.2
    if (iris.current) iris.current.scale.setScalar(1 + Math.sin(s.clock.elapsedTime * 2) * 0.12)
  })
  return (
    <group>
      <mesh ref={shell}><icosahedronGeometry args={[1.3, 0]} /><meshPhysicalMaterial {...glass} /></mesh>
      <mesh ref={iris}><sphereGeometry args={[0.4, 32, 32]} /><meshStandardMaterial {...core} /></mesh>
      <mesh ref={scan} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.5, 0.02, 16, 120]} /><meshStandardMaterial {...glow} /></mesh>
    </group>
  )
}

// 8. Ace Predictor (Tennis) - glass ball with a seam, spinning and bouncing.
function TennisBall() {
  const g = useRef<THREE.Group>(null)
  useFrame((s: RootState, d) => {
    if (g.current) {
      g.current.rotation.y += d * 0.8
      g.current.position.y = Math.abs(Math.sin(s.clock.elapsedTime * 1.6)) * 0.6 - 0.2
    }
  })
  return (
    <group ref={g}>
      <mesh><sphereGeometry args={[1.05, 48, 48]} /><meshPhysicalMaterial {...glass} /></mesh>
      <mesh rotation={[Math.PI / 2.5, 0, 0]}><torusGeometry args={[1.05, 0.04, 16, 120]} /><meshStandardMaterial {...glow} /></mesh>
      <mesh rotation={[Math.PI / 2.5, Math.PI / 2, 0]}><torusGeometry args={[1.05, 0.04, 16, 120]} /><meshStandardMaterial {...glow} /></mesh>
    </group>
  )
}

// 9. Pandemic Pulse - glass virus sphere with radiating spike proteins.
function VirusGlobe() {
  const g = useRef<THREE.Group>(null)
  const spikes = useMemo(() => {
    const arr: { pos: [number, number, number]; rot: [number, number, number] }[] = []
    const n = 26
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = i * 2.399
      const dir = new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r)
      const pos = dir.clone().multiplyScalar(1.15)
      const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir)
      const e = new THREE.Euler().setFromQuaternion(q)
      arr.push({ pos: [pos.x, pos.y, pos.z], rot: [e.x, e.y, e.z] })
    }
    return arr
  }, [])
  useFrame((_, d) => { if (g.current) { g.current.rotation.y += d * 0.35; g.current.rotation.x += d * 0.1 } })
  return (
    <group ref={g}>
      <mesh><sphereGeometry args={[1, 48, 48]} /><meshPhysicalMaterial {...glass} /></mesh>
      {spikes.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot}>
          <coneGeometry args={[0.08, 0.35, 12]} /><meshStandardMaterial {...glow} />
        </mesh>
      ))}
    </group>
  )
}

// 10. NYC Taxi - a glass city grid of rising/falling blocks.
function TaxiGrid() {
  const blocks = useRef<(THREE.Mesh | null)[]>([])
  const grid = useMemo(() => {
    const g: { x: number; z: number; key: number }[] = []
    let k = 0
    for (let x = -2; x <= 2; x++) for (let z = -2; z <= 2; z++) g.push({ x: x * 0.5, z: z * 0.5, key: k++ })
    return g
  }, [])
  useFrame((s: RootState) => {
    const t = s.clock.elapsedTime
    grid.forEach((c, i) => {
      const m = blocks.current[i]
      if (!m) return
      const h = 0.3 + (Math.sin(t * 1.4 + c.x * 2 + c.z * 2) * 0.5 + 0.5) * 1.4
      m.scale.y = h
      m.position.y = h / 2 - 0.6
    })
  })
  return (
    <group rotation={[0.5, 0.6, 0]}>
      {grid.map((c, i) => (
        <mesh key={c.key} position={[c.x, 0, c.z]} ref={(el) => { blocks.current[i] = el }}>
          <boxGeometry args={[0.32, 1, 0.32]} /><meshPhysicalMaterial {...glass} />
        </mesh>
      ))}
    </group>
  )
}

// 11. GlobalMart - a glass globe orbited by glowing sales bars.
function SalesGlobe() {
  const g = useRef<THREE.Group>(null)
  const bars = useRef<(THREE.Mesh | null)[]>([])
  const N = 8
  useFrame((s: RootState, d) => {
    if (g.current) g.current.rotation.y += d * 0.25
    const t = s.clock.elapsedTime
    bars.current.forEach((m, i) => {
      if (!m) return
      m.scale.y = 0.5 + (Math.sin(t * 1.6 + i) * 0.5 + 0.5) * 1.3
    })
  })
  return (
    <group ref={g} rotation={[0.3, 0, 0]}>
      <mesh><sphereGeometry args={[0.85, 48, 48]} /><meshPhysicalMaterial {...glass} /></mesh>
      {Array.from({ length: N }).map((_, i) => {
        const a = (i / N) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 1.45, 0, Math.sin(a) * 1.45]} ref={(el) => { bars.current[i] = el }}>
            <boxGeometry args={[0.16, 1, 0.16]} /><meshStandardMaterial {...glow} />
          </mesh>
        )
      })}
    </group>
  )
}

// 12. Kavak Travel - glass planet with a marker traveling its orbital route.
function TravelGlobe() {
  const planet = useRef<THREE.Mesh>(null)
  const marker = useRef<THREE.Mesh>(null)
  useFrame((s: RootState, d) => {
    if (planet.current) planet.current.rotation.y += d * 0.2
    if (marker.current) {
      const a = s.clock.elapsedTime
      marker.current.position.set(Math.cos(a) * 1.5, 0, Math.sin(a) * 1.5)
    }
  })
  return (
    <group rotation={[0.5, 0, 0]}>
      <mesh ref={planet}><sphereGeometry args={[0.9, 48, 48]} /><meshPhysicalMaterial {...glass} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.5, 0.015, 16, 140]} /><meshStandardMaterial {...glow} /></mesh>
      <mesh ref={marker}><sphereGeometry args={[0.11, 16, 16]} /><meshStandardMaterial {...core} /></mesh>
    </group>
  )
}

// 13. FinSight - a rotating stack of glass coins with a glowing core.
function FinanceCoins() {
  const g = useRef<THREE.Group>(null)
  const coins = useRef<(THREE.Mesh | null)[]>([])
  useFrame((s: RootState, d) => {
    if (g.current) g.current.rotation.y += d * 0.3
    const t = s.clock.elapsedTime
    coins.current.forEach((m, i) => {
      if (!m) return
      m.position.y = -0.7 + i * 0.34 + Math.sin(t * 1.4 + i) * 0.05
    })
  })
  return (
    <group ref={g} rotation={[0.3, 0, 0]}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} ref={(el) => { coins.current[i] = el }}>
          <cylinderGeometry args={[0.7 - i * 0.05, 0.7 - i * 0.05, 0.14, 40]} />
          <meshPhysicalMaterial {...glass} />
        </mesh>
      ))}
      <mesh position={[0, 1.15, 0]}><icosahedronGeometry args={[0.3, 1]} /><meshStandardMaterial {...core} /></mesh>
    </group>
  )
}

// 14. Multi-Tenant System - isolated glass tenant pods orbiting a central core.
function TenantPods() {
  const g = useRef<THREE.Group>(null)
  const pods = useRef<(THREE.Mesh | null)[]>([])
  const N = 5
  useFrame((s: RootState, d) => {
    if (g.current) g.current.rotation.y += d * 0.25
    const t = s.clock.elapsedTime
    pods.current.forEach((m, i) => {
      if (!m) return
      m.rotation.x += 0.01
      m.rotation.y += 0.012
      m.position.y = Math.sin(t + i) * 0.12
    })
  })
  return (
    <group ref={g}>
      <mesh><icosahedronGeometry args={[0.55, 1]} /><meshStandardMaterial {...core} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.6, 0.015, 16, 120]} /><meshStandardMaterial {...glow} /></mesh>
      {Array.from({ length: N }).map((_, i) => {
        const a = (i / N) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 1.6, 0, Math.sin(a) * 1.6]} ref={(el) => { pods.current[i] = el }}>
            <boxGeometry args={[0.45, 0.45, 0.45]} /><meshPhysicalMaterial {...glass} />
          </mesh>
        )
      })}
    </group>
  )
}

// 15. Fraud Detection - a radar sweep over glass nodes, flagging an anomaly.
function FraudRadar() {
  const sweep = useRef<THREE.Group>(null)
  const alert = useRef<THREE.Mesh>(null)
  const nodes = useMemo(
    () => [[0.9, 0.5], [-1.1, 0.3], [0.4, -1.0], [-0.6, -0.7], [1.2, -0.4]] as [number, number][],
    [],
  )
  useFrame((s: RootState, d) => {
    if (sweep.current) sweep.current.rotation.z -= d * 1.4
    if (alert.current) {
      const p = Math.sin(s.clock.elapsedTime * 4) * 0.5 + 0.5
      alert.current.scale.setScalar(0.9 + p * 0.5)
      ;(alert.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 2 + p * 5
    }
  })
  return (
    <group rotation={[0.95, 0, 0]}>
      <mesh><torusGeometry args={[1.7, 0.012, 16, 140]} /><meshStandardMaterial {...glow} /></mesh>
      <mesh>
        <torusGeometry args={[1.1, 0.01, 16, 140]} />
        <meshStandardMaterial color="#4f8bff" emissive="#4f8bff" emissiveIntensity={1.2} transparent opacity={0.5} toneMapped={false} />
      </mesh>
      {/* sweeping radar arm */}
      <group ref={sweep}>
        <mesh position={[0.85, 0, 0]}>
          <planeGeometry args={[1.7, 0.05]} />
          <meshBasicMaterial color="#9ec5ff" transparent opacity={0.45} side={THREE.DoubleSide} />
        </mesh>
      </group>
      {/* glass core */}
      <mesh><icosahedronGeometry args={[0.4, 1]} /><meshPhysicalMaterial {...glass} /></mesh>
      {/* normal transaction nodes */}
      {nodes.map((n, i) => (
        <mesh key={i} position={[n[0], n[1], 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#6fa0ff" emissive="#4f8bff" emissiveIntensity={1} toneMapped={false} />
        </mesh>
      ))}
      {/* flagged anomaly */}
      <mesh ref={alert} position={[-1.0, 0.9, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" emissive="#cfe0ff" emissiveIntensity={3} toneMapped={false} />
      </mesh>
    </group>
  )
}

// Map each project (by title) to its own unique scene.
export function sceneForTitle(title: string) {
  const t = title.toLowerCase()
  if (t.includes('fraud')) return <FraudRadar />
  if (t.includes('kavak') || t.includes('travel')) return <TravelGlobe />
  if (t.includes('finsight') || t.includes('finance')) return <FinanceCoins />
  if (t.includes('tenant')) return <TenantPods />
  if (t.includes('procurement')) return <Procurement />
  if (t.includes('grc')) return <Compliance />
  if (t.includes('patient')) return <PatientVoice />
  if (t.includes('rag')) return <RagDocs />
  if (t.includes('omani')) return <OmaniVoice />
  if (t.includes('readmission')) return <HealthPulse />
  if (t.includes('emotion')) return <EmotionLens />
  if (t.includes('ace') || t.includes('tennis')) return <TennisBall />
  if (t.includes('pandemic')) return <VirusGlobe />
  if (t.includes('taxi')) return <TaxiGrid />
  if (t.includes('globalmart')) return <SalesGlobe />
  return <Procurement />
}
