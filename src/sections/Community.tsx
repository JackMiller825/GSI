import { trackCta } from '../analytics/tracker.ts'
import { ActionLink } from '../components/ActionLink.tsx'
import { MascotFrame } from '../components/MascotFrame.tsx'
import { configured, getSite } from '../config/site.ts'

export function Community() {
  const site = getSite()
  const telegram = configured(site.telegramUrl) ? site.telegramUrl : null
  const xUrl = configured(site.xUrl) ? site.xUrl : null

  return (
    <section className="community" id="community" aria-labelledby="community-heading">
      <div className="shell hangar">
        <div className="hangar-copy">
          <p className="eyebrow">04 / THE HANGAR</p>
          <h2 id="community-heading">
            <span>Heroes don’t</span>
            <span className="accent">scroll alone.</span>
          </h2>
          <p>Meet the people behind the memes. Share fan art and help Super Bot keep the signal bright.</p>
          <div className="hangar-actions">
            <ActionLink className="action action-red" href={telegram} external onTrack={() => trackCta('telegram')}>
              TELEGRAM ↗
            </ActionLink>
            <ActionLink className="action action-dark" href={xUrl} external onTrack={() => trackCta('x')}>
              FOLLOW ON X ↗
            </ActionLink>
          </div>
        </div>
        <MascotFrame
          variant="community"
          label="GSI SQUAD • SIGNAL LOCKED"
          alt="Super Bot 06 with a red cape and cyan chest emblem, ready beside the community hangar."
        />
      </div>
    </section>
  )
}
