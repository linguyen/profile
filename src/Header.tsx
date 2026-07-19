import { useEffect, useState } from 'react'

const navItems = [
  { href: '#hero', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return false
  }

  const savedTheme = localStorage.getItem('theme')

  if (savedTheme) {
    return savedTheme === 'dark'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function Header() {
  const [isDark, setIsDark] = useState(getInitialTheme)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClassName = [
    'fixed inset-x-0 top-0 z-50 transition-all duration-300',
    isScrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a href="/" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-zinc-900 dark:text-white">care</span>&nbsp;
          <span className="text-accent">ai</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Work with me
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Hire me -&gt;
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
