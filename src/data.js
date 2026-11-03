export const packages = [
  { n: 'Portfolio Website', p: '₱15,000', t: 'Web-based portfolio website' },
  { n: 'Learning Management System', p: '₱30,000', t: 'React + Firebase. CRUD, monitoring, posts, graphs, learner area' },
  { n: 'Database Management System', p: '₱30,000', t: 'React + Firebase. CRUD, monitoring, posts, graphs (HR, traffic, etc.)' },
  { n: 'Point of Sale (POS)', p: '₱45,000', t: 'React + Firebase. QR scanning, sales graphs, MySQL/MS SQL option' },
  { n: 'Custom Website / System', p: 'Quotation', t: 'Priced after scope confirmation' },
]

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
const VE = ['ve-logo', 've-processing', 've-webchecking', 've-terminal-image-resolt', 've-fulldetailedresult'].map((n) => `assets/images/${n}.png`)
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
      ['Veronica (Hermes Agent)', 'A fully functional AI assistant running inside Hermes Agent, powered by two reasoning engines: Gemini 3.5 and Groq. She follows a script injected into the agent that defines her response behavior and character. She supports voice commands, voice responses and coding assistance.', HERMES, 2026],
      ['Veronica Synthesis 1.1 - Independent AI Agent', 'A standalone local AI agent, separate from the Hermes Agent version of Veronica, designed to operate in fully independent mode. It supports multiple AI models, allowing it to perform a range of tasks based on the capabilities of its installed models. The system supports offline image generation, including the creation of highly realistic images, without requiring an active internet connection. When online access is necessary, Veronica can request permission to switch to online mode and access additional capabilities. It is also portable: it runs on both mobile phones and MacBooks, and can be installed on a flash drive or saved directly on a computer, so it can be carried and used anywhere. With integrated reasoning, flexible model support, and offline functionality, Veronica Synthesis 1.1 represents a significant step forward in the development of an independent AI agent.', VE, 2026],
    ]),
  },
]

export const partners = [
  { n: 'DivLink', r: 'Web operations partner' },
  { n: 'Un0 - Universal Zero', r: 'Developer', u: 'https://un0officialaccess.netlify.app/' },
]

export const about = {
  lead: 'Designer and developer building brands, web and mobile apps, video and AI features.',
  chapters: [
    {
      g: 'Experiences and Interests',
      t: 'Background, Experience, and Technical Interests',
      p: [
        `I am Vince, a full-stack developer capable of working on both web and application development, including native applications and web-based applications through WebView. I graduated from Saint Michael's College of Iligan, Inc. on May 10, 2025.`,
        `Before graduating, I started working as a freelancer in 2020, taking on part-time projects as a video editor. I gained experience editing different types of content, including short-form videos, long-form videos, highlights, commercials, compilations, and vlogs. In 2023, I decided to step away from freelancing because of scheduling conflicts and the need to focus more on my academic responsibilities, particularly the increasing demands of school projects.`,
        `During that period, I shifted more of my attention toward programming. I began exploring different programming languages and learning the fundamentals of both frontend and backend development. When I started my On-the-Job Training (OJT), I gained more hands-on experience working on actual projects, including troubleshooting and resolving technical issues.`,
        `Aside from development, I also developed a strong interest in cybersecurity. Before exploring this field further, I had the opportunity to meet someone who eventually became my mentor. Together, we worked on projects that became meaningful milestones in our partnership. Through that experience, I learned more about securing applications, from the initial development process to identifying and addressing potential security weaknesses.`,
        `Over time, my curiosity led me toward penetration testing. My interest was not simply about expanding my technical knowledge; I became fascinated by the idea of understanding how systems work, identifying their weaknesses, and learning how to improve their security. This motivated me to begin studying the fundamentals of penetration testing.`,
        `I do not consider myself an expert programmer who memorizes every function or syntax. Instead, I describe my development approach as AI-assisted or vibe coding. I use AI as a development tool while focusing on understanding the logic, structure, and proper implementation of the code. For me, programming is not simply about turning an idea into a working project. It is about understanding how the entire system should be designed, organized, and connected.`,
        `My approach to building projects starts with system architecture and data flow. I analyze the project requirements, identify the appropriate development approach, and establish the system structure before moving into implementation. Security is also considered throughout the process. I document sensitive components, identify critical system layers, and take note of potential vulnerabilities that may affect the application.`,
        `While developing, I carefully organize each component and maintain an understanding of how different parts of the system communicate with one another. Once the project reaches the user-testing stage, I evaluate its functionality, conduct authorized security assessments, identify potential weaknesses, and implement necessary improvements based on the findings.`,
        `My goal is to bring the project through development, testing, security assessment, and refinement until it is stable, functional, and ready for deployment.`,
      ],
    },
    {
      g: 'Curiosity About AI Assistants',
      t: 'From Curiosity to AI Assistant',
      p: [
        `Over the years of being a web developer and programmer, I have developed a strong interest in technology, especially through movies that explore technological advancements, futuristic innovations, and unimaginable creations that could one day become reality.`,
        `One of the movie franchises I particularly enjoy is The Avengers. Among its characters, my attention was especially drawn to Tony Stark and his advanced Artificial Intelligence assistant, J.A.R.V.I.S. The idea of having an intelligent assistant capable of communicating, analyzing information, assisting with complex tasks, and working alongside its creator fascinated me.`,
        `That curiosity eventually pushed me to explore how AI assistants are built and how they actually work. After months of research and learning, I finally decided to take my first steps toward creating one. My initial attempt involved building a basic AI assistant using a JSON-based knowledge system that generated responses from predefined information.`,
        `I genuinely enjoyed seeing something I had built respond and interact with me. As I continued experimenting, I kept imagining that sooner or later, I might be able to create something similar to J.A.R.V.I.S., or at least something that could come close to that vision.`,
        `Through years of learning, experimenting, and working around my busy schedule, that curiosity eventually led me to develop my own AI agent named Veronica.`,
        `Today, Veronica operates through Hermes Agent, with two integrated AI models assigned to specific roles. She is capable of voice interaction, coding assistance, and various other tasks. I can communicate with her through voice, give her instructions, and use her as an assistant in my development activities. Seeing an idea that once existed only in my imagination become something I can actually interact with is one of the most satisfying experiences of my journey.`,
        `Building something that initially seems impossible does not necessarily mean the final result will be identical to what you imagined. Sometimes, the outcome may be different from the original vision, and that is completely natural. It is not simply about being good at experimenting through trial and error. It is about having the curiosity, passion, and determination to keep exploring an idea until something meaningful comes out of it.`,
        `For me, Veronica is more than just another programming project. She represents years of curiosity, learning, experimentation, and the willingness to turn an imagined possibility into something real.`,
      ],
    },
  ],
}