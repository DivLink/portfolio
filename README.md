# Portfolio (React + Vite)
Black and white, five fields: graphic design, web, mobile, video, AI.

## Run
npm install
npm run dev        # local
npm run build      # outputs /dist (works on any static host, relative paths)

## Edit
- Text, name, email, links, projects: `src/data.js`
- Images: put files in `public/assets/images/` and point to them in `src/data.js` (e.g. `assets/images/my-logo.jpg`)
- Add a field: add one object to `categories` in `src/data.js`
