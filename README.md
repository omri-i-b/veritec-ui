# Veritec UI

React + TypeScript + MUI implementation of the Veritec AI design system.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/veritec-ui/

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repo named `veritec-ui`
2. Push this code to the repo
3. Go to Settings > Pages
4. Set Source to "GitHub Actions"
5. The workflow will automatically deploy on push to `main`

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Sidebar.tsx
│   ├── Breadcrumbs.tsx
│   ├── CaseHeader.tsx
│   ├── FilterToolbar.tsx
│   └── EventsTable.tsx
├── pages/             # Page components
│   └── EventsPage.tsx
├── theme/             # MUI theme configuration
│   └── theme.ts
└── App.tsx
```

## Design System

Based on Veritec AI Figma design system with custom color tokens:
- Blue-custom (primary)
- Grey-custom (neutral)
- Green-custom (success)
- Red-custom (error)

## Tech Stack

- Vite
- React 18
- TypeScript
- MUI (Material UI) v6
- Inter font
