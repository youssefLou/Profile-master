# Youssef Louzani Portfolio

Modern React/TypeScript portfolio and improved CV built from the provided resume.

## Files

- `src/App.tsx` - animated React portfolio
- `src/styles.css` - modern responsive UI styling
- `server/index.ts` - optional Express/MongoDB contact API scaffold
- `public/profile-placeholder.svg` - temporary profile image
- `cv.html` - cleaner ATS-style CV page
- `cv_improved.md` - copyable ATS CV text

## Local setup

```bash
npm install
npm run dev
```

Replace `public/profile-placeholder.svg` by adding your real photo at:

```text
public/profile.jpg
```

## MERN backend

The frontend can be deployed alone. The `server/` folder is an optional Express + MongoDB contact API scaffold.

Create `.env` from `.env.example`, add your MongoDB Atlas URI, then run:

```bash
npm run server
```

## Free hosting options

Recommended:

1. Push this project to GitHub.
2. Import the repository into Netlify or Vercel.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

GitHub Pages is also possible, but Netlify or Vercel is easier for a React/Vite portfolio.
