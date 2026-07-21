import { Link, NavLink } from 'react-router-dom'
import BlockMark from './BlockMark'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' }
]

export default function Navbar({ onOpenSettings }) {
  return (
    <header className="sticky top-0 z-40 bg-nest-bg/90 backdrop-blur border-b border-nest">
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <BlockMark size={30} className="transition-transform duration-300 ease-soft group-hover:-translate-y-0.5" />
          <span className="font-display text-2xl tracking-tight text-nest-teal">BlockNest</span>
        </Link>

        <div className="hidden sm:flex items-center gap-8 font-body text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? 'text-nest-teal font-medium' : 'text-nest-ink/70 hover:text-nest-teal'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenSettings}
          aria-label="Open settings"
          className="w-10 h-10 rounded-full border border-nest flex items-center justify-center text-nest-teal hover:bg-nest-teal hover:text-nest-bg transition-colors duration-200 ease-soft"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.65a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.56Z" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
