import heroBg from '@/imports/Gemini_Generated_Image_tnpw87tnpw87tnpw.jpg'
import mlbbLogo from '@/imports/62061920cdd94000043e3951.png'
import laylaImg from '@/imports/image-4.png'
import tigrealImg from '@/imports/image-5.png'
import kaguraImg from '@/imports/image-6.png'
import hayabusaImg from '@/imports/image-7.png'

const HEROES = [
  { name: 'Layla', role: 'Marksman', img: laylaImg, color: '#00b4ff' },
  { name: 'Tigreal', role: 'Tank', img: tigrealImg, color: '#f0b429' },
  { name: 'Kagura', role: 'Mage', img: kaguraImg, color: '#a78bfa' },
  { name: 'Hayabusa', role: 'Assassin', img: hayabusaImg, color: '#e8242a', objectPosition: 'top' },
]

const FEATURES = [
  { icon: '⚔️', title: '5v5 Real-Time Battles', desc: 'Team up with allies and destroy the enemy base in fast-paced 10-minute matches.' },
  { icon: '🏆', title: 'Ranked Season', desc: 'Climb from Warrior to Mythical Glory. Prove your dominance on the global leaderboard.' },
  { icon: '🎭', title: '133 Unique Heroes', desc: 'Master tanks, assassins, mages, marksmen, fighters, and supports — 133 heroes across every lane.' },
  { icon: '⚡', title: 'Guilds & Clans', desc: 'Build your squad, climb guild wars together, and unlock exclusive clan rewards every season.' },
  { icon: '🎨', title: 'Epic Skins', desc: 'Thousands of legendary, epic, and special skins to express your unique style.' },
  { icon: '📱', title: 'Cross-Platform Play', desc: 'Play seamlessly on iOS and Android with optimized controls and ultra-smooth 60fps.' },
]

const STATS = [
  { value: '120M+', label: 'Players Worldwide' },
  { value: '133', label: 'Unique Heroes' },
  { value: '18', label: 'Ranked Seasons' },
  { value: '168', label: 'Countries Reached' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Hero warrior standing before a dark castle"
            className="w-full h-full object-cover object-left-top opacity-85"
          />
          <div className="hero-gradient absolute inset-0" />
          {/* Right-side fade so logo reads clearly on the right */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#04070f] via-[#04070f]/60 to-transparent" />
          {/* Subtle left-side fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#04070f]/40 via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/3 left-0 right-0 hero-line opacity-20" />

        {/* Two-column layout: left empty (warrior lives here), right = logo + text */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center min-h-[calc(100vh-72px)]">
          {/* Left half — intentionally empty so the warrior artwork shows */}
          <div className="flex-1 hidden lg:block" />

          {/* Right half — title block */}
          <div className="flex-1 flex flex-col items-end lg:items-end text-right">
            <img
              src={mlbbLogo}
              alt="Mobile Legends: Bang Bang"
              className="w-[min(360px,80vw)] object-contain mix-blend-screen mb-4"
            />
            <h1 className="font-display uppercase leading-none mb-5" style={{ fontWeight: 900 }}>
              <span className="block text-[clamp(2.8rem,6vw,6.5rem)] text-white tracking-tight">Mobile</span>
              <span
                className="block text-[clamp(2.8rem,6vw,6.5rem)] text-[#00b4ff] tracking-tight -mt-2 lg:-mt-3"
                style={{ textShadow: '0 0 30px rgba(0,180,255,0.6)' }}
              >
                Legends
              </span>
              <span
                className="block text-[clamp(1.2rem,3vw,2.8rem)] text-[#f0b429] tracking-[0.25em] mt-1"
                style={{ textShadow: '0 0 20px rgba(240,180,41,0.5)' }}
              >
                Bang Bang
              </span>
            </h1>
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-sm mb-8">
              5v5 MOBA battles. 133 heroes. Millions of players. Rise through the ranks and become a legend.
            </p>
            <a
              href="#download"
              className="btn-primary font-display text-base tracking-widest uppercase px-10 py-4 rounded text-white"
              style={{ fontWeight: 800 }}
            >
              Play Free Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-[#00b4ff]/10 bg-[#070d1a]/60">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-900 text-[clamp(2rem,5vw,3.5rem)] text-[#00b4ff] text-glow-blue leading-none">{s.value}</div>
                <div className="font-display font-600 text-xs tracking-widest uppercase text-gray-500 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEROES */}
      <section id="heroes" className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#00b4ff] mb-2">Choose Your Fighter</div>
          <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
            Featured <span className="text-[#f0b429]">Heroes</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {HEROES.map((hero) => (
            <div key={hero.name} className="feature-card card-dark rounded-lg overflow-hidden cursor-pointer group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0c1628]">
                <img
                  src={hero.img}
                  alt={hero.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  style={{ objectPosition: (hero as any).objectPosition ?? 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04070f] via-transparent to-transparent" />
                <div
                  className="absolute top-3 right-3 font-display font-700 text-[10px] tracking-widest uppercase px-2 py-1 rounded"
                  style={{ background: `${hero.color}22`, color: hero.color, border: `1px solid ${hero.color}44` }}
                >
                  {hero.role}
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="font-display font-800 text-xl uppercase text-white tracking-wide">{hero.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="modes" className="py-24 bg-[#070d1a]/60 border-y border-[#00b4ff]/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#00b4ff] mb-2">Why Millions Play</div>
            <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white">
              Built for <span className="text-[#f0b429]">Champions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature-card card-dark rounded-lg p-6 lg:p-8">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display font-800 text-xl uppercase tracking-wide text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-24 border-t border-[#00b4ff]/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="font-display font-600 text-xs tracking-[0.3em] uppercase text-[#00b4ff] mb-2">Free to Play</div>
          <h2 className="font-display font-900 uppercase text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-4">
            Join the <span className="text-[#f0b429]">Battle</span>
          </h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-10">
            Download now on iOS and Android. No PC required. Play anywhere, anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary font-display font-800 text-sm tracking-widest uppercase px-8 py-4 rounded text-white flex items-center gap-3 w-full sm:w-auto justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </a>
            <a href="#" className="btn-primary font-display font-800 text-sm tracking-widest uppercase px-8 py-4 rounded text-white flex items-center gap-3 w-full sm:w-auto justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.18 23.76c.3.17.64.22.97.14l12.08-6.98-2.56-2.56L3.18 23.76zM20.9 10.52l-2.87-1.66-2.87 1.66-2.87-1.66L20.9 10.52zm0 2.96l-2.87 1.66L15.16 13.48l2.87-1.66 2.87 1.66zm-9.58 5.54l2.56 2.56 2.87-1.66-5.43-3.13v2.23zM3 3.34v17.32c0 .38.2.71.5.9l10.57-9.14L3 3.34zm1.15-.68l12.08 6.98-2.56 2.56L4.15 3.34c-.33-.08-.67-.03-.97.14z"/></svg>
              Google Play
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-6 font-display tracking-widest uppercase">Available on iOS 11+ and Android 4.0.3+</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <img src={mlbbLogo} alt="Mobile Legends: Bang Bang" className="h-10 w-auto object-contain mix-blend-screen opacity-80" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Support', 'Press Kit'].map((l) => (
                <a key={l} href="#" className="font-display text-xs tracking-widest uppercase text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
              ))}
            </div>
            <p className="font-display text-xs tracking-wider uppercase text-gray-700">© 2026 Moonton. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
