# Envision — AI‑Powered Video Creator

Envision is a web app that turns a single text prompt into a short, multi‑scene AI‑generated movie. You describe an idea, pick the characters you want in it, and Envision walks you through a guided pipeline: it drafts a scene‑by‑scene script, generates a still image for each scene, animates each still into a video clip, and finally stitches everything into one downloadable movie.

Built as a final‑year project, Envision focuses on the **product and front‑end engineering** side of a generative‑video tool: a polished, guided multi‑step creative workflow with real authentication, protected routing, and a clean design system.

---

## ✨ What it does

Envision guides the user through a linear, wizard‑style creative flow:

1. **Prompt** — The user writes the core idea for their movie (e.g. *"Princess Merida running through an enchanted jungle"*).
2. **Characters & Scenes** — They choose how many scenes the movie should have and pick one or more characters (each character has a name, a preview image, and a "trigger word" used to keep the character consistent across scenes).
3. **Script** — Envision generates a structured, scene‑by‑scene script. Each scene has a title, a detailed visual prompt, and a story‑context blurb. Individual scenes can be re‑edited with natural‑language instructions.
4. **Image generation** — For each scene, a still image is generated one after another, with live loading states.
5. **Video generation** — Once images exist, each still is animated into a short video clip, again progressively.
6. **Final movie** — All the clips are compiled into a single cinematic video that the user can play and download.

Every step has considered loading/empty states, toast notifications for success and failure, and a consistent dark, glassy visual theme.

---

## 🧱 Tech stack

| Area | Technology |
|------|-----------|
| Framework | **Next.js 15** (App Router, Turbopack) + **React 19** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4**, `tw-animate-css` |
| UI components | **shadcn/ui** built on **Radix UI** primitives (dialog, label, separator, slot) |
| Icons & motion | **lucide-react**, **framer-motion** |
| Global auth state | **Redux Toolkit** + **redux-persist** (session storage) |
| Workflow state | **React Context** (`EnvisionContext`) |
| HTTP | **axios** with request/response interceptors |
| Notifications | **sonner** toasts |
| Theming | **next-themes** (dark by default), Geist + Poppins fonts |
| Backend (external) | Django REST + **Djoser / JWT** API (configured via `NEXT_PUBLIC_BASE_URL`) |

---

## 🏗️ Architecture & notable engineering

### Guided, protected workflow
The creative journey lives under the `/auth` route group behind a `ProtectedRoute` wrapper. The shared `AuthLayout` provides the header, footer, background glow, and gates every child page on a valid session — unauthenticated users are redirected to `/login`.

```
/                     → redirects into the app
/login                → login + signup
/auth/prompt          → 1. describe the idea
/auth/characters      → 2. pick scenes + characters
/auth/script          → 3. script → images → videos
/auth/final           → 4. compiled movie + download
```

### Authentication with silent token refresh
Auth is JWT‑based against a Djoser/DRF backend:

- `useLogin` / `useSignUp` hooks handle credentials, dispatch tokens into Redux, and surface granular error toasts (invalid credentials, validation errors, duplicate users, server errors).
- Tokens are stored via **redux‑persist** in `sessionStorage`, so a refresh keeps the user signed in for the session.
- A custom **axios interceptor** (`lib/axiosInterceptor.tsx`) automatically attaches the bearer token to every request and, on a `401`, transparently calls the refresh endpoint (using an httpOnly cookie), updates the access token, and retries the original request — all without the user noticing. If refresh fails, it logs the user out cleanly.

### Separation of state concerns
- **Redux Toolkit** owns cross‑cutting auth state (access/refresh tokens) with a typed store, typed `useAppDispatch`/`useAppSelector` hooks, and persistence.
- **React Context** (`EnvisionContext`) owns the ephemeral creative‑workflow state (prompt, selected characters, scene count, generated script) that only needs to live for the duration of a session's flow.

### Typed data contracts
The `types/` directory defines the full shape of the API contracts the app is built against — `Scene`, `ScriptResponse`, per‑scene and batch edit responses, character and user models — so the UI is written against a stable, documented interface.

### Component design system
Reusable primitives live in `components/ui/` (button, card, dialog, input, textarea, badge, spinner, skeleton, etc.), composed into feature components such as `CharacterCard`, `SceneCard`, `SceneSelector`, `PromptInput`, `EditDialog`, `Header`, and `Footer`.

> **Note on demo data:** The script, image, and video generation steps currently run against **local sample assets and simulated timing** (hardcoded scenes and `/public` media) so the full experience is demonstrable end‑to‑end without a live generation backend. The auth flow, routing, state management, and API layer are wired to a real backend and the generation calls are stubbed out at clearly marked integration points, ready to be swapped for live endpoints.

---

## 🚀 Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Configure the backend URL
#    Create a .env.local file in the project root:
echo "NEXT_PUBLIC_BASE_URL=http://your-api-host" > .env.local

# 3. Run the dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected into the login flow, then into the creative pipeline.

### Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project structure

```
app/
├── auth/                 # Protected creative workflow (prompt → characters → script → final)
│   ├── layout.tsx        # Header/footer + ProtectedRoute gate
│   ├── prompt/           # Step 1: idea prompt
│   ├── characters/       # Step 2: character & scene selection
│   ├── script/           # Step 3: script + image + video generation
│   └── final/            # Step 4: compiled movie + download
├── login/                # Auth entry point
├── layout.tsx            # Root layout: Redux + Context providers, theming, toasts
└── page.tsx              # Redirect into the app

components/               # Feature components + shadcn/ui primitives (components/ui)
contexts/                 # EnvisionContext — creative workflow state
hooks/                    # useLogin, useSignUp, useAuth
lib/                      # axiosInterceptor (JWT + silent refresh), utils
store/                    # Redux Toolkit store, auth slice, persistence
types/                    # Typed API contracts (scenes, scripts, users, characters)
public/                   # Sample scene images, clips, and final movie
```

---

## 🎯 What this project demonstrates

- Designing and building a **multi‑step, stateful product flow** with clear UX at every stage (loading, error, empty, and success states).
- **Real authentication** with JWT, persisted sessions, protected routes, and automatic silent token refresh via HTTP interceptors.
- Thoughtful **state architecture** — Redux for global/auth concerns, Context for feature‑scoped state.
- A **typed, contract‑first** approach to integrating with a REST backend.
- A cohesive, accessible **component library and dark design system** built on Tailwind + Radix.

---

*Built with Next.js, React, and TypeScript.*
