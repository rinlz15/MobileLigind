import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import mlbbLogo from '@/imports/62061920cdd94000043e3951.png'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Modes', to: '/modes' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50" style={{ borderBottom: 'none' }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-[72px]">

        {/* Logo — left */}
        <Link to="/" className="flex flex-col justify-center shrink-0">
          <img
            src={mlbbLogo}
            alt="Mobile Legends: Bang Bang"
            className="h-14 w-auto object-contain mix-blend-screen"
          />
        </Link>

        {/* Links — center */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => {
            const active = location.pathname === l.to
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={`font-display text-sm tracking-widest uppercase transition-colors duration-200 ${
                    active ? 'text-[#00b4ff]' : 'text-gray-400 hover:text-[#00b4ff]'
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA — right */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="#" className="font-display text-sm tracking-wider uppercase text-gray-400 hover:text-white transition-colors" style={{ fontWeight: 600 }}>
            Log In
          </a>
          <Link
            to="/#download"
            className="btn-primary font-display text-sm tracking-widest uppercase px-6 py-2.5 rounded text-white"
            style={{ fontWeight: 700 }}
          >
            Download Free
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#00b4ff]/10 bg-[#04070f]/95 px-8 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-sm tracking-widest uppercase text-gray-400 hover:text-[#00b4ff]"
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/#download"
            className="btn-primary font-display text-sm tracking-widest uppercase px-6 py-3 rounded text-white text-center mt-1"
            style={{ fontWeight: 700 }}
          >
            Download Free
          </Link>
        </div>
      )}
    </nav>
  )
}
