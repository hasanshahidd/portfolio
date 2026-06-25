import Tape from './Tape'
import { marqueeTech, marqueeDomains } from '../data/portfolio'

// Two stacked running tapes on different topics, scrolling in opposite directions.
export default function TechMarquee() {
  return (
    <div className="space-y-5 border-y border-white/10 bg-panel/70 py-8 backdrop-blur-sm">
      <Tape items={marqueeTech} />
      <Tape items={marqueeDomains} reverse muted />
    </div>
  )
}
