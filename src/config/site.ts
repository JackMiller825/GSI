export const pagesUrl = 'https://jackmiller825.github.io/GSI'

export const siteConfig = {
  name: 'Grok Super Intelligence',
  ticker: '$GSI',
  mascot: '06 Super Bot',
  network: null as string | null,
  totalSupply: '1,000,000,000',
  taxDetails: '0%',
  contractAddress: null as string | null,
  liquidityDetails: 'Burn',
  ownership: 'Renounce',
  officialSocialLinks: null as string | null,
  dexUrl: null as string | null,
  chartUrl: null as string | null,
  telegramUrl: null as string | null,
  xUrl: null as string | null,
  latestUrl: null as string | null,
  // Custom production domain is not confirmed. pagesUrl is the GitHub Pages host.
  siteUrl: null as string | null,
}

export type SiteConfig = typeof siteConfig

/**
 * gsi-mascot-concepts.zip was not in the workspace, so
 * gsi-mascot-06-super-bot.png could not be copied.
 * These proposed files were also not supplied:
 * gsi-super-bot-hero-cutout.png, gsi-super-bot-origin-scene.png,
 * gsi-super-bot-community-scene.png, gsi-social-preview-1200x630.png.
 * Framed artwork crops the approved opaque banner onto Super Bot.
 */
export const unresolvedAssets = [
  'gsi-mascot-06-super-bot.png',
  'gsi-super-bot-hero-cutout.png',
  'gsi-super-bot-origin-scene.png',
  'gsi-super-bot-community-scene.png',
  'gsi-social-preview-1200x630.png',
] as const

export const pendingContractLabel = 'Coming Soon..'

export function contractText(address: string | null): string {
  return address && address.trim() ? address.trim() : pendingContractLabel
}

export function asset(file: string): string {
  return `${import.meta.env.BASE_URL}assets/${file}`
}

export function getSite(): SiteConfig {
  if (!import.meta.env.DEV || typeof window === 'undefined') return siteConfig
  const params = new URLSearchParams(window.location.search)
  if (params.get('fixture') !== 'confirmed') return siteConfig
  return {
    ...siteConfig,
    network: 'Ethereum',
    totalSupply: '1,000,000,000',
    taxDetails: '0% buy / 0% sell',
    contractAddress: '0x1111111111111111111111111111111111111111',
    liquidityDetails: 'Fixture only',
    officialSocialLinks: 'Example destinations',
    dexUrl: 'https://example.com/dex',
    chartUrl: 'https://example.com/chart',
    telegramUrl: 'https://example.com/telegram',
    xUrl: 'https://example.com/x',
    latestUrl: 'https://example.com/latest',
  }
}

export function configured(value: string | null): value is string {
  return Boolean(value && value.trim())
}

export function factsReady(site: SiteConfig): boolean {
  return [site.network, site.totalSupply, site.taxDetails, site.contractAddress, site.liquidityDetails, site.officialSocialLinks].every(
    configured,
  )
}
