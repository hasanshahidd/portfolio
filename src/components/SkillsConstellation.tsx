import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  siReact,
  siPython,
  siJavascript,
  siTypescript,
  siDocker,
  siKubernetes,
  siTensorflow,
  siPytorch,
  siFastapi,
  siPostgresql,
  siLangchain,
  siHuggingface,
  siGooglecloud,
  siGithub,
} from 'simple-icons'

type Node = { icon: { title: string; path: string }; x: number; y: number; z: number; size: number }

// x/y are percentages of the box; z is depth (px); size is tile size (px).
const nodes: Node[] = [
  { icon: siPython, x: 50, y: 42, z: 90, size: 74 },
  { icon: siReact, x: 50, y: 12, z: 55, size: 62 },
  { icon: siJavascript, x: 76, y: 22, z: 25, size: 56 },
  { icon: siTypescript, x: 24, y: 22, z: 20, size: 56 },
  { icon: siGooglecloud, x: 86, y: 46, z: 0, size: 48 },
  { icon: siKubernetes, x: 14, y: 46, z: 40, size: 58 },
  { icon: siDocker, x: 72, y: 62, z: 45, size: 58 },
  { icon: siPytorch, x: 28, y: 62, z: 25, size: 54 },
  { icon: siTensorflow, x: 55, y: 73, z: 30, size: 56 },
  { icon: siFastapi, x: 82, y: 74, z: 5, size: 46 },
  { icon: siLangchain, x: 18, y: 76, z: 15, size: 50 },
  { icon: siPostgresql, x: 46, y: 90, z: 20, size: 52 },
  { icon: siHuggingface, x: 70, y: 88, z: 8, size: 48 },
  { icon: siGithub, x: 88, y: 22, z: -5, size: 44 },
]

export default function SkillsConstellation() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 110, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 110, damping: 20 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="relative mx-auto h-[440px] w-full max-w-2xl md:h-[560px]"
      style={{ perspective: 1200 }}
    >
      {/* glowing core */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[90px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[60px]" />

      <motion.div className="absolute inset-0" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        {/* orbit guide rings */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/[0.12]" />

        {nodes.map((n, i) => (
          <motion.div
            key={n.icon.title}
            className="absolute"
            style={{
              left: `calc(${n.x}% - ${n.size / 2}px)`,
              top: `calc(${n.y}% - ${n.size / 2}px)`,
              width: n.size,
              height: n.size,
              z: n.z,
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + (i % 5) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          >
            <div
              className="group flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan/50 hover:bg-white/[0.1]"
              title={n.icon.title}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[46%] w-[46%] fill-white/80 transition-colors duration-300 group-hover:fill-cyan"
                aria-label={n.icon.title}
              >
                <path d={n.icon.path} />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
