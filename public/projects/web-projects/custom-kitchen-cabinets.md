# Luxe Kitchen Cabinets — Custom Cabinetry & Closets (Calgary)

A modern, SEO-optimized marketing website for **Luxe Kitchen Cabinets**, a Calgary-based custom
cabinetry company with 13+ years of experience. The site showcases the full range of services —
custom kitchen cabinets, closets, bathroom vanities, built-in furniture, wet bars, laundry storage,
and commercial/office cabinetry — and is built to convert local homeowners and businesses into
consultation leads.

Built with **Next.js 15 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**, and
deployed on **Vercel** with analytics and speed insights integrated.

---

## ✨ Features

- **10+ service landing pages** — Kitchens, Closets, Bathroom Storage, Built-In Furniture, Wet Bars,
  Home Organization, Laundry Storage, and Custom/Commercial Cabinets, all driven by a shared,
  data-driven component architecture.
- **Animated typewriter hero** cycling through service keywords on the homepage.
- **Project gallery** of 20+ real cabinetry and closet installations.
- **Customer reviews** with a reusable star-rating component.
- **Our Team** section with individual profile cards.
- **Blog** page for design tips and cabinetry trends.
- **Lead capture** via an integrated **EmailJS** contact form plus an embedded Google Maps location.
- **Local SEO** — per-route dynamic page titles and Open Graph tags, with Calgary-focused,
  keyword-rich copy.
- **Fully responsive**, mobile-first design with a custom animated navbar and scroll-to-top UX.
- **Performance & analytics** via Vercel Analytics and Speed Insights.

---

## 🛠️ Tech Stack

| Category      | Technology                                   |
| ------------- | -------------------------------------------- |
| Framework     | Next.js 15 (App Router, Turbopack)           |
| Language      | TypeScript                                   |
| UI            | React 18                                     |
| Styling       | Tailwind CSS, PostCSS                        |
| Icons         | React Icons                                  |
| Email / Forms | EmailJS                                      |
| Analytics     | Vercel Analytics, Vercel Speed Insights      |
| Linting       | ESLint (eslint-config-next)                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)

### Installation

```bash
# Install dependencies
npm install

# Run the development server (with Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The contact form is powered by [EmailJS](https://www.emailjs.com/). Create a `.env.local` file in the
project root and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these, the contact form will alert that the EmailJS variables are missing.

### Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack         |
| `npm run build` | Create a production build                   |
| `npm run start` | Run the production build                    |
| `npm run lint`  | Run ESLint                                  |

---

## 📁 Project Structure

```
├── public/                     # Static assets (images, posters)
├── share/                      # Shared, centralized data layer
│   ├── assets.ts               # Image imports/exports
│   ├── data.ts                 # All page content (services, reviews, team, gallery, SEO titles)
│   ├── routes.ts               # Route constants
│   └── types.ts                # Shared TypeScript types
└── src/
    └── app/
        ├── (website)/          # Route group for public-facing pages
        │   ├── about-us/
        │   ├── blogs/
        │   ├── contact-us/
        │   ├── gallery/
        │   ├── our-team/
        │   └── services/       # Service index + individual service pages
        │       ├── bathroom-storage/
        │       ├── built-in/
        │       ├── cabinets/
        │       ├── closets/
        │       ├── home-organization/
        │       ├── kitchen/
        │       ├── laundry-storage/
        │       └── wet-bars/
        ├── components/         # Reusable UI (navbar, footer, cards, hero, forms, etc.)
        ├── layout.tsx          # Root layout
        └── page.tsx            # Homepage
```

### Content-Driven Architecture

Nearly all page copy — service descriptions, customer reviews, team bios, gallery items, and
per-route SEO titles — lives in [`share/data.ts`](share/data.ts). Pages compose reusable components
(such as `Card`) and feed them this data, so updating site content rarely requires touching the
components themselves.

---

## 🗺️ Pages & Routes

| Route                          | Page                          |
| ------------------------------ | ----------------------------- |
| `/`                            | Home                          |
| `/about-us`                    | About Us                      |
| `/services`                    | Services overview             |
| `/services/kitchen`            | Kitchen Design & Storage      |
| `/services/closets`            | Closets                       |
| `/services/bathroom-storage`   | Bathroom Storage Solutions    |
| `/services/built-in`           | Built-In Cabinetry            |
| `/services/cabinets`           | Custom & Commercial Cabinets  |
| `/services/home-organization`  | Home Organization             |
| `/services/wet-bars`           | Wet Bars                      |
| `/services/laundry-storage`    | Laundry Storage Solutions     |
| `/gallery`                     | Project Gallery               |
| `/our-team`                    | Our Team                      |
| `/blogs`                       | Blogs                         |
| `/contact-us`                  | Contact Us                    |

---

## 📦 Deployment

Optimized for deployment on [Vercel](https://vercel.com/). Push the repository to your Git provider,
import the project into Vercel, add the EmailJS environment variables, and deploy. Vercel Analytics
and Speed Insights are already wired in.

---

## 📄 License

Private / proprietary. All rights reserved.
