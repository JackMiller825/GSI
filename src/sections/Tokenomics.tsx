import { configured, getSite } from '../config/site.ts'

export function Tokenomics() {
  const site = getSite()
  const facts = [
    ['TOKEN NAME', site.name, site.name],
    ['TICKER', site.ticker, site.ticker],
    ['NETWORK', site.network, '[NETWORK]'],
    ['TOTAL SUPPLY', site.totalSupply, '[TOTAL_SUPPLY]'],
    ['TAX / FEES', site.taxDetails, '[TAX_DETAILS]'],
    ['CONTRACT', site.contractAddress, '[CONTRACT_ADDRESS]'],
    ['LIQUIDITY', site.liquidityDetails, '[LIQUIDITY_DETAILS]'],
    ['OFFICIAL LINKS', site.officialSocialLinks, '[OFFICIAL_SOCIAL_LINKS]'],
  ] as const

  return (
    <section className="tokenomics" id="tokenomics" aria-labelledby="tokenomics-heading">
      <div className="shell">
        <div className="token-intro">
          <div>
            <p className="eyebrow">02 / THE MISSION SPECS</p>
            <h2 id="tokenomics-heading">
              <span>Tokenomics</span>
              <span className="accent">in plain sight.</span>
            </h2>
          </div>
          <p>
            The dashboard is ready. Official token details will appear here once confirmed—no mystery math, no made-up
            numbers.
          </p>
        </div>
        <dl className="fact-grid">
          {facts.map(([label, value, placeholder]) => {
            const pending = !configured(value)
            return (
              <div className="fact-card" key={label}>
                <dt>{label}</dt>
                <dd className={pending ? 'is-pending' : undefined}>{configured(value) ? value : placeholder}</dd>
              </div>
            )
          })}
        </dl>
        <p className="verify-note">
          <span aria-hidden="true">✦ </span>
          VERIFY BEFORE YOU TRADE. Confirm the official contract, network, and destination from verified GSI channels.
        </p>
      </div>
    </section>
  )
}
