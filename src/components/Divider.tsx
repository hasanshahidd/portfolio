import { motion } from 'framer-motion'

// Organic, flowing section divider in the spirit of Liztek's animated dividers.
// A soft gradient wave with a gently drifting highlight stroke.
export default function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className="relative h-16 w-full overflow-hidden md:h-24"
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="divline" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1940b5" stopOpacity="0" />
            <stop offset="0.5" stopColor="#4f8bff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#7db1ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="divfill" x1="0" y1="0" x2="0" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f8bff" stopOpacity="0.10" />
            <stop offset="1" stopColor="#4f8bff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* soft filled swell */}
        <path
          d="M0 70 C 240 20, 480 110, 720 70 S 1200 20, 1440 70 L1440 120 L0 120 Z"
          fill="url(#divfill)"
        />

        {/* drifting highlight line */}
        <motion.path
          d="M0 70 C 240 20, 480 110, 720 70 S 1200 20, 1440 70"
          stroke="url(#divline)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
