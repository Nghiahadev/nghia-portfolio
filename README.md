# Nghia Ha Portfolio

Organized Next.js App Router portfolio with separate layout, section, UI, data, type, library, and API folders. The original design selectors and interactions are preserved.

## Structure

```text
app/                  App Router pages, project routes, contact API, global CSS
components/layout/    Navbar and Footer
components/sections/  Home-page sections
components/ui/        Reusable cards, buttons, titles, skill bars, and modal UI
data/                 Typed portfolio content
types/                Shared TypeScript interfaces
lib/                  Utilities and constants
public/               Browser interaction script and future local assets
```

The selector-driven portfolio stylesheet remains in `app/globals.css`. This is intentional: the animations and interaction script rely on the original global class names. New reusable UI components use colocated CSS Modules.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.
