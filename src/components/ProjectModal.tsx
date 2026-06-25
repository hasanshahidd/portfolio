import { lazy, Suspense, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/portfolio'

const ProjectScene = lazy(() => import('../three/ProjectScene'))

type Lenis = { stop: () => void; start: () => void }

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis
    lenis?.stop()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={onClose} />

          <motion.div
            data-lenis-prevent
            className="glass relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* domain-themed 3D header */}
            <div className="relative h-52 overflow-hidden border-b border-white/8 md:h-60">
              <div className="absolute inset-0 bg-gradient-to-b from-brand/25 via-transparent to-ink" />
              <div className="absolute inset-0">
                <Suspense fallback={null}>
                  <ProjectScene title={project.title} />
                </Suspense>
              </div>
              <span className="absolute left-6 top-5 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink/60 text-white/70 transition-colors hover:text-white"
            >
              ✕
            </button>

            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold md:text-3xl">{project.title}</h3>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">The challenge</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">Result</p>
                  <p className="mt-1 font-display text-lg font-semibold">
                    <span className="gradient-text">{project.metric}</span>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">What I built</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{project.blurb}</p>

              <p className="mt-5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/35">Approach</p>
              <ul className="mt-1.5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-white/60">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-cyan" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-white/55">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
