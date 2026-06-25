import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name} · Turning ambitious AI ideas into production systems.</p>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
