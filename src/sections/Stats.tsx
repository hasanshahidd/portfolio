import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats, type Stat } from '../data/portfolio'

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const decimals = stat.value % 1 !== 0
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setVal(decimals ? +(stat.value * eased).toFixed(1) : Math.round(stat.value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, stat.value])

  return (
    <div ref={ref} className="w-28 text-center sm:w-32">
      <div className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        <span className="gradient-text">
          {stat.prefix}
          {val}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-2 text-sm text-white/50">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="border-y border-white/8 bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-center gap-x-10 gap-y-10 px-6 py-14 md:gap-x-16">
        {stats.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  )
}
