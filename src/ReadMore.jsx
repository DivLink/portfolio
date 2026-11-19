import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function ReadMore({ text, title, limit = 160 }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (text.length <= limit) return <>{text}</>

  return (
    <>
      {text.slice(0, limit).trimEnd()}...{' '}
      <button type="button" className="rm-btn" onClick={() => setOpen(true)}>show more</button>
      {open && createPortal(
        <div className="lb ct" onClick={() => setOpen(false)}>
          <div className="ct-card rm-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="ct-x" onClick={() => setOpen(false)} aria-label="Close">×</button>
            {title && <h2>{title}</h2>}
            <p>{text}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}