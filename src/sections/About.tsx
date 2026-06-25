import { lazy, Suspense } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import { about, education } from '../data/portfolio'

const ContactGlobe = lazy(() => import('../three/ContactGlobe'))

const highlights = [
  { value: 3, suffix: '+', label: 'Years experience' },
  { value: 10, suffix: 'M+', label: 'Rows analyzed' },
  { value: 6.7, prefix: '$', suffix: 'M+', label: 'Saved for clients' },
  { value: 40, suffix: '', label: 'Agent crews' },
]

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="02 / About"
        title={<>Engineering AI the enterprise can <em>trust</em></>}
      />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-5 md:col-span-3">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-white/65 md:text-lg">{p}</p>
            </Reveal>
          ))}

          {/* animated highlight tiles */}
          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.08}>
                <div className="rounded-xl border border-white/8 bg-panel/40 p-4 transition-colors hover:border-cyan/30">
                  <div className="font-display text-2xl font-bold md:text-3xl">
                    <Counter value={h.value} prefix={h.prefix} suffix={h.suffix} className="gradient-text" />
                  </div>
                  <p className="mt-1 text-xs text-white/50">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-6 md:col-span-2">
          {/* 3D globe */}
          <Reveal delay={0.05}>
            <div className="relative h-56 w-full">
              <Suspense fallback={null}>
                <ContactGlobe />
              </Suspense>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 transition-colors hover:border-cyan/30">
              <span className="eyebrow">Education</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-white/55">{education.school}</p>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-white/40">Relevant courses</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {education.courses.map((c) => (
                    <span key={c} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs uppercase tracking-widest text-white/40">Certifications</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {education.certifications.map((c) => (
                    <span key={c} className="rounded-full border border-cyan/30 px-3 py-1 text-xs text-cyan/90">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
