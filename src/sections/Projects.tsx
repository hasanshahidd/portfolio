import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ProjectModal from '../components/ProjectModal'
import { projects, type Project } from '../data/portfolio'

// Projects grouped by discipline: AI, SaaS, Data Science, Data Analytics.
const GROUPS = [
  {
    label: 'AI',
    titles: [
      'Agentic Procurement Intelligence Platform',
      'Enterprise GRC & Compliance Intelligence',
      'RAG Compliance Intelligence Platform',
      'Kavak Travel Assistant',
      'FinSight Personal Finance Assistant',
      'Voice AI Patient Registration System',
      'OMANI Therapist Voice',
      'Real-Time Facial Emotion Detection',
    ],
  },
  { label: 'SaaS', titles: ['Multi-Tenant Management System'] },
  {
    label: 'Data Science',
    titles: ['Healthcare Readmission Risk Prediction', 'Ace Predictor: Tennis Match Prediction'],
  },
  {
    label: 'Data Analytics',
    titles: ['Pandemic Pulse: COVID-19 Intelligence', 'NYC Taxi Intelligence', 'GlobalMart Sales Analysis'],
  },
]
const byTitle: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.title, p]))

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 18 })

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
    <Reveal delay={(index % 3) * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onClick={() => onOpen(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onOpen(project)
          }
        }}
        role="button"
        tabIndex={0}
        title="Click to view case study"
        aria-label={`View case study: ${project.title}`}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/8 bg-panel/70 p-7 transition-colors hover:border-violet/40"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet/20 opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-sm text-cyan/70">{String(index + 1).padStart(2, '0')}</span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan/80 transition-colors duration-300 group-hover:text-cyan">
              Click to view
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </div>

          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet">{project.category}</span>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug">{project.title}</h3>

          <p className="mt-3 text-sm leading-relaxed text-white/55">{project.problem}</p>

          <p className="mt-4 font-display text-base font-semibold">
            <span className="gradient-text">{project.metric}</span>
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((t) => (
              <span key={t} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-white/55">
                {t}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </Reveal>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="work" className="section-pad">
      <SectionHeading
        eyebrow="05 / Case Studies"
        title={<>Systems in production, with <em>measurable</em> impact</>}
        subtitle="Real-world projects spanning compliance, procurement, voice AI, fintech, travel and analytics. Click any card for the full case study."
      />

      {(() => {
        let n = 0
        return GROUPS.map((g) => (
          <div key={g.label} className="mb-16 last:mb-0">
            <Reveal>
              <div className="mb-7 flex items-center gap-4">
                <h3 className="font-display text-lg font-semibold text-white/85">{g.label}</h3>
                <span className="font-mono text-xs text-white/35">
                  {g.titles.length} {g.titles.length === 1 ? 'project' : 'projects'}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.titles.map((t) => {
                const p = byTitle[t]
                const idx = n++
                return p ? <ProjectCard key={t} project={p} index={idx} onOpen={setSelected} /> : null
              })}
            </div>
          </div>
        ))
      })()}

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
