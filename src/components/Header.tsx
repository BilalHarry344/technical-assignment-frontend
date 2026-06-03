import { useState } from 'react'
import { DESIGN_ASSETS } from '../assets/designAssets'
import { contactButtonClass } from '../constants/ui'

const NAV_LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#registration', label: 'Registration' },
  { href: '#careers', label: 'Careers' },
] as const

const navLinkClass =
  'block w-full px-4 py-3 text-[16px] text-ink-muted transition-colors duration-300 hover:bg-page hover:text-brand'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  const toggleMenu = () => setIsMenuOpen((open) => !open)

  return (
    <header className="relative py-6 sm:py-8 md:py-[60px]">
      <div className="flex items-center justify-between gap-4">
        <a
          aria-label="i2c homepage"
          className="inline-flex shrink-0 items-center"
          href="#main-content"
          onClick={closeMenu}
        >
          <img alt="i2c logo" className="h-10 w-auto sm:h-12" src={DESIGN_ASSETS.logo} />
        </a>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-line bg-white text-brand shadow-sm transition-colors duration-300 hover:border-brand md:hidden"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-[16px] text-ink-muted md:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="transition-colors duration-300 hover:text-brand" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className={`${contactButtonClass} inline-block`} href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <nav
        aria-hidden={!isMenuOpen}
        aria-label="Primary mobile"
        className={`grid overflow-hidden transition-[grid-template-rows,margin-top,opacity] duration-300 ease-out md:hidden ${
          isMenuOpen
            ? 'mt-4 grid-rows-[1fr] opacity-100'
            : 'pointer-events-none mt-0 grid-rows-[0fr] opacity-0'
        }`}
        id="mobile-nav"
      >
        <div
          className={`min-h-0 overflow-hidden transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-1'
          }`}
        >
          <ul className="overflow-hidden rounded-[10px] border border-line bg-white shadow-[0px_12px_24px_rgba(20,52,203,0.12)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <a className={navLinkClass} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-4">
              <a className={`${contactButtonClass} block w-full text-center`} href="#contact" onClick={closeMenu}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
