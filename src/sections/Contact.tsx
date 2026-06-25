import { lazy, Suspense } from 'react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { profile } from '../data/portfolio'

const GlassFlower = lazy(() => import('../three/GlassFlower'))

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-panel to-ink px-6 py-16 md:px-16 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet/15 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="07 / Contact"
              title={<>Let's build something <em>intelligent</em></>}
              subtitle="Open to remote engagements across EU, UK, US and AUS time zones, from enterprise GenAI builds to trial-based and agile delivery."
            />

            <Reveal>
              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5 hover:glow-cyan"
                >
                  Book a call
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full border border-white/15 px-7 py-3 font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  Email me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 font-mono text-sm text-white/45">
                {profile.location} · {profile.phone}
              </p>
            </Reveal>
          </div>

          {/* 3D glass flower */}
          <div className="relative h-72 w-full md:h-96">
            <Suspense fallback={null}>
              <GlassFlower />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
