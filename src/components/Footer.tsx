import { trackCta } from '../analytics/tracker.ts'
import { asset, configured, factsReady, getSite } from '../config/site.ts'
import { navigation } from '../config/navigation.ts'
import { CopyAddress } from './CopyAddress.tsx'

const communityYear = new Date().getFullYear()

export function Footer() {
  const site = getSite()
  const telegram = configured(site.telegramUrl) ? site.telegramUrl : null
  const xUrl = configured(site.xUrl) ? site.xUrl : null

  return (
    <footer className="site-footer" id="footer">
      <div className="shell footer-grid">
        <div>
          <a className="brand footer-brand" href="#home">
            <img src={asset('gsi-logo-transparent.png')} alt="" width="1024" height="1024" />
            <span>
              <strong>GROK SUPER INTELLIGENCE</strong>
              <small>THE SUPER BOT · $GSI</small>
            </span>
          </a>
          <p className="footer-lead">A superhero-flavored meme community. The cape is fictional. The internet is real.</p>
          <CopyAddress address={configured(site.contractAddress) ? site.contractAddress : null} />
        </div>
        <nav aria-label="On this page">
          <h2>ON THIS PAGE</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>THE SIGNAL</h2>
          <ul>
            <li>
              {telegram ? (
                <a href={telegram} target="_blank" rel="noopener noreferrer" onClick={() => trackCta('telegram')}>
                  Telegram ↗
                </a>
              ) : (
                <span>Telegram · [OFFICIAL_SOCIAL_LINKS]</span>
              )}
            </li>
            <li>
              {xUrl ? (
                <a href={xUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackCta('x')}>
                  X ↗
                </a>
              ) : (
                <span>X · [OFFICIAL_SOCIAL_LINKS]</span>
              )}
            </li>
            <li>
              <a href="#tokenomics">Token facts{factsReady(site) ? '' : ' · [TOKENOMICS]'}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell footer-notes">
        <p>Memes only. Not financial advice. Verify every token detail independently.</p>
        <p>
          GSI is an independent community meme project and is not affiliated with, endorsed by, or sponsored by xAI or the
          Grok product.
        </p>
        <p>
          Estimated visitor counts use a first-party cookie while a tab is visible. If this host supplies an IP address, it
          is encrypted and deleted after 30 days. Do Not Track and Global Privacy Control requests are not stored.
        </p>
        <p className="copyright">© {communityYear} GSI COMMUNITY</p>
      </div>
    </footer>
  )
}
