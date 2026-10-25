
const MESSAGE = 'Sorry, this command is currently unavailable. Please connect to the owner for your concern.';

function lock() {
    if (document.getElementById('locked')) return
  
    const dark = document.documentElement.dataset.theme === 'dark'
    const bg = dark ? '#1c2523' : '#ffffff'
    const fg = dark ? '#e8e4d8' : '#000000'
  
    const root = document.getElementById('root')
    if (root) root.style.display = 'none'
    document.title = 'VINCE | Where are you Going?'
    document.body.style.overflow = 'hidden'
  
    const el = document.createElement('div')
    el.id = 'locked'
    el.style.cssText = `position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:24px;text-align:center;background:${bg};color:${fg};font-family:'DM Sans',system-ui,sans-serif`
    el.innerHTML = `
      <div style="border:2px solid ${fg};padding:40px;max-width:520px;box-shadow:12px 12px 0 ${fg}">
        <h1 style="font-family:'Big Shoulders Display','Arial Narrow',Impact,sans-serif;font-weight:900;line-height:.92;letter-spacing:-.01em;font-size:clamp(52px,9vw,72px);margin:0 0 16px">Where are you Going?</h1>
        <p style="font-size:18px;margin:0 0 24px">${MESSAGE}</p>
        <button id="locked-back" style="font:700 16px 'DM Sans',system-ui,sans-serif;padding:8px 18px;border:2px solid ${fg};background:${bg};color:${fg};cursor:pointer">Go back</button>
      </div>`
    document.body.appendChild(el)
    document.getElementById('locked-back').addEventListener('click', () => location.reload())
  }

if (import.meta.env.PROD) {
  // Block shortcuts: F12, Ctrl+Shift+I/J/C, Cmd+Option+I/J/C, Ctrl+U
  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase()
    const tools = ['i', 'j', 'c'].includes(k)
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && tools) ||
      (e.metaKey && e.altKey && tools) ||
      (e.ctrlKey && k === 'u')
    ) {
      e.preventDefault()
      e.stopPropagation()
      lock()
    }
  }, true)

  // Block right-click menu
  document.addEventListener('contextmenu', (e) => e.preventDefault())
}