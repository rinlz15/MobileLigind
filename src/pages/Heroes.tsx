import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router'
import mlbbLogo from '@/imports/62061920cdd94000043e3951.png'
import laylaImg from '@/imports/image-4.png'
import tigrealImg from '@/imports/image-5.png'
import kaguraImg from '@/imports/image-6.png'
import hayabusaImg from '@/imports/image-7.png'

const ROLE_COLORS: Record<string, string> = {
  Tank: '#00b4ff',
  Fighter: '#f0b429',
  Assassin: '#e8242a',
  Mage: '#a78bfa',
  Marksman: '#34d399',
  Support: '#fb923c',
}

type Hero = {
  name: string
  role: string
  img?: string
  objectPosition?: string
}

// 127 confirmed MLBB heroes — swap img: undefined with a real portrait import to display it
const ALL_HEROES: Hero[] = [
  // ── Tanks (22) ──────────────────────────────────────────────────────────────
  { name: 'Tigreal',    role: 'Tank',      img: tigrealImg },
  { name: 'Akai',       role: 'Tank' },
  { name: 'Franco',     role: 'Tank' },
  { name: 'Minotaur',   role: 'Tank' },
  { name: 'Lolita',     role: 'Tank' },
  { name: 'Johnson',    role: 'Tank' },
  { name: 'Grock',      role: 'Tank' },
  { name: 'Uranus',     role: 'Tank' },
  { name: 'Hylos',      role: 'Tank' },
  { name: 'Khufra',     role: 'Tank' },
  { name: 'Esmeralda',  role: 'Tank' },
  { name: 'Baxia',      role: 'Tank' },
  { name: 'Atlas',      role: 'Tank' },
  { name: 'Barats',     role: 'Tank' },
  { name: 'Edith',      role: 'Tank' },
  { name: 'Fredrinn',   role: 'Tank' },
  { name: 'Chip',       role: 'Tank' },
  { name: 'Gatotkaca',  role: 'Tank' },
  { name: 'Belerick',   role: 'Tank' },
  { name: 'Carmilla',   role: 'Tank' },
  { name: 'Gloo',       role: 'Tank' },
  { name: 'Kalea',      role: 'Tank' },

  // ── Fighters (34) ───────────────────────────────────────────────────────────
  { name: 'Balmond',    role: 'Fighter' },
  { name: 'Freya',      role: 'Fighter' },
  { name: 'Chou',       role: 'Fighter' },
  { name: 'Sun',        role: 'Fighter' },
  { name: 'Alpha',      role: 'Fighter' },
  { name: 'Ruby',       role: 'Fighter' },
  { name: 'Roger',      role: 'Fighter' },
  { name: 'Guinevere',  role: 'Fighter' },
  { name: 'Thamuz',     role: 'Fighter' },
  { name: 'Badang',     role: 'Fighter' },
  { name: 'Khaleed',    role: 'Fighter' },
  { name: 'Paquito',    role: 'Fighter' },
  { name: 'Phoveus',    role: 'Fighter' },
  { name: 'Aulus',      role: 'Fighter' },
  { name: 'Terizla',    role: 'Fighter' },
  { name: 'Dyrroth',    role: 'Fighter' },
  { name: 'Masha',      role: 'Fighter' },
  { name: 'X.Borg',     role: 'Fighter' },
  { name: 'Yu Zhong',   role: 'Fighter' },
  { name: 'Silvanna',   role: 'Fighter' },
  { name: 'Aldous',     role: 'Fighter' },
  { name: 'Lapu-Lapu',  role: 'Fighter' },
  { name: 'Jawhead',    role: 'Fighter' },
  { name: 'Martis',     role: 'Fighter' },
  { name: 'Leomord',    role: 'Fighter' },
  { name: 'Zilong',     role: 'Fighter' },
  { name: 'Kaja',       role: 'Fighter' },
  { name: 'Bane',       role: 'Fighter' },
  { name: 'Yin',        role: 'Fighter' },
  { name: 'Hilda',      role: 'Fighter' },
  { name: 'Julian',     role: 'Fighter' },
  { name: 'Cici',       role: 'Fighter' },
  { name: 'Lukas',      role: 'Fighter' },
  { name: 'Argus',      role: 'Fighter' },

  // ── Assassins (21) ──────────────────────────────────────────────────────────
  { name: 'Hayabusa',   role: 'Assassin', img: hayabusaImg, objectPosition: 'top' },
  { name: 'Saber',      role: 'Assassin' },
  { name: 'Alucard',    role: 'Assassin' },
  { name: 'Natalia',    role: 'Assassin' },
  { name: 'Karina',     role: 'Assassin' },
  { name: 'Lancelot',   role: 'Assassin' },
  { name: 'Helcurt',    role: 'Assassin' },
  { name: 'Hanzo',      role: 'Assassin' },
  { name: 'Selena',     role: 'Assassin' },
  { name: 'Ling',       role: 'Assassin' },
  { name: 'Benedetta',  role: 'Assassin' },
  { name: 'Yi Sun-shin',role: 'Assassin' },
  { name: 'Gusion',     role: 'Assassin' },
  { name: 'Fanny',      role: 'Assassin' },
  { name: 'Joy',        role: 'Assassin' },
  { name: 'Nolan',      role: 'Assassin' },
  { name: 'Aamon',      role: 'Assassin' },
  { name: 'Suyou',      role: 'Assassin' },
  { name: 'Kadita',     role: 'Assassin' },
  { name: 'Harley',     role: 'Assassin' },
  { name: 'Arlott',     role: 'Assassin' },

  // ── Mages (28) ──────────────────────────────────────────────────────────────
  { name: 'Kagura',     role: 'Mage', img: kaguraImg },
  { name: 'Nana',       role: 'Mage' },
  { name: 'Alice',      role: 'Mage' },
  { name: 'Eudora',     role: 'Mage' },
  { name: 'Aurora',     role: 'Mage' },
  { name: 'Vexana',     role: 'Mage' },
  { name: 'Odette',     role: 'Mage' },
  { name: 'Zhask',      role: 'Mage' },
  { name: 'Cyclops',    role: 'Mage' },
  { name: 'Gord',       role: 'Mage' },
  { name: 'Vale',       role: 'Mage' },
  { name: 'Lylia',      role: 'Mage' },
  { name: 'Cecilion',   role: 'Mage' },
  { name: "Chang'e",    role: 'Mage' },
  { name: 'Yve',        role: 'Mage' },
  { name: 'Valentina',  role: 'Mage' },
  { name: 'Pharsa',     role: 'Mage' },
  { name: 'Luo Yi',     role: 'Mage' },
  { name: 'Xavier',     role: 'Mage' },
  { name: 'Novaria',    role: 'Mage' },
  { name: 'Lunox',      role: 'Mage' },
  { name: 'Diggie',     role: 'Mage' },
  { name: 'Kimmy',      role: 'Mage' },
  { name: 'Faramis',    role: 'Mage' },
  { name: 'Zhuxin',     role: 'Mage' },
  { name: 'Mathilda',   role: 'Mage' },
  { name: 'Valir',      role: 'Mage' },
  { name: 'Harith',     role: 'Mage' },

  // ── Marksmen (18) ───────────────────────────────────────────────────────────
  { name: 'Layla',         role: 'Marksman', img: laylaImg },
  { name: 'Miya',          role: 'Marksman' },
  { name: 'Bruno',         role: 'Marksman' },
  { name: 'Clint',         role: 'Marksman' },
  { name: 'Moskov',        role: 'Marksman' },
  { name: 'Irithel',       role: 'Marksman' },
  { name: 'Karrie',        role: 'Marksman' },
  { name: 'Lesley',        role: 'Marksman' },
  { name: 'Hanabi',        role: 'Marksman' },
  { name: 'Claude',        role: 'Marksman' },
  { name: 'Granger',       role: 'Marksman' },
  { name: 'Wanwan',        role: 'Marksman' },
  { name: 'Brody',         role: 'Marksman' },
  { name: 'Beatrix',       role: 'Marksman' },
  { name: 'Melissa',       role: 'Marksman' },
  { name: 'Natan',         role: 'Marksman' },
  { name: 'Popol and Kupa',role: 'Marksman' },
  { name: 'Ixia',          role: 'Marksman' },

  // ── Support (4) ─────────────────────────────────────────────────────────────
  { name: 'Rafaela', role: 'Support' },
  { name: 'Estes',   role: 'Support' },
  { name: 'Angela',  role: 'Support' },
  { name: 'Floryn',  role: 'Support' },
]

const ROLES = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support']
const PAGE_SIZE = 30

// Generic hero silhouette shown when no portrait is set
function HeroSilhouette({ role }: { role: string }) {
  const color = ROLE_COLORS[role] ?? '#00b4ff'
  return (
    <div
      className="w-full h-full flex items-end justify-center"
      style={{
        background: `linear-gradient(180deg, #0c1a2e 0%, #07101e 60%, #04070f 100%)`,
      }}
    >
      {/* Subtle radial glow behind silhouette */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 50% 40%, ${color}18 0%, transparent 65%)` }}
      />
      {/* Person silhouette SVG — full-height, centered */}
      <svg
        viewBox="0 0 100 140"
        className="relative w-3/4 h-auto opacity-30"
        style={{ marginBottom: '-2px' }}
        aria-hidden
      >
        {/* head */}
        <ellipse cx="50" cy="28" rx="14" ry="16" fill={color} />
        {/* neck */}
        <rect x="44" y="42" width="12" height="8" rx="4" fill={color} />
        {/* torso */}
        <path d="M20 50 Q28 46 50 46 Q72 46 80 50 L76 100 Q64 106 50 106 Q36 106 24 100 Z" fill={color} />
        {/* left arm */}
        <path d="M20 50 Q10 60 8 90 Q12 94 18 90 Q22 68 28 56 Z" fill={color} />
        {/* right arm */}
        <path d="M80 50 Q90 60 92 90 Q88 94 82 90 Q78 68 72 56 Z" fill={color} />
        {/* left leg */}
        <path d="M24 100 Q22 118 20 138 Q30 140 34 138 Q36 120 38 106 Z" fill={color} />
        {/* right leg */}
        <path d="M76 100 Q78 118 80 138 Q70 140 66 138 Q64 120 62 106 Z" fill={color} />
      </svg>

      {/* Upload hint overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ background: 'rgba(4,7,15,0.6)' }}>
        <svg viewBox="0 0 24 24" className="w-8 h-8 mb-1" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <span className="font-display font-700 text-[10px] tracking-widest uppercase" style={{ color }}>
          Upload Portrait
        </span>
      </div>
    </div>
  )
}

export default function Heroes() {
  const [search, setSearch] = useState('')
  const [activeRole, setActiveRole] = useState('All')
  const [page, setPage] = useState(1)
  const [customImages, setCustomImages] = useState<Record<string, string>>({})
  const [editingHero, setEditingHero] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(() => {
    let list = ALL_HEROES
    if (activeRole !== 'All') list = list.filter(h => h.role === activeRole)
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(h => h.name.toLowerCase().includes(q))
    }
    return list
  }, [search, activeRole])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function handleRoleChange(role: string) {
    setActiveRole(role)
    setPage(1)
  }
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setPage(1)
  }
  function openUpload(heroName: string) {
    setEditingHero(heroName)
    fileInputRef.current?.click()
  }
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file || !editingHero) return
    const url = URL.createObjectURL(file)
    setCustomImages(prev => ({ ...prev, [editingHero]: url }))
    e.target.value = ''
  }

  return (
    <div className="min-h-screen bg-[#04070f] text-white">
      {/* Hidden shared file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* PAGE HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a] to-[#04070f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240,180,41,0.07)_0%,transparent_65%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0b429]/30 to-transparent" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#f0b429] mb-2">
            Land of Dawn
          </div>
          <h1 className="font-display font-900 uppercase leading-none mb-4">
            <span className="block text-[clamp(3rem,8vw,7rem)] text-white tracking-tight">All</span>
            <span className="block text-[clamp(3rem,8vw,7rem)] text-[#f0b429] tracking-tight -mt-2 lg:-mt-4"
              style={{ textShadow: '0 0 40px rgba(240,180,41,0.35)' }}>
              Heroes
            </span>
          </h1>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            {ALL_HEROES.length} heroes across 6 roles. Search, filter, and find your champion.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-40 border-y border-[#00b4ff]/10 bg-[#04070f]/90 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search heroes…"
              value={search}
              onChange={handleSearch}
              className="w-full bg-[#0c1628] border border-[#00b4ff]/15 rounded pl-9 pr-4 py-2 text-sm text-white placeholder-gray-600 font-display tracking-wide focus:outline-none focus:border-[#00b4ff]/40 transition-colors"
            />
          </div>

          {/* Role filters */}
          <div className="flex flex-wrap items-center gap-2">
            {ROLES.map((role) => {
              const color = role === 'All' ? '#00b4ff' : ROLE_COLORS[role]
              const active = activeRole === role
              return (
                <button
                  key={role}
                  onClick={() => handleRoleChange(role)}
                  className="font-display font-700 text-[11px] tracking-widest uppercase px-3 py-1.5 rounded transition-all duration-150"
                  style={{
                    background: active ? `${color}25` : 'transparent',
                    color: active ? color : '#6b7280',
                    border: `1px solid ${active ? color : '#ffffff18'}`,
                  }}
                >
                  {role}
                </button>
              )
            })}
          </div>

          {/* Count */}
          <div className="ml-auto font-display text-xs tracking-wider text-gray-600 whitespace-nowrap hidden sm:block">
            {filtered.length} hero{filtered.length !== 1 ? 'es' : ''}
          </div>
        </div>
      </section>

      {/* HERO GRID */}
      <section className="py-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {paged.length === 0 ? (
          <div className="text-center py-24">
            <div className="font-display font-900 text-2xl uppercase text-gray-700 mb-2">No Heroes Found</div>
            <p className="text-gray-600 text-sm">Try a different name or role.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
            {paged.map((hero) => {
              const color = ROLE_COLORS[hero.role] ?? '#00b4ff'
              const displayImg = customImages[hero.name] ?? hero.img
              return (
                <div
                  key={hero.name}
                  className="feature-card card-dark rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openUpload(hero.name)}
                  title={`Click to upload portrait for ${hero.name}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0c1628]">
                    {displayImg ? (
                      <>
                        <img
                          src={displayImg}
                          alt={hero.name}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          style={{ objectPosition: hero.objectPosition ?? 'center' }}
                        />
                        {/* Upload hint on hover for cards that already have images */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ background: 'rgba(4,7,15,0.5)' }}>
                          <svg viewBox="0 0 24 24" className="w-7 h-7 mb-1" fill="none" stroke={color} strokeWidth="1.5">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                          </svg>
                          <span className="font-display font-700 text-[9px] tracking-widest uppercase" style={{ color }}>
                            Replace
                          </span>
                        </div>
                      </>
                    ) : (
                      <HeroSilhouette role={hero.role} />
                    )}

                    {/* Role badge */}
                    <div
                      className="absolute top-2 right-2 font-display font-700 text-[9px] tracking-widest uppercase px-1.5 py-0.5 rounded"
                      style={{ background: `${color}30`, color, border: `1px solid ${color}55` }}
                    >
                      {hero.role}
                    </div>

                    {/* Name label — solid dark strip, full opacity, no blur */}
                    <div className="absolute bottom-0 left-0 right-0 px-2 py-2"
                      style={{ background: 'linear-gradient(to top, rgba(4,7,15,0.95) 0%, rgba(4,7,15,0.7) 70%, transparent 100%)' }}>
                      <div
                        className="font-display uppercase tracking-wide leading-tight"
                        style={{
                          fontSize: 'clamp(10px, 1.1vw, 13px)',
                          fontWeight: 800,
                          color: '#ffffff',
                          textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {hero.name}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="font-display font-700 text-sm tracking-widest uppercase px-5 py-2 rounded border border-[#00b4ff]/20 text-gray-400 hover:text-white hover:border-[#00b4ff]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              ← Prev
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className="w-9 h-9 rounded font-display font-700 text-sm transition-all duration-150"
                  style={{
                    background: page === n ? 'rgba(0,180,255,0.2)' : 'transparent',
                    color: page === n ? '#00b4ff' : '#6b7280',
                    border: `1px solid ${page === n ? '#00b4ff60' : '#ffffff18'}`,
                  }}
                >
                  {n}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="font-display font-700 text-sm tracking-widest uppercase px-5 py-2 rounded border border-[#00b4ff]/20 text-gray-400 hover:text-white hover:border-[#00b4ff]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Next →
            </button>
          </div>
        )}

        <p className="text-center text-gray-700 text-xs font-display tracking-wider uppercase mt-6">
          Page {page} of {totalPages} · Showing {paged.length} of {filtered.length} heroes
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 mt-8">
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
