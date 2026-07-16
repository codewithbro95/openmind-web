'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy, TriangleAlert } from 'lucide-react'

type CopyState = 'idle' | 'copied' | 'error'

type CopyCommandButtonProps = {
  text: string
  className?: string
  showLabel?: boolean
}

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // LAN development URLs may expose the API but deny clipboard writes.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  textarea.style.top = '0'
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  textarea.setSelectionRange(0, text.length)

  const copied = document.execCommand('copy')
  textarea.remove()

  if (!copied) throw new Error('Clipboard copy failed')
}

export function CopyCommandButton({
  text,
  className = '',
  showLabel = false,
}: CopyCommandButtonProps) {
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const resetTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)
    }
  }, [])

  const handleCopy = async () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current)

    try {
      await copyText(text)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    resetTimer.current = window.setTimeout(() => setCopyState('idle'), 4000)
  }

  const label = copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy'

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 transition-colors ${className}`}
      aria-label={`${label}: ${text}`}
      title={label}
    >
      {copyState === 'copied' ? (
        <Check size={14} className="text-primary" aria-hidden="true" />
      ) : copyState === 'error' ? (
        <TriangleAlert size={14} className="text-destructive" aria-hidden="true" />
      ) : (
        <Copy size={14} aria-hidden="true" />
      )}
      {showLabel && <span>{label}</span>}
    </button>
  )
}
