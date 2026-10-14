# GSI Website Preview — Layout Notes

**Token:** Grok Super Intelligence  
**Ticker:** $GSI  
**Mascot:** 06 Super Bot — silver robot, cyan eyes and chest star, blue suit, red cape  
**Palette:** midnight navy, cobalt, electric cyan, silver, red cape, gold accents  
**Status:** design mockups; screenshots are static previews, not a working website.

## Single-page section sequence

1. **Hero — `#home`**: token identity, main hook (“One bot. One cape. Maximum main-character energy.”), mascot art, and primary paths to How to Buy, Community, and Tokenomics. The page opens with a cosmic hero moment.
2. **Narrative / origin — `#story`**: introduces Super Bot and frames GSI as a community-led superhero-inspired meme token. The red cape and starfield carry the hero visual into the origin story.
3. **Tokenomics — `#tokenomics`**: makes official facts visible in a scan-friendly card grid. Unknown values remain explicit placeholders; a verification callout bridges into purchase guidance.
4. **How to Buy — `#how-to-buy`**: wallet, funding, and verify-then-swap steps, followed by a prominent caution and a route back to token facts. Exchange, network, contract, and fee details are placeholders.
5. **Community — `#community`**: shifts into a brighter group/hangar scene and places social actions beside Super Bot. Official destinations remain unconfirmed placeholders.
6. **Footer — `#footer`**: repeats the identity, same-page links, contract/social placeholders, and a concise risk disclosure.

The visual story moves from a bright hero reveal, to origin and purpose, to transparent facts, to a practical mission sequence, and finally to community. Starfield and navy panels connect the sections; cyan highlights navigation and key information, while the cape red is reserved for energetic emphasis.

## Header anchor mapping

| Header link | Target anchor | Section |
|---|---|---|
| Home | `#home` | Hero |
| Story | `#story` | Narrative / origin story |
| Tokenomics | `#tokenomics` | Tokenomics |
| How to Buy | `#how-to-buy` | Buying instructions |
| Community | `#community` | Community |

## Behaviors for the later Cursor build

- Keep every section in one document. Each header link targets its matching section ID; navigation must not load another page.
- Use smooth scrolling by default and turn it off with `prefers-reduced-motion: reduce`.
- Keep the header sticky and add scroll offset (for example `scroll-margin-top`) so target headings remain visible below it.
- Highlight the link for the section currently in view, including when visitors scroll manually.
- Use a mobile menu button with an accessible name and `aria-expanded`; expose the same links as desktop, and close the menu after a section link is selected.
- Support keyboard focus and activation, normal wheel/touch/keyboard scrolling, and direct links such as `/...#tokenomics`.
- Keep the purpose of external actions explicit. Connect Buy/DEX, chart, X, and Telegram buttons only after official destinations are confirmed; otherwise preserve labeled placeholders.
- Implement visible hover/focus states for buttons and links. Any cape drift, glow, or scroll-triggered reveal should be subtle, and should respect reduced-motion preferences.
- The preview PNGs show representative static states. Their buttons and links are illustrations; the screenshots themselves are not interactive controls.

## Unconfirmed facts to replace before launch

`[NETWORK]`, `[TOTAL_SUPPLY]`, `[TAX_DETAILS]`, `[CONTRACT_ADDRESS]`, `[LIQUIDITY_DETAILS]`, `[OFFICIAL_SOCIAL_LINKS]`, and `[DEX_URL]`. Verify facts and destinations through the project's official channel before publishing. The sample copy avoids promising utility, returns, or technical capabilities.

## Preview file index

| Filename | View | Device | Purpose |
|---|---|---|---|
| `01-gsi-home-overview-desktop.png` | Full page | Desktop | Header-to-footer overview and page rhythm |
| `02-gsi-home-hero-desktop.png` | Hero | Desktop | Identity, headline, mascot, primary actions |
| `03-gsi-home-story-desktop.png` | Story | Desktop | Origin copy and art/copy balance |
| `04-gsi-home-tokenomics-desktop.png` | Tokenomics | Desktop | Fact-card grid and verification callout |
| `05-gsi-home-how-to-buy-desktop.png` | How to Buy | Desktop | Three-step buying layout and caution |
| `06-gsi-home-community-desktop.png` | Community | Desktop | Social calls to action and mascot placement |
| `07-gsi-home-footer-desktop.png` | Footer | Desktop | Same-page links, placeholders, risk note |
| `08-gsi-home-overview-mobile.png` | Full page | Mobile | Same page and section order in a narrow layout |
| `09-gsi-home-hero-mobile.png` | Hero | Mobile | Stacked headline, CTA, and mascot |
| `10-gsi-home-story-mobile.png` | Story | Mobile | Origin copy and stacked illustration |
| `11-gsi-home-tokenomics-mobile.png` | Tokenomics | Mobile | Two-column fact cards and verification note |
| `12-gsi-home-how-to-buy-mobile.png` | How to Buy | Mobile | Stacked steps and caution |
| `13-gsi-home-community-mobile.png` | Community | Mobile | Stacked CTA and mascot panel |
| `14-gsi-mobile-menu-open.png` | Header / menu open | Mobile | Accessible menu link order and open state |
| `15-gsi-nav-active-story-desktop.png` | Active navigation | Desktop | Story link highlighted in the sticky header |
| `16-gsi-hero-action-hover-desktop.png` | CTA hover | Desktop | Representative primary-action emphasis |
| `17-gsi-home-footer-mobile.png` | Footer | Mobile | Compact links, contract placeholder, disclosure |
| `18-gsi-sections-contact-sheet-desktop.png` | Section contact sheet | Desktop | Quick comparison of desktop section layouts |
| `19-gsi-sections-contact-sheet-mobile.png` | Section contact sheet | Mobile | Quick comparison of mobile section layouts |
| `20-gsi-interactions-contact-sheet.png` | Interaction contact sheet | Both | Mobile menu, active nav, and CTA hover examples |

All detail images are flat, front-facing webpage mockups. The desktop overview is 1440 px wide; mobile previews are 390 px wide. Section and state previews use content-focused crops, while overviews include the whole page.

## Production image assets

| Proposed filename | Dimensions | Transparency | Placement / status |
|---|---:|---|---|
| `gsi-logo-transparent.png` | 1024 × 1024 | Alpha outside circular mark | Header, footer, favicon/social avatar. Existing approved asset. |
| `gsi-super-bot-hero-cutout.png` | 1600 × 1800 | Transparent background | Hero right column over the site’s CSS starfield; derive from Super Bot 06 while preserving its face, suit, emblem, and cape. |
| `gsi-super-bot-origin-scene.png` | 1800 × 1300 | Opaque scene | Story panel; a distinct origin/launch pose in the approved visual style. |
| `gsi-super-bot-community-scene.png` | 1400 × 1000 | Opaque scene | Community CTA panel; an inviting group/hangar composition. |
| `gsi-social-preview-1200x630.png` | 1200 × 630 | Opaque | Link preview / Open Graph share card with token name, $GSI, and mascot. |
| `gsi-banner-3to1.png` | 1500 × 500 | Opaque | Optional reuse for a wide social banner; existing approved asset. |

The current mockups reuse the selected Super Bot 06 artwork for consistent review. Production scenes above are recommendations for distinct crops and contexts, not additional assets created in this preview stage.
