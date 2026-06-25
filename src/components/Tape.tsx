type Props = {
  items: string[]
  reverse?: boolean
  muted?: boolean
}

// A single running tape (one row of the marquee band).
export default function Tape({ items, reverse, muted }: Props) {
  const row = [...items, ...items] // duplicated for a seamless loop
  return (
    <div className="marquee-mask overflow-hidden">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {row.map((item, i) => (
          <span
            key={i}
            className={`mx-7 inline-flex items-center gap-7 font-display text-xl font-semibold tracking-tight md:text-2xl ${
              muted ? 'text-white/70' : 'text-white'
            }`}
          >
            {item}
            <span className="text-cyan">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
