import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// The black hole doubles as a cinematic intro / loading screen.
const BlackHoleScene = lazy(() => import('../three/BlackHoleScene'))

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let p = 0
    const id = setInterval(() => {
      p += Math.random() * 5 + 2.5
      if (p >= 100) {
        p = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 900)
      }
      setProgress(Math.floor(p))
    }, 180)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* black hole backdrop */}
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <BlackHoleScene />
            </Suspense>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(5,7,14,0.72),transparent_72%)]" />

          <div className="relative z-10 w-[min(84vw,680px)] px-6 text-center">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              The craft
            </motion.span>
            <motion.h1
              className="section-title mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              The web is more than a <em>flat page</em>.
            </motion.h1>

            <div className="mx-auto mt-10 h-2.5 w-full max-w-md overflow-hidden rounded-full border border-white/15 bg-white/[0.06] shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)] backdrop-blur-sm">
              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-cyan via-accent to-violet shadow-[0_0_20px_rgba(79,139,255,0.75)]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              >
                {/* glossy top highlight */}
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-white/35" />
                {/* moving sheen */}
                <span className="absolute inset-0 animate-shimmer bg-[length:200%_100%] bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55),transparent_70%)]" />
              </motion.div>
            </div>
            <div className="mt-4 font-mono text-sm font-medium tracking-[0.25em] text-white/70">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
