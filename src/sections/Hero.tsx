import { trackCta } from '../analytics/tracker.ts'
import { MascotFrame } from '../components/MascotFrame.tsx'
import { getSite } from '../config/site.ts'

export function Hero() {
  const site = getSite()
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            INTERNET CULTURE, HERO MODE
          </p>
          <h1 id="hero-heading">
            <span>Grok Super</span>
            <span className="accent">Intelligence</span>
          </h1>
          <p className="ticker-badge">{site.ticker}</p>
          <p className="hook">One bot. One cape. Maximum main-character energy.</p>
          <p className="support">
            A superhero-inspired meme community, rallying around the internet’s favorite mission: make the timeline more fun.
          </p>
          <div className="hero-actions">
            <a className="action action-cyan" href="#how-to-buy" onClick={() => trackCta('buy')}>
              ✦ EXPLORE HOW TO BUY
            </a>
            <a className="action action-red" href="#community">
              JOIN THE SQUAD ↗
            </a>
            <a className="action action-ghost" href="#tokenomics" onClick={() => trackCta('chart')}>
              VIEW TOKEN FACTS
            </a>
          </div>
          <ul className="identity">
            <li>
              <span>NAME</span> {site.name}
            </li>
            <li>
              <span>TICKER</span> {site.ticker}
            </li>
            <li>
              <span>FACTS</span> Coming soon
            </li>
          </ul>
        </div>
        <MascotFrame
          variant="hero"
          priority
          badge="SIGNAL LOCKED · GSI"
          label="06 / SUPER BOT — HERO MODE"
          alt="Super Bot 06, a silver robot in a cobalt superhero suit and red cape, flying through a starfield."
        />
      </div>
    </section>
  )
}
