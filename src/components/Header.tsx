import { useEffect, useId, useRef, useState } from 'react'
import { asset } from '../config/site.ts'
import { navigation } from '../config/navigation.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon">
        <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="menu-icon">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  const close = () => {
    setOpen(false)
    window.requestAnimationFrame(() => toggleRef.current?.focus())
  }

  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const items = () => [...(panel?.querySelectorAll<HTMLElement>('a, button') ?? [])]
    items()[0]?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = items()
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <a className="brand" href="#home">
          <img src={asset('gsi-logo-transparent.png')} alt="" width="1024" height="1024" />
          <span>
            <strong>GROK SUPER INTELLIGENCE</strong>
            <small>THE SUPER BOT · $GSI</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Sections">
          {navigation.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#community">
          JOIN THE SQUAD ↗
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => (open ? close() : setOpen(true))}
        >
          <MenuIcon open={open} />
        </button>
        {open ? (
          <div
            ref={panelRef}
            id="mobile-menu"
            className="mobile-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <p id={titleId} className="sr-only">
              Section menu
            </p>
            <nav aria-label="Sections">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="header-cta menu-cta" href="#community" onClick={close}>
              JOIN THE SQUAD ↗
            </a>
          </div>
        ) : null}
      </div>
    </header>
  )
}
