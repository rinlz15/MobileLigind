import { Link } from 'react-router'
import mlbbLogo from '@/imports/62061920cdd94000043e3951.png'

const MODES = [
  {
    id: 'classic',
    name: 'Classic Mode',
    tag: 'Casual',
    tagColor: '#00b4ff',
    icon: '⚔️',
    description:
      'The original 5v5 battle on the Land of Dawn. Destroy the enemy base with your team before they destroy yours. No rank on the line — just pure MOBA action.',
    details: ['5v5 Team Battle', '~15 min match', 'No rank impact', 'All heroes available'],
  },
  {
    id: 'ranked',
    name: 'Ranked Mode',
    tag: 'Competitive',
    tagColor: '#f0b429',
    icon: '🏆',
    description:
      'Put your rank on the line. Climb from Warrior to Mythical Glory across 18 seasons of fierce competition. Every match counts — one bad game can cost you stars.',
    details: ['5v5 Ranked Battle', 'Season rewards', 'Ban/pick phase', 'Stars & rank points'],
  },
  {
    id: 'brawl',
    name: 'Brawl Mode',
    tag: 'Action',
    tagColor: '#e8242a',
    icon: '💥',
    description:
      'One lane. Full chaos. Brawl pits both teams in an intense single-lane battle. Randomized hero selection keeps every match unpredictable and explosive.',
    details: ['1-lane map', '~8 min match', 'Random heroes', 'High action'],
  },
  {
    id: 'practice',
    name: 'Practice Mode',
    tag: 'Training',
    tagColor: '#34d399',
    icon: '🎯',
    description:
      'Master your mechanics in a pressure-free environment. Practice last-hits, skill combos, and item builds against AI opponents or training dummies at your own pace.',
    details: ['Solo training', 'AI opponents', 'Unlimited gold', 'No time limit'],
  },
  {
    id: 'custom',
    name: 'Custom Mode',
    tag: 'Social',
    tagColor: '#a78bfa',
    icon: '🎮',
    description:
      'Create your own lobby and invite friends or set up scrimmages. Configure map, teams, and rules. Perfect for clan practice, content creation, or casual fun with your squad.',
    details: ['Private lobby', 'Custom teams', 'Invite friends', 'Flexible rules'],
  },
  {
    id: 'arcade',
    name: 'Arcade Mode',
    tag: 'Limited',
    tagColor: '#fb923c',
    icon: '🎪',
    description:
      'Rotating limited-time game modes that reinvent the battlefield. From survival showdowns to mirror matches and special events — Arcade keeps the game fresh every patch.',
    details: ['Rotating modes', 'Limited time', 'Unique mechanics', 'Special rewards'],
  },
]

export default function Modes() {
  return (
    <div className="min-h-screen bg-[#04070f] text-white">
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a] to-[#04070f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,180,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b4ff]/30 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#00b4ff] mb-3">
            Battle Your Way
          </div>
          <h1 className="font-display font-900 uppercase leading-none mb-6">
            <span className="block text-[clamp(3rem,8vw,7rem)] text-white tracking-tight">Game</span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-[#f0b429] text-glow-gold tracking-tight -mt-2 lg:-mt-4">Modes</span>
          </h1>
          <p className="max-w-lg mx-auto text-gray-400 text-base lg:text-lg leading-relaxed">
            Six ways to play. One battlefield. Choose the mode that fits your mood and dominate the Land of Dawn.
          </p>
        </div>
      </section>

      {/* MODES GRID */}
      <section className="pb-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODES.map((mode) => (
            <div
              key={mode.id}
              className="feature-card card-dark rounded-xl p-8 flex flex-col gap-5 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="text-4xl">{mode.icon}</div>
                <span
                  className="font-display font-700 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${mode.tagColor}18`,
                    color: mode.tagColor,
                    border: `1px solid ${mode.tagColor}40`,
                  }}
                >
                  {mode.tag}
                </span>
              </div>

              {/* Title */}
              <div>
                <h2
                  className="font-display font-900 text-2xl uppercase tracking-wide mb-3 group-hover:transition-colors duration-200"
                  style={{ color: mode.tagColor }}
                >
                  {mode.name}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{mode.description}</p>
              </div>

              {/* Divider */}
              <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${mode.tagColor}30, transparent)` }} />

              {/* Details */}
              <ul className="grid grid-cols-2 gap-2">
                {mode.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-gray-500 font-display font-600 tracking-wide uppercase">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: mode.tagColor }} />
                    {d}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="mt-auto font-display font-800 text-xs tracking-widest uppercase px-5 py-2.5 rounded border transition-all duration-200 text-left"
                style={{
                  borderColor: `${mode.tagColor}40`,
                  color: mode.tagColor,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = `${mode.tagColor}12`
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = mode.tagColor
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${mode.tagColor}40`
                }}
              >
                Play {mode.name} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center">
              <img src={mlbbLogo} alt="Mobile Legends: Bang Bang" className="h-10 w-auto object-contain mix-blend-screen opacity-80" />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Support', 'Press Kit'].map((l) => (
                <a key={l} href="#" className="font-display text-xs tracking-widest uppercase text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
              ))}
            </div>
            <p className="font-display text-xs tracking-wider uppercase text-gray-700">© 2026 Moonton. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
