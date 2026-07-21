# BlockNest

**Home of Amazing Minecraft Builds**

BlockNest is a free Minecraft build-sharing website. Visitors browse builds, preview them with images, and download world files at no cost. The site is supported by advertising rather than by selling builds.

## Tech stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend:** Firebase Authentication, Firestore, Firebase Storage

## Design

| Token | Value |
|---|---|
| Background — Sidecar Yellow | `#F3E8BC` |
| Primary — Authentic Teal | `#035352` |
| Accent | `#014140` |
| Card background | `#FFF8DD` |
| Border | `rgba(3,83,82,.15)` |
| Display font | Playfair Display |
| Body font | Poppins |

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in your Firebase project keys once Phase 2 begins.

## Folder structure

```
BlockNest/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── firebase/
│   ├── hooks/
│   ├── utils/
│   └── styles/
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

## Roadmap

- [x] **Phase 1** — Repo setup, folder structure, theme, Navbar, Home page, empty build states, routing
- [ ] **Phase 2** — Firebase setup: Authentication, Firestore, Storage
- [ ] **Phase 3** — Admin Dashboard: upload / edit / delete builds, manage categories, secured via Firebase Auth + Firestore admin role (no hardcoded codes)
- [ ] **Phase 4** — Search, categories, settings, animations, Google AdSense integration

## Admin access

Admin access is granted via Firebase Authentication + a Firestore `admin` role check — there is no hardcoded password or code anywhere in the client code.

## Future ideas

Favorites, accounts, comments, ratings, collections, trending, dark mode, notifications, cloud save, an interactive 3D viewer, texture/shader packs, and dedicated adventure-map and redstone-build sections.
