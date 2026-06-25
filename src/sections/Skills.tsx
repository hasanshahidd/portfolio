import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import SkillsConstellation from '../components/SkillsConstellation'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="04 / Capabilities"
        title={<>A full GenAI &amp; data <em>toolchain</em></>}
        subtitle="From multi-agent orchestration and RAG down to the ETL, cloud and safety layers that make AI production-ready."
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* left: sophisticated skills list */}
        <div className="divide-y divide-white/8">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="group flex items-start gap-4 py-4">
                <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-cyan/20 bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon name={group.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white/90 transition-colors group-hover:text-cyan">
                    {group.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-white/45">
                    {group.tags.join('  ·  ')}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* right: floating 3D constellation */}
        <Reveal delay={0.1}>
          <SkillsConstellation />
        </Reveal>
      </div>
    </section>
  )
}
