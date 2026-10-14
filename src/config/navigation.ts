export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'tokenomics', label: 'Tokenomics' },
  { id: 'how-to-buy', label: 'How to Buy' },
  { id: 'community', label: 'Community' },
] as const

export type SectionId = (typeof navigation)[number]['id']
