import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionHeading
        eyebrow="01 / What I do"
        title={<>How I help teams <em>ship AI</em></>}
        subtitle="I partner with companies to take GenAI from idea to a production system they can trust, own and scale."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-panel/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-panel">
              {/* glow on hover */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan/20">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/35">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
