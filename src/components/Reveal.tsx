import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  className?: string
}

// Fade + rise (or slide) + subtle scale into view on scroll.
export default function Reveal({ children, delay = 0, y = 28, x = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
