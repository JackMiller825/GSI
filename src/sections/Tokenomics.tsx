import { CopyAddress } from '../components/CopyAddress.tsx'
import { contractText, getSite } from '../config/site.ts'

export function Tokenomics() {
  const site = getSite()
  const facts = [
    ['TOTAL SUPPLY', site.totalSupply],
    ['BUY / SELL TAX', site.taxDetails],
    ['LIQUIDITY STATUS', site.liquidityDetails],
    ['OWNERSHIP', site.ownership],
  ] as const

  return (
    <section className="tokenomics" id="tokenomics" aria-labelledby="tokenomics-heading">
      <div className="shell">
        <div className="token-intro">
          <p className="eyebrow">02 / THE MISSION SPECS</p>
          <h2 id="tokenomics-heading">
            <span>Tokenomics</span>
            <span className="accent">in plain sight.</span>
          </h2>
        </div>
        <dl className="fact-grid">
          {facts.map(([label, value]) => (
            <div className="fact-card" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <CopyAddress value={contractText(site.contractAddress)} />
      </div>
    </section>
  )
}
