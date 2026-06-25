import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: string
}

// Use <em> inside `title` for an italic gradient emphasis word (Thorvix style).
export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="section-title mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/55 leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
