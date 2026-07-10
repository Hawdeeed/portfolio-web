# Scenarix — AI Ad Storyboard & Video Generation Platform

Scenarix turns a one-line product brief into a **complete, story-consistent advertisement** — a sequence of scenes with visuals, on-screen copy, and voiceover, then AI-generated **images** and **videos** for each scene. Users can revise the entire storyboard or a single scene with natural-language feedback, and every change is versioned and auditable.

It's a full-stack project: an **async FastAPI backend** orchestrating multiple AI models (OpenAI + fal.ai) with a **Supabase** (Postgres + Auth + Storage) data layer secured by Row-Level Security, and a **Next.js 16 / React 19** web app with a node-based workflow UI, dashboard analytics, and project management.

---

## What it does

- **Brief → Storyboard.** Describe a product, pick a number of scenes (1–20) and an ad style; an LLM writes a sequential narrative where each scene logically continues from the last (same characters, evolving setting, consistent tone). Each scene gets a `visual_description`, `text_overlay`, and `audio_voiceover`.
- **Conversational revision.** Give feedback like *"make it more energetic"* to rewrite the whole arc, or target a single scene while keeping its neighbours byte-for-byte intact.
- **Image generation.** Generate advertising visuals per scene, using the uploaded product photos as visual ground truth so the product stays consistent across the storyboard.
- **Video generation.** Turn each scene image into short cinematic ad footage (image-to-video) with optional native audio.
- **Full project management.** List, view, update, and delete projects and scenes, with pagination.
- **Audit trail.** Project edits, scene edits, and every image-generation attempt (success or failure) are logged for a complete revision history.
- **Multi-tenant & secure.** Supabase Auth (JWT) plus Postgres Row-Level Security means users can only ever see and touch their own data — enforced at the database, not just the app.

---

## Architecture

```
┌──────────────────────────┐        ┌────────────────────────────┐
│   scenarix-web (Next.js)  │        │      Scenarix API (FastAPI) │
│                            │  HTTP  │                             │
│ • App Router (React 19)    │ ─────▶ │ • Auth router (/auth)       │
│ • React Query data layer   │ Bearer │ • Scenes router (/api/...)  │
│ • Node-based workflow UI    │  JWT   │ • Service layer (business)  │
│ • Dashboard / analytics     │ ◀───── │ • Pydantic v2 schemas       │
└──────────────────────────┘        └───────────┬─────────────────┘
                                                 │
                    ┌────────────────────────────┼───────────────────────────┐
                    ▼                            ▼                            ▼
             ┌─────────────┐            ┌───────────────┐           ┌──────────────────┐
             │   OpenAI     │            │    fal.ai      │           │     Supabase      │
             │  gpt-4o      │            │ nano-banana-pro│           │ Postgres + Auth + │
             │ (scenes,     │            │  (images)      │           │  Storage (RLS)    │
             │  vision,     │            │ Kling O3       │           │                   │
             │  fallback    │            │  (video)       │           │                   │
             │  images)     │            │                │           │                   │
             └─────────────┘            └───────────────┘           └──────────────────┘
```

**Request lifecycle:** every protected request carries a Supabase JWT. The backend verifies it via `supabase.auth.get_user(token)` and builds a **per-request, user-scoped Supabase client** from the bearer token, so all database queries run under that user's identity and RLS policies — ownership is enforced by Postgres itself, with a defence-in-depth check in the service layer on top.

---

## Key engineering highlights

These are the parts I'd point to in a review:

- **Structured LLM output, not prompt-and-pray.** Scene generation uses OpenAI **Structured Outputs (JSON Schema, strict mode)** so the model must return a valid `scenes` array. The response is then re-validated with Pydantic and the scene count/ordering is defensively re-numbered to a monotonic `1..N` sequence.
- **Narrative-consistency prompting.** A dedicated system prompt casts the model as an ad creative director, paired with a **few-shot example** and explicit continuity constraints (same characters, evolving setting, consistent pacing) so scenes read as one coherent arc rather than isolated shots.
- **Single-scene editing that can't drift.** When editing one scene, the service merges the LLM's output back over the originals so untouched scenes are guaranteed unchanged — the model physically cannot silently rewrite the rest of the storyboard.
- **Pluggable image pipeline with graceful fallback.** If `FAL_AI_KEY` is set and reference images exist, images route through **fal.ai `nano-banana-pro`** (image-to-image, product-consistent). Otherwise it falls back to **OpenAI gpt-4o multimodal / gpt-image**. Images are generated **in parallel** with `asyncio.gather`, uploaded to Supabase Storage, and only the permanent URLs are persisted.
- **Image-to-video generation.** Scene images become ad footage via fal.ai **Kling O3** image-to-video; blocking SDK calls are pushed off the event loop with `asyncio.to_thread`, and videos are streamed into a dedicated Storage bucket (auto-created, idempotent).
- **Security by construction.** JWT verification on every route, user-scoped DB clients, and RLS policies on every table — plus a service-role client reserved strictly for backend-only storage cleanup.
- **Operational robustness.** Centralised exception handling maps domain errors (`NotFound`, `BadRequest`, `LLMServiceError`, `SupabaseServiceError`) to correct HTTP codes; history/logging writes fail soft so a missing audit table never breaks a user action.

---

## Tech stack

**Backend**
- **FastAPI** (async) with a clean router → service → schema layering
- **Pydantic v2** / **pydantic-settings** for request/response validation and typed env config
- **OpenAI** `gpt-4o` — scene generation (Structured Outputs), product-image vision, image fallback
- **fal.ai** — `nano-banana-pro` (images) and `Kling O3` (video)
- **Supabase** (`supabase-py`) — Postgres, Auth, and Storage
- **httpx**, **uvicorn**

**Frontend** (`scenarix-web/`)
- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **TanStack React Query** for server-state and caching
- **@xyflow/react** for the node-based workflow canvas
- **Tailwind CSS v4**, **Framer Motion**, **Recharts**, **Lucide**, **Sonner**
- **React Hook Form** + **Zod** for typed, validated forms
- **Axios** API client

**Data model** (Supabase / Postgres)
- `projects` — the brief (product, description, style, scene count, product images), owned by a user
- `scenes` — ordered rows per project (`visual_description`, `text_overlay`, `audio_voiceover`, `generated_image_url`, `generated_video_url`)
- `project_history`, `scene_history`, `image_generation_log` — full audit/versioning trail
- Row-Level Security on every table; cascading deletes from project → scenes → history

---

## Feature walkthrough (frontend)

The `scenarix-web` app is organised with route groups for auth and the main workspace:

- **`/login`, `/register`** — Supabase-backed auth flows (React Hook Form + Zod).
- **`/dashboard`** — stats grid, performance chart (Recharts), and recent activity.
- **`/projects`** — grid of all projects with a create-project modal.
- **`/project/[id]`** — the core workspace: a **storyboard timeline** of scene cards plus a **node-based workflow view** (`@xyflow/react`) modelling the pipeline stages — *Product Input → Scene Generation → Editing → Image Generation → Video Generation → Review → Export* — each node carrying its own status (`idle`/`queued`/`running`/`success`/`error`), progress, and logs. A project history log surfaces the audit trail.
- **`/settings`** — user/account settings.

State is fetched and cached with React Query via typed hooks (`useAuth`, `useProjects`, `useScenes`, `useGenerate`, `useWorkflow`), and a reusable UI kit (`Button`, `Card`, `Dialog`, `Tabs`, `Slider`, `Switch`, etc.) keeps the interface consistent.

---

## API overview

All `/api/scenes` endpoints require `Authorization: Bearer <access_token>` obtained from `/auth/login`.

| Area | Endpoint | Purpose |
| :--- | :--- | :--- |
| Auth | `POST /auth/register`, `POST /auth/login` | Supabase Auth register / login (JWT session) |
| Generate | `POST /api/scenes/generate` | Brief → full storyboard |
| Revise | `POST /api/scenes/{id}/edit-all` | Rewrite the whole storyboard from feedback |
| Revise | `POST /api/scenes/{id}/edit-single` | Rewrite one scene, others untouched |
| Images | `POST /api/scenes/{id}/generate-images` | Generate images for all scenes (parallel) |
| Images | `POST /api/scenes/{id}/scenes/{n}/generate-image` | Generate/regenerate one scene image |
| Images | `GET /api/scenes/{id}/images`, `DELETE .../scenes/{n}/image` | List / remove images |
| Video | `POST /api/scenes/{id}/generate-videos` | Generate videos for all scenes |
| Video | `POST /api/scenes/{id}/scenes/{n}/generate-video` | Generate one scene video |
| Video | `GET /api/scenes/{id}/videos`, `DELETE .../scenes/{n}/video` | List / remove videos |
| Projects | `GET /api/scenes`, `GET/PUT/DELETE /api/scenes/{id}` | List (paginated) / read / update / delete |
| Scenes | `PUT/DELETE /api/scenes/{id}/scenes/{n}` | Manual edit / delete a scene |
| History | `GET /api/scenes/{id}/history` | Project + scene + image-generation audit logs |
| Meta | `GET /health` | Health/version check |

Interactive docs are auto-generated: **Swagger UI** at `/docs`, **ReDoc** at `/redoc`.

---

## Running locally

### Backend

```bash
# 1. create & activate a virtualenv
python -m venv venv
.\venv\Scripts\Activate.ps1        # PowerShell (Windows)
# source venv/bin/activate          # macOS / Linux

# 2. install
pip install -r requirements.txt

# 3. configure environment (.env)
# 4. apply supabase/supabase_schema.sql (+ rls.sql) in the Supabase SQL editor
# 5. run
uvicorn app.main:app --reload --port 8000
```

**`.env`:**

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key   # backend-only storage ops

# OpenAI
OPENAI_API_KEY=your-openai-api-key
OPENAI_MODEL=gpt-4o
IMAGE_MODEL=gpt-image-2

# fal.ai (optional — enables production image/video generation)
FAL_AI_KEY=your-fal-key

# App
APP_ENV=development
LOG_LEVEL=INFO
```

| Variable | Default | Purpose |
| :--- | :--- | :--- |
| `SUPABASE_URL` | *required* | Supabase project URL |
| `SUPABASE_ANON_KEY` | *required* | Anon key — builds per-request user-scoped clients |
| `SUPABASE_SERVICE_ROLE_KEY` | *optional* | Admin key for backend-only storage cleanup |
| `OPENAI_API_KEY` | `""` | Scene generation, vision, image fallback |
| `OPENAI_MODEL` | `gpt-4o` | Model for Structured Output generation |
| `IMAGE_MODEL` | `gpt-image-2` | Text-to-image fallback model |
| `FAL_AI_KEY` | `""` | Enables fal.ai images (`nano-banana-pro`) + video (`Kling O3`) |
| `APP_ENV` | `development` | Target environment |
| `LOG_LEVEL` | `INFO` | Logging verbosity |

### Frontend

```bash
cd scenarix-web
npm install
# .env.local:  NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev            # http://localhost:3000
```

---

## Project structure

```
Scenarix/
├── app/                          # FastAPI backend
│   ├── main.py                   # app factory, CORS, exception + validation handlers, /health
│   ├── config.py                 # typed settings (pydantic-settings)
│   ├── core/exceptions.py        # domain errors → HTTP status mapping
│   ├── dependencies/auth.py      # JWT verification, user-scoped Supabase client
│   ├── routers/                  # auth + scenes HTTP routers
│   ├── schemas/                  # Pydantic request/response models
│   └── services/
│       ├── scene_service.py      # core orchestration: generate/edit/images/videos + history
│       ├── openai_client.py      # OpenAI async client
│       ├── vision_service.py     # product-image understanding (gpt-4o vision)
│       ├── fal_ai_service.py     # fal.ai image generation (nano-banana-pro)
│       ├── fal_video_service.py  # fal.ai video generation (Kling O3)
│       └── supabase_client.py    # Supabase clients + Storage helpers
├── supabase/                     # schema.sql, rls.sql, setup + enforcement scripts
├── requirements.txt
└── scenarix-web/                 # Next.js 16 / React 19 frontend
    └── src/
        ├── app/                  # App Router routes (auth group + webapp group)
        ├── components/           # dashboard, project, workflow, auth, ui kit
        ├── hooks/                # React Query data hooks
        ├── providers/            # React Query + toaster providers
        └── shared/               # api client, types, routes, constants
```

---

## Notes & possible next steps

- CORS is currently open (`*`) for local development — restrict to a known origin list in production.
- Image/video generation runs synchronously within the request; a natural evolution is a background job queue with webhook/polling status (the workflow UI already models per-node `queued`/`running` states for exactly this).
- The workflow canvas is a strong hook for adding drag-to-reorder scenes and branching storyboards.

---

*Built as a full-stack showcase of AI orchestration (multi-model routing, structured outputs, prompt engineering for narrative consistency), secure multi-tenant data design (Supabase Auth + RLS), and a modern React 19 / Next.js 16 front end.*
