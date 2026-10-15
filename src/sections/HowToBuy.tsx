import { trackCta } from '../analytics/tracker.ts'
import { configured, contractText, getSite } from '../config/site.ts'

export function HowToBuy() {
  const site = getSite()
  const dex = configured(site.dexUrl) ? site.dexUrl : null
  const contract = contractText(site.contractAddress)

  return (
    <section className="howto" id="how-to-buy" aria-labelledby="howto-heading">
      <div className="shell">
        <p className="eyebrow center">03 / YOUR FLIGHT PLAN</p>
        <h2 id="howto-heading" className="center-heading">
          <span>How to</span>
          <span className="accent">buy {site.ticker}</span>
        </h2>
        <p className="lead">
          A simple three-step route. Final exchange and network links will be added after they are officially confirmed.
        </p>
        <ol className="steps">
          <li>
            <span className="step-no">01</span>
            <h3>SET UP A WALLET</h3>
            <p>Choose a compatible wallet for the confirmed network. Keep your recovery phrase private and offline.</p>
          </li>
          <li>
            <span className="step-no">02</span>
            <h3>FUND FOR THE MISSION</h3>
            <p>Get the network’s native asset from a trusted source. Leave room for transaction fees.</p>
          </li>
          <li>
            <span className="step-no">03</span>
            <h3>VERIFY, THEN SWAP</h3>
            <p>
              Use the official{' '}
              {dex ? (
                <a href={dex} target="_blank" rel="noopener noreferrer" onClick={() => trackCta('buy')}>
                  OPEN OFFICIAL DEX ↗
                </a>
              ) : (
                <span className="placeholder">[DEX_URL]</span>
              )}{' '}
              and compare the full contract: <span className={configured(site.contractAddress) ? 'address' : 'placeholder'}>{contract}</span>
              {contract.endsWith('.') ? '' : '.'}
            </p>
          </li>
        </ol>
        <p className="facts-link-wrap">
          <a className="action action-cyan" href="#tokenomics" onClick={() => trackCta('chart')}>
            CHECK TOKEN FACTS ↓
          </a>
        </p>
      </div>
    </section>
  )
}
