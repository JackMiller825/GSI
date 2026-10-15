import type { ReactNode } from 'react'
import { trackCta } from '../analytics/tracker.ts'
import { asset, configured, getSite } from '../config/site.ts'
import { navigation } from '../config/navigation.ts'

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M14.7 10.3 22.1 2h-1.8l-6.4 7.2L8.8 2H2.2l7.8 11L2 22h1.8l6.8-7.7L15.2 22h6.6l-7.1-11.7Zm-2.4 2.7-.8-1.1L4.6 3.5h2.7l5 7 .8 1.1 6.6 9.2h-2.7l-5.3-7.8Z"
      />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M21.8 4.2 18.6 20c-.2 1-1.4 1.4-2.2.8l-4.7-3.5-2.3 2.2c-.3.3-.7.4-1.1.3l.4-4.8 8.8-7.9c.4-.3-.1-.5-.6-.2L6.7 13.2 2.1 11.7c-1-.3-1-.9.2-1.4L20.4 3.2c.8-.3 1.6.2 1.4 1Z"
      />
    </svg>
  )
}

function SocialIcon({
  href,
  label,
  onTrack,
  children,
}: {
  href: string | null
  label: string
  onTrack?: () => void
  children: ReactNode
}) {
  if (!href) {
    return (
      <button type="button" className="social-link is-pending" aria-label={`${label}, coming soon`} aria-disabled="true">
        {children}
      </button>
    )
  }
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} onClick={() => onTrack?.()}>
      {children}
    </a>
  )
}

export function Footer() {
  const site = getSite()
  const telegram = configured(site.telegramUrl) ? site.telegramUrl : null
  const xUrl = configured(site.xUrl) ? site.xUrl : null

  return (
    <footer className="site-footer" id="footer">
      <div className="shell footer-bar">
        <a className="brand footer-brand" href="#home">
          <img src={asset('gsi-logo-transparent.png')} alt="" width="1024" height="1024" />
          <span>
            <strong>GROK SUPER INTELLIGENCE</strong>
            <small>THE SUPER BOT · $GSI</small>
          </span>
        </a>
        <nav className="footer-nav" aria-label="On this page">
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-social">
          <SocialIcon href={xUrl} label="X" onTrack={() => trackCta('x')}>
            <XIcon />
          </SocialIcon>
          <SocialIcon href={telegram} label="Telegram" onTrack={() => trackCta('telegram')}>
            <TelegramIcon />
          </SocialIcon>
        </div>
      </div>
    </footer>
  )
}
