import type { ReactNode } from 'react'

type ActionLinkProps = {
  href: string | null
  className: string
  children: ReactNode
  external?: boolean
  onTrack?: () => void
}

export function ActionLink({ href, className, children, external = false, onTrack }: ActionLinkProps) {
  if (!href) {
    return (
      <button type="button" className={`${className} is-pending`} aria-disabled="true">
        {children}
      </button>
    )
  }
  const externalProps = external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}
  return (
    <a className={className} href={href} {...externalProps} onClick={() => onTrack?.()}>
      {children}
    </a>
  )
}
