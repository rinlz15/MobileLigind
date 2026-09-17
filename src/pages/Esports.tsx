import { Link } from 'react-router'
import mlbbLogo from '@/imports/62061920cdd94000043e3951.png'

const TOURNAMENTS = [
  {
    name: 'M6 World Championship',
    date: 'December 2024 · Jakarta, Indonesia',
    prize: '$800,000',
    teams: 16,
    status: 'Completed',
    statusColor: '#6b7280',
    winner: 'ECHO',
    region: '🇵🇭 Philippines',
    description: 'The sixth iteration of the most prestigious MLBB tournament. 16 teams from across the globe battled for the ultimate crown.',
  },
  {
    name: 'M7 World Championship',
    date: 'December 2025 · Kuala Lumpur, Malaysia',
    prize: '$1,000,000',
    teams: 16,
    status: 'Upcoming',
    statusColor: '#f0b429',
    winner: 'TBD',
    region: '🌏 Global',
    description: 'The grandest stage returns. 16 qualified teams compete for $1,000,000 and the title of World Champion.',
  },
  {
    name: 'MPL Season 15',
    date: 'Ongoing · Multiple Regions',
    prize: '$500,000+',
    teams: 48,
    status: 'Live',
    statusColor: '#e8242a',
    winner: 'Live Now',
    region: '🌐 All Regions',
    description: 'The Mobile Legends Professional League Season 15 is live across PH, ID, MY, SG, TH, VN, IN, and PK.',
  },
]

const REGIONS = [
  { name: 'Philippines', code: 'MPL-PH', flag: '🇵🇭', color: '#f0b429', champions: 'ECHO, Blacklist International' },
  { name: 'Indonesia', code: 'MPL-ID', flag: '🇮🇩', color: '#e8242a', champions: 'ONIC Esports, RRQ' },
  { name: 'Malaysia', code: 'MPL-MY', flag: '🇲🇾', color: '#00b4ff', champions: 'Team HAQ, Todak' },
  { name: 'Thailand', code: 'MPL-TH', flag: '🇹🇭', color: '#a78bfa', champions: 'Buriram United, RSG TH' },
  { name: 'Vietnam', code: 'MPL-VN', flag: '🇻🇳', color: '#34d399', champions: 'Team Secret, Saigon Phantom' },
  { name: 'Singapore', code: 'MPL-SG', flag: '🇸🇬', color: '#fb923c', champions: 'RSG SG, Team SMG' },
]

const STATS = [
  { value: '$5M+', label: 'Total Prize Money' },
  { value: '7', label: 'World Championships' },
  { value: '8', label: 'Regional Leagues' },
  { value: '500M+', label: 'Viewers Worldwide' },
]

export default function Esports() {
  return (
    <div className="min-h-screen bg-[#04070f] text-white">

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0614] via-[#070d1a] to-[#04070f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,36,42,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,180,41,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8242a]/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#e8242a]/30 rounded-full bg-[#e8242a]/5">
              <span className="w-2 h-2 rounded-full bg-[#e8242a] animate-pulse-glow" />
              <span className="font-display font-600 text-xs tracking-[0.2em] uppercase text-[#e8242a]">
                MPL Season 15 — Live Now
              </span>
            </div>
            <h1 className="font-display font-900 uppercase leading-none mb-6">
              <span className="block text-[clamp(3rem,8vw,7.5rem)] text-white tracking-tight">MLBB</span>
              <span className="block text-[clamp(3rem,8vw,7.5rem)] text-[#e8242a] tracking-tight -mt-2 lg:-mt-4"
                style={{ textShadow: '0 0 40px rgba(232,36,42,0.5)' }}>
                Esports
              </span>
            </h1>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              The official home of Mobile Legends: Bang Bang competitive play. World championships, regional leagues, and the best teams on the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#tournaments"
                className="btn-primary font-display font-800 text-sm tracking-widest uppercase px-8 py-4 rounded text-white text-center"
              >
                View Tournaments
              </a>
              <a
                href="#regions"
                className="font-display font-700 text-sm tracking-widest uppercase px-8 py-4 rounded border border-[#f0b429]/40 text-[#f0b429] hover:border-[#f0b429] hover:bg-[#f0b429]/5 transition-all duration-200 text-center"
              >
                Regional Leagues
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#e8242a]/10 bg-[#070d1a]/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] text-[#e8242a] leading-none"
                  style={{ textShadow: '0 0 20px rgba(232,36,42,0.4)' }}>
                  {s.value}
                </div>
                <div className="font-display font-600 text-xs tracking-widest uppercase text-gray-500 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#e8242a] mb-2">World Stage</div>
          <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
            M-Series <span className="text-[#f0b429]">Championships</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {TOURNAMENTS.map((t) => (
            <div key={t.name} className="feature-card card-dark rounded-xl p-6 lg:p-8 group cursor-pointer">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-display font-700 text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{ background: `${t.statusColor}18`, color: t.statusColor, border: `1px solid ${t.statusColor}40` }}
                    >
                      {t.status}
                    </span>
                    <span className="font-display text-xs text-gray-600 tracking-wider uppercase">{t.date}</span>
                  </div>
                  <h3 className="font-display font-900 text-2xl lg:text-3xl uppercase text-white tracking-wide mb-2 group-hover:text-[#f0b429] transition-colors duration-200">
                    {t.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xl">{t.description}</p>
                </div>

                {/* Right stats */}
                <div className="grid grid-cols-3 gap-6 lg:gap-8 lg:text-right shrink-0">
                  <div>
                    <div className="font-display font-900 text-2xl text-[#f0b429]">{t.prize}</div>
                    <div className="font-display font-600 text-[10px] tracking-widest uppercase text-gray-600 mt-1">Prize Pool</div>
                  </div>
                  <div>
                    <div className="font-display font-900 text-2xl text-white">{t.teams}</div>
                    <div className="font-display font-600 text-[10px] tracking-widest uppercase text-gray-600 mt-1">Teams</div>
                  </div>
                  <div>
                    <div className="font-display font-900 text-xl text-[#00b4ff]">{t.winner}</div>
                    <div className="font-display font-600 text-[10px] tracking-widest uppercase text-gray-600 mt-1">{t.status === 'Completed' ? 'Champion' : 'Region'}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGIONAL LEAGUES */}
      <section id="regions" className="py-24 bg-[#070d1a]/60 border-y border-[#00b4ff]/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-12 text-center">
            <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#00b4ff] mb-2">Mobile Legends Professional League</div>
            <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
              Regional <span className="text-[#f0b429]">Leagues</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((r) => (
              <div key={r.code} className="feature-card card-dark rounded-xl p-6 group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{r.flag}</span>
                  <div>
                    <div className="font-display font-900 text-lg uppercase text-white tracking-wide">{r.name}</div>
                    <div
                      className="font-display font-700 text-xs tracking-widest uppercase"
                      style={{ color: r.color }}
                    >
                      {r.code}
                    </div>
                  </div>
                </div>
                <div className="h-px w-full mb-4" style={{ background: `linear-gradient(90deg, ${r.color}40, transparent)` }} />
                <div className="font-display font-600 text-[10px] tracking-widest uppercase text-gray-600 mb-1">Notable Teams</div>
                <p className="text-gray-400 text-sm">{r.champions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#e8242a] mb-3">Join the Competition</div>
          <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-6">
            Ready to <span className="text-[#f0b429]">Compete?</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
            Download Mobile Legends and start climbing the ranks. The road to the World Championship begins with your first match.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex font-display font-800 text-sm tracking-widest uppercase px-10 py-4 rounded text-white"
          >
            Download & Play Free
          </Link>
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
