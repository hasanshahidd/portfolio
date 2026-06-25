import { motion, useScroll, useSpring } from 'framer-motion'

// Thin gradient bar at the very top that fills as you scroll the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-cyan via-accent to-violet"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
