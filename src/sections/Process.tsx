import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { process } from '../data/portfolio'

export default function Process() {
  return (
    <section id="process" className="section-pad">
      <SectionHeading
        eyebrow="03 / How I work"
        title={<>A clear path from idea to <em>production</em></>}
        subtitle="Every engagement follows the same simple rhythm, so you always know what comes next."
      />

      <div className="relative">
        {/* connector line that draws across the steps */}
        <motion.div
          className="absolute left-0 right-0 top-12 hidden h-px origin-left bg-gradient-to-r from-cyan/50 via-violet/40 to-transparent md:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <div className="grid gap-6 md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.12}>
              <div className="group relative h-full rounded-2xl border border-white/8 bg-panel/40 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/30">
                <div className="flex items-center justify-between">
                  <motion.span
                    className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-cyan/30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {p.step}
                  </motion.span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
