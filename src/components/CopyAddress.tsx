import { useId, useState } from 'react'

type CopyAddressProps = {
  address: string | null
}

export function CopyAddress({ address }: CopyAddressProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const inputId = useId()
  const statusId = useId()

  if (!address) {
    return <p className="contract-pill">CONTRACT · [CONTRACT_ADDRESS]</p>
  }

  const copy = async () => {
    const forceError = import.meta.env.DEV && new URLSearchParams(window.location.search).get('fixture') === 'copy-error'
    try {
      if (forceError) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(address)
      setStatus('copied')
      window.setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contract-copy">
      <button type="button" className="contract-pill" onClick={() => void copy()} aria-describedby={statusId}>
        CONTRACT · {address}
      </button>
      <p id={statusId} className="copy-status" role="status" aria-live="polite">
        {status === 'copied' ? 'Copied' : status === 'error' ? 'Could not copy automatically.' : ''}
      </p>
      {status === 'error' ? (
        <label className="copy-fallback" htmlFor={inputId}>
          Select the address and copy it manually.
          <input id={inputId} readOnly value={address} onFocus={(event) => event.currentTarget.select()} />
        </label>
      ) : null}
    </div>
  )
}
