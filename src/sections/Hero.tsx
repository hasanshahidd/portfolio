import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

// 3D canvas is lazy-loaded so first paint isn't blocked by Three.js.
const HeroScene = lazy(() => import('../three/HeroScene'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-24">
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0 -z-0" />
      {/* readability gradient */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-6"
      >
        <motion.span variants={item} className="eyebrow">
          {profile.location} · Open to remote & on-site
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.firstName}
          <br />
          <span className="gradient-text text-glow">Shahid</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-cyan/80 sm:text-base"
        >
          {profile.title}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5 hover:glow-cyan"
          >
            View my work
          </a>
          <a
            href={profile.booking}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-7 py-3 font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
          >
            Book a call
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  )
}
