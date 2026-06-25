import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navItems, profile } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          {profile.firstName}
          <span className="gradient-text">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="navlink text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Résumé
          </a>
          <a
            href={profile.booking}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan to-violet px-5 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:glow-cyan"
          >
            Book a call
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/70"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="glass mt-3 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-white/70 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="block py-2 text-white/70 hover:text-white">
                Résumé →
              </a>
            </li>
            <li>
              <a href={profile.booking} target="_blank" rel="noreferrer" className="block py-2 text-cyan">
                Book a call →
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
