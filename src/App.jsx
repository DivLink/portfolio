import { useEffect, useRef, useState } from 'react'
import { HashRouter, Routes, Route, Link, NavLink, Navigate, useLocation, useParams } from 'react-router-dom'
import { profile, categories, asset } from './data'

function Bulb({ on }) {
  return (
    <svg className={on ? 'bulb on' : 'bulb'} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path className="glass" d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
      <path className="rays" d="M2 8H3M21 8H22M4.9 3.9L5.6 4.6M19.1 3.9L18.4 4.6" />
    </svg>
  )
}

const ICONS = {
  Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  Tiktok: <><path d="M16 3v10.5a4.5 4.5 0 1 1-4.5-4.5" /><path d="M16 3c.4 2.6 2.3 4.5 5 4.8" /></>,
  YouTube: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></>,
  Instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><path d="M17.5 6.5h.01" /></>,
  LinkedIn: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
}

function Socials() {
  return (
    <ul className="soc">
      {profile.links.map(([n, u]) => (
        <li key={n}>
          <a href={u} target="_blank" rel="noreferrer" aria-label={n} title={n}>
            {ICONS[n]
              ? <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[n]}</svg>
              : n}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Contact({ onClose }) {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const subject = `Project inquiry${name ? ' from ' + name : ''}`
  const body = `Hi ${profile.name},\n\n${msg}\n\n${name ? '- ' + name : ''}`
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  useEffect(() => {
    const key = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="lb ct" role="dialog" aria-modal="true" aria-label="Contact" onClick={onClose}>
      <div className="ct-card" onClick={(e) => e.stopPropagation()}>
        <button className="ct-x" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>
        <h2>Let’s work together</h2>
        <p>Tell me about your project. Your email opens with the message ready to send.</p>
        <label>Your name<input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
        <label>Message<textarea rows="5" value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
        <div className="ct-btns">
        <a className="visit" href={gmail} target="_blank" rel="noreferrer">Send with Gmail ↗</a>
        </div>
      </div>
    </div>
  )
}

function Layout({ children }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')
  const bar = useRef(null)
  const [contact, setContact] = useState(false)

  useEffect(() => {
    const open = () => setContact(true)
    window.addEventListener('open-contact', open)
    return () => window.removeEventListener('open-contact', open)
  }, [])

  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  useEffect(() => {
    let busy = false
    const on = () => {
      if (busy) return
      busy = true
      requestAnimationFrame(() => {
        const h = document.documentElement
        bar.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`
        busy = false
      })
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <div className="prog" ref={bar} />
      <header>
        <div className="wrap bar">
          <Link to="/" className="brand">{profile.name}</Link>
          <nav className={open ? 'open' : ''}>
            {categories.map((c) => <NavLink key={c.slug} to={`/${c.slug}`}>{c.title}</NavLink>)}
          </nav>
          <div className="tools">
            <button className="mode" aria-pressed={dark} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark(!dark)}><Bulb on={!dark} />{dark ? 'Light' : 'Dark'}</button>
            <button className="burger" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
          </div>
        </div>
      </header>
      <main key={pathname} className="page">{children}</main>
      <button className="fab" hidden={false} aria-label="Contact me" title="Contact me" onClick={() => setContact(true)}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
      </button>
      {contact && <Contact onClose={() => setContact(false)} />}
      <footer>
        <div className="wrap foot">
          <div>
            <h2>Have a project?</h2>
            <a className="mail" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <Socials />
        </div>
        <p className="wrap copy">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </>
  )
}

const COVER = {
  'graphic-design': 'graphic-1',
  'web-development': 'webdev-1',
  'mobile-app-development': 'mobile-1',
  'video-editing': 'video-1',
  'ai-development': 'ai-1',
}

function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1><span className="ln"><span>{profile.name},</span></span><span className="ln"><span>{profile.role}</span></span></h1>
          <p>{profile.intro}</p>
          <Socials />
        </div>
        <figure className="me">
          <div className="me-pane" aria-hidden="true" />
          <img src={asset('assets/images/vince-cutout.png')} alt={`Portrait of ${profile.name}`} decoding="async" />
          <figcaption><i aria-hidden="true" />Open for projects</figcaption>
        </figure>
      </section>
      <section className="wrap">
        <div className="grid">
          {categories.map((c) => (
            <Link key={c.slug} to={`/${c.slug}`} className="box">
              <div className="thumb"><img src={asset(`assets/images/${COVER[c.slug]}.svg`)} alt="" loading="lazy" decoding="async" /></div>
              <div className="meta">
                <div><h3>{c.title}</h3><span>{c.projects.length} projects</span></div>
                <i className="arr" aria-hidden="true">↗</i>
              </div>
            </Link>
          ))}
          <button className="box dark" onClick={() => window.dispatchEvent(new Event('open-contact'))}>
            <div className="meta big"><div><h3>Let’s work together</h3><span>Send a message</span></div><i className="arr" aria-hidden="true">↗</i></div>
          </button>
        </div>
      </section>
    </>
  )
}

function Lightbox({ box, setBox }) {
  const n = box.list.length
  const go = (d) => setBox({ ...box, i: (box.i + d + n) % n })
  useEffect(() => {
    const key = (e) => {
      if (e.key === 'Escape') setBox(null)
      if (e.key === 'ArrowRight' && n > 1) go(1)
      if (e.key === 'ArrowLeft' && n > 1) go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => { window.removeEventListener('keydown', key); document.body.style.overflow = '' }
  })
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={box.alt} onClick={() => setBox(null)}>
      <button className="lb-x" onClick={() => setBox(null)}>Close</button>
      {box.video
        ? <video src={asset(box.list[0])} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
        : box.phone
        ? <div className="phone" onClick={(e) => e.stopPropagation()}><img src={asset(box.list[box.i])} alt={box.alt} /></div>
        : <img src={asset(box.list[box.i])} alt={box.alt} onClick={(e) => e.stopPropagation()} />}
      {n > 1 && (
        <>
          <button className="lb-n l" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1) }}>←</button>
          <button className="lb-n r" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1) }}>→</button>
          <span className="lb-c">{box.i + 1} / {n}</span>
        </>
      )}
    </div>
  )
}

function Category() {
  const { slug } = useParams()
  const [box, setBox] = useState(null)
  const i = categories.findIndex((c) => c.slug === slug)
  if (i < 0) return <Navigate to="/" replace />
  const c = categories[i]
  const prev = categories[(i + categories.length - 1) % categories.length]
  const next = categories[(i + 1) % categories.length]
  const phone = c.slug === 'mobile-app-development'
  return (
    <>
      <section className="wrap chead">
        <Link to="/" className="back">← All work</Link>
        <h1>{c.title}</h1>
        <p>{c.blurb}</p>
      </section>
      <section className="wrap info">
        <div><h2>What I do</h2><ul>{c.services.map((s) => <li key={s}>{s}</li>)}</ul></div>
        <div><h2>Tools</h2><ul className="chips">{c.tools.map((s) => <li key={s}>{s}</li>)}</ul></div>
      </section>
      <section className="wrap">
        <h2 className="sec">Selected work</h2>
        <div className="work">
          {c.projects.map((p) => {
            const list = p.video ? [p.video] : [p.img, ...p.more]
            return (
              <article key={p.t} className={phone ? 'card side' : 'card'}>
                {phone ? (
                  <div className="pics">
                  <button className="pic" aria-label={`View ${p.t}`} onClick={() => setBox({ list, i: 0, alt: p.t })}>
                    <img src={asset(list[0])} alt={p.t} loading="lazy" decoding="async" />
                    {list.length > 1 && <span className="count">{list.length} screens</span>}
                  </button>
                </div>
                ) : (
                  <div className="shot">
                    <button className="main" aria-label={`${p.video ? 'Play' : 'View'} ${p.t}`} onClick={() => setBox({ list, i: 0, alt: p.t, video: !!p.video })}>
                      {p.video
                        ? <><video src={asset(p.video) + '#t=0.5'} muted playsInline preload="metadata" /><span className="play" aria-hidden="true">▶</span></>
                        : <img src={asset(p.img)} alt={p.t} loading="lazy" decoding="async" />}
                    </button>
                    {p.more.length > 0 && (
                      <div className="more">
                        {p.more.map((m, k) => (
                          <button key={m} aria-label={`View image ${k + 2} of ${p.t}`} onClick={() => setBox({ list, i: k + 1, alt: p.t })}>
                            <img src={asset(m)} alt="" loading="lazy" decoding="async" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="cap"><h3>{p.t}</h3>{p.y && <span>{p.y}</span>}</div>
                <p>{p.d}</p>
                {p.url && <a className="visit" href={p.url} target="_blank" rel="noreferrer">Visit website ↗</a>}
              </article>
            )
          })}
        </div>
      </section>
      <div className="wrap pn" role="navigation" aria-label="More work">
        <Link to={`/${prev.slug}`}><span>Previous</span>{prev.title}</Link>
        <Link to={`/${next.slug}`} className="r"><span>Next</span>{next.title}</Link>
      </div>
      {box && <Lightbox box={{ ...box, phone }} setBox={setBox} />}
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Category />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}