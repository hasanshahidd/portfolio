import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading eyebrow="06 / Experience" title={<>Where I've <em>built</em> and led</>} />

      <div className="relative">
        {/* vertical line that draws itself as you scroll in */}
        <motion.div
          className="absolute left-0 top-2 h-full w-px origin-top bg-gradient-to-b from-cyan/70 via-violet/40 to-transparent md:left-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
        />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} x={i % 2 === 0 ? -30 : 30} y={20}>
              <div
                className={`group relative grid gap-4 md:grid-cols-2 ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'
                }`}
              >
                {/* pulsing node */}
                <span className="absolute left-0 top-2 z-10 -translate-x-[5px] md:left-1/2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan glow-cyan" />
                  </span>
                </span>

                <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <p className="font-mono text-xs text-cyan/80">{job.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold transition-colors group-hover:text-cyan">
                    {job.role}
                  </h3>
                  <p className="text-white/55">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ''}
                  </p>
                </div>

                <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:row-start-1'}`}>
                  <ul className="space-y-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm leading-relaxed text-white/60">
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-violet" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
