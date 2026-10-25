export const asset = (p) => import.meta.env.BASE_URL + p

export const profile = {
  name: 'Vince',
  role: 'Designer and developer',
  intro: 'I design brands, build web and mobile apps, edit video and ship AI features. Pick a field to see the work.',
  email: 'vincetecson822@gmail.com',
  links: [['Facebook', 'https://www.facebook.com/vince.nicole.tecson.2025'], ['Instagram', 'https://www.instagram.com/_vnc319/'], ['Tiktok', 'https://www.tiktok.com/@vincecli0319'], ['LinkedIn', 'https://www.linkedin.com/in/vince-nicole-tecson-b1aa51364/']],
}

// [title, description, optional image path or list of image paths]
const P = (slug, list) =>
  list.map(([t, d, img, yr, url], i) => {
    const imgs = [].concat(img || `assets/images/${slug}-${i + 1}.svg`)
    return { t, d, y: yr || 2026 - i, url, img: imgs[0], more: imgs.slice(1) }
  })

const VIDEOS = [
  ['commercial', 'Commercial'],
  ['supracommercial', 'Supra commercial'],
  ['showcasing', 'Showcasing'],
  ['gamehighlights', 'Game highlights'],
  ['gameplay', 'Gameplay'],
  ['grayman_reedited', 'Grayman re-edited'],
  ['relapsing', 'Relapsing'],
  ['Serenique1', 'Serenique 1'],
  ['Serenique2', 'Serenique 2'],
  ['travel1', 'Travel 1'],
  ['travel2', 'Travel 2'],
  ['travel3', 'Travel 3'],
  ['travel4', 'Travel 4'],
  ['travel5', 'Travel 5'],
  ['vid1', 'Video 1'],
  ['vid2', 'Video 2'],
  ['vid3', 'Video 3'],
  ['vid5', 'Video 5'],
].map(([f, t]) => ({ t, d: 'Edited video project.', video: `assets/video/${f}.mp4`, more: [] }))

const MOBILE = ['dashboard', 'movies', 'display', 'trailer', 'tvshow', 'continue', 'search', 'share', 'profile', 'loading'].map((n) => `assets/images/mb-${n}.png`)
const HERMES = ['hermes', 'hermes-coding', 'hermes-nmap'].map((n) => `assets/images/${n}.png`)
const UN0 = ['dashboard', 'hover', 'info', 'movie', 'tvshow', 'trailer', 'play', 'continue', 'channel1', 'profile', 'browse', 'login'].map((n) => `assets/images/dsk-${n}.png`)
const ZDE = ['zde-home', 'zde-product'].map((n) => `assets/images/${n}.png`)
const PIIXEL = ['dashboard', 'book', 'payment', 'booking', 'news'].map((n) => `assets/images/piixel-${n}.png`)
const JING = ['pic1-C3JwqGto', ...Array.from({ length: 11 }, (_, i) => `pic${i + 2}`)].map((n) => `assets/images/${n}.png`)

export const categories = [
  // {
  //   slug: 'graphic-design', title: 'Graphic design',
  //   blurb: 'Logos, posters and brand systems built on clear shapes and strong type.',
  //   tools: ['Photoshop', 'Illustrator', 'Figma', 'Canva'],
  //   services: ['Logo and brand identity', 'Posters and social media', 'Packaging and print', 'Layout and editorial'],
  //   projects: P('graphic', [
  //     ['Brand identity set', 'Logo, color and type system for a local clothing label.'],
  //     ['Event poster series', 'Three posters for a school music night.'],
  //     ['Packaging concept', 'Box and label design for a coffee brand.'],
  //   ]),
  // },
  {
    slug: 'web-development', title: 'Web development',
    blurb: 'Fast, responsive sites and web apps built with React and Firebase.',
    tools: ['React', 'Vite', 'Firebase', 'Cloudflare Workers', 'Netlify'],
    services: ['Business websites', 'Web apps and dashboards', 'POS and inventory systems', 'API and database setup'],
    projects: P('webdev', [
      ['Un0 - Universal Zero', 'A global streaming platform for mobile and desktop, offering affordable subscriptions so you can start streaming today.', UN0, 2026, 'https://un0officialaccess.netlify.app/'],
      ['ZDEmporium', 'An online store for affordable software and special offers. The system is currently unmanaged.', ZDE, 2025, 'https://zdemporium.netlify.app/'],
      ['Jing Apparels', 'A personal, locally run clothing shop. The system is currently on standby.', JING, 2026, 'https://jingapparels.netlify.app/'],
      ['Piixel', 'A complete pickleball court booking system.', PIIXEL, 2026, 'https://customer-piixel-pickleball.netlify.app/'],
    ]),
  },
  {
    slug: 'mobile-app-development', title: 'Mobile app development',
    blurb: 'Android apps packaged from the web with Capacitor, tuned for touch and TV.',
    tools: ['Capacitor', 'Android Studio', 'React', 'Firebase'],
    services: ['Android apps', 'Web to native packaging', 'Push notifications', 'Play Store release'],
    projects: P('mobile', [
      ['Un0 - Universal Zero', 'A fully functional movie streaming app with affordable subscription access to all new releases.', MOBILE, 2026, 'https://un0officialaccess.netlify.app/'],
    ]),
  },
  {
    slug: 'video-editing', title: 'Video editing',
    blurb: 'Cuts, motion and sound that keep a story moving.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut'],
    services: ['Short-form reels', 'Promo and event videos', 'Motion graphics', 'Color and sound'],
    projects: VIDEOS 
  },
  {
    slug: 'ai-development', title: 'AI development',
    blurb: 'Practical AI features: chat, search and automation that save time.',
    tools: ['Hermes Agent', 'Gemini 3.5', 'Groq', 'Python', 'JavaScript'],
    services: ['Voice assistants and chat', 'Smart search and recommendations', 'Workflow automation', 'AI inside existing apps'],
    projects: P('ai', [
      ['Veronica', 'A fully functional AI assistant running inside Hermes Agent, powered by two reasoning engines: Gemini 3.5 and Groq. She follows a script injected into the agent that defines her response behavior and character. She supports voice commands, voice responses and coding assistance.', HERMES, 2025],
    ]),
  },
]