import { MascotFrame } from '../components/MascotFrame.tsx'

export function Story() {
  return (
    <section className="story" id="story" aria-labelledby="story-heading">
      <div className="shell story-grid">
        <MascotFrame
          variant="story"
          label="ORIGIN SIGNAL • 001"
          alt="Super Bot 06 in a blue suit and red cape, posed against a starfield as the origin signal."
        />
        <div className="story-copy">
          <p className="eyebrow">01 / THE ORIGIN</p>
          <h2 id="story-heading">
            <span>The internet called.</span>
            <span className="accent">A bot answered.</span>
          </h2>
          <p>
            Somewhere between a hot take and a late-night scroll, a little silver hero powered up. Super Bot brought a bright
            blue signal, a red cape, and absolutely no plan to take the timeline too seriously.
          </p>
          <blockquote>
            <p>“A meme can be a tiny beacon. A community gives it a universe.”</p>
          </blockquote>
          <p className="closing">Community-led, superhero-inspired, and made for online culture.</p>
        </div>
      </div>
    </section>
  )
}
