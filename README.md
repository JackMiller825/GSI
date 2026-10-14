# Grok Super Intelligence ($GSI)

Single-page community site for Super Bot 06. Editable facts and official links live in `src/config/site.ts`.

## Pending configuration

These values stay empty until a verified source supplies them:

- Network, total supply, tax / fees, liquidity
- Contract address
- Official social links, Telegram, X, latest update URL
- DEX URL and chart URL
- Custom production domain (`siteUrl`)

The page shows the matching placeholders, including `[NETWORK]` and `[CONTRACT_ADDRESS]`, while those fields are null. Development can exercise confirmed links with `?fixture=confirmed` and the copy-error path with `?fixture=copy-error`. Those fixtures are removed from production builds.

## Assets still missing

`gsi-mascot-concepts.zip` was not in the workspace, so `gsi-mascot-06-super-bot.png` is not available. Hero, story, and community frames crop the approved opaque banner `gsi-banner-1100x520.png` onto Super Bot. These proposed files were also not supplied: `gsi-super-bot-hero-cutout.png`, `gsi-super-bot-origin-scene.png`, `gsi-super-bot-community-scene.png`, and `gsi-social-preview-1200x630.png`.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

Local site: `http://localhost:5173/GSI/`. Section URLs use hashes, for example `http://localhost:5173/GSI/#tokenomics`.

GitHub Pages publishes `dist` at https://jackmiller825.github.io/GSI/ with Vite `base` set to `/GSI/`.

## Visitor dashboard

The public site on GitHub Pages records visits only while the Node API is running at https://gsi.103.161.35.238.sslip.io. Local `npm run dev` and `npm start` use the same origin. The dashboard is at `/GSI/dashboard` on the site and `/dashboard` on the API host.

One-time setup reads `DASHBOARD_PASSWORD` from the environment, stores a hash in `data/analytics.sqlite`, and writes session and encryption keys to `data/secrets.json`. Those files are not committed. Setup does not replace a password that is already stored.

```bash
npm run setup
npm run build
npm start
```

The server needs Node 24. Development and localhost traffic is excluded from the default counts. If a TLS proxy terminates HTTPS in front of the Node process, set `TRUST_PROXY=1`, `TRUSTED_PROXIES` to that proxy's connecting address, and optionally `TRUSTED_IP_HEADER`.
