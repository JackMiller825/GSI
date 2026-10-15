import { asset } from '../config/site.ts'

type MascotFrameProps = {
  label?: string
  alt: string
  variant: 'hero' | 'story' | 'community'
  priority?: boolean
  badge?: string
}

export function MascotFrame({ label, alt, variant, priority = false, badge }: MascotFrameProps) {
  return (
    <figure className={`mascot-frame is-${variant}`}>
      <img
        src={asset('gsi-banner-1100x520.png')}
        alt={alt}
        width={1100}
        height={520}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {badge ? <span className="signal-badge">{badge}</span> : null}
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  )
}
