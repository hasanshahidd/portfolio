import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { sceneForTitle } from './projectScenes'

// Every project renders its OWN unique glass scene (chosen by title).
export default function ProjectScene({ title }: { title: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <pointLight position={[-4, -2, -3]} intensity={1.6} color="#4f8bff" />
        {sceneForTitle(title)}
        <Environment preset="city" />
        <EffectComposer>
          <Bloom intensity={0.9} luminanceThreshold={0.25} luminanceSmoothing={0.4} mipmapBlur />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
