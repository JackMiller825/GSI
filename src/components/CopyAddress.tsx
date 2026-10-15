import { useId, useState } from 'react'

type CopyAddressProps = {
  value: string
}

function copyWithFallback(value: string): boolean {
  const area = document.createElement('textarea')
  area.value = value
  area.setAttribute('readonly', '')
  area.style.position = 'fixed'
  area.style.top = '0'
  area.style.left = '0'
  area.style.width = '1px'
  area.style.height = '1px'
  area.style.padding = '0'
  area.style.border = '0'
  document.body.appendChild(area)
  area.focus()
  area.select()
  area.setSelectionRange(0, value.length)
  let ok = false
  try {
    ok = document.execCommand('copy')
  } catch {
    ok = false
  }
  area.remove()
  return ok
}

export function CopyAddress({ value }: CopyAddressProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const inputId = useId()
  const statusId = useId()

  const copy = async () => {
    const forceError = import.meta.env.DEV && new URLSearchParams(window.location.search).get('fixture') === 'copy-error'
    if (forceError) {
      setStatus('error')
      return
    }
    // execCommand has to run inside the click, before any await, or the browser drops the gesture.
    if (copyWithFallback(value)) {
      setStatus('copied')
      window.setTimeout(() => setStatus('idle'), 2000)
      return
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(value)
      setStatus('copied')
      window.setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contract-copy">
      <p className="ca-line">
        <span>CA</span> {value}
      </p>
      <button type="button" className="action action-cyan copy-button" onClick={() => void copy()} aria-describedby={statusId}>
        {status === 'copied' ? 'Copied' : 'Copy contract address'}
      </button>
      <p id={statusId} className="copy-status" role="status" aria-live="polite">
        {status === 'copied' ? 'Copied' : status === 'error' ? 'Could not copy automatically.' : ''}
      </p>
      {status === 'error' ? (
        <label className="copy-fallback" htmlFor={inputId}>
          Select the address and copy it manually.
          <input id={inputId} readOnly value={value} onFocus={(event) => event.currentTarget.select()} />
        </label>
      ) : null}
    </div>
  )
}
