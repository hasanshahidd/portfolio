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
      p += Math.random() * 4 + 2
      if (p >= 100) {
        p = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 1100)
      }
      setProgress(Math.floor(p))
    }, 190)
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

            <div className="mx-auto mt-9 h-px w-full max-w-sm overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-violet"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            </div>
            <div className="mt-3 font-mono text-xs text-white/40">{progress}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
