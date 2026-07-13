# POS React App

React + TypeScript POS application for a Thai sweets POS workflow. The app uses Vite, Zustand for shared state, and styled-components for reusable styled UI primitives.

## Tech Stack

- React
- TypeScript
- Vite
- Zustand
- styled-components

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run TypeScript checks:

```bash
npm run typecheck
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/              Shared UI components
  data/                    Static POS data and screen tab config
  features/
    AdminBackend/          Admin dashboard, reports, inventory, members, roles, settings
      components/
      pages/
      routes.ts
    StoreFrontend/         Storefront, order summary, payment success, login
      pages/
  router/                  Page routing by Zustand screen state
  store/                   Zustand POS store
  styles/                  Global base styles
```

## Routes

AdminBackend:

- `/dashboard`: Dashboard
- `/inventory`: Inventory
- `/members`: Members
- `/register`: Register Member
- `/reports`: Reports
- `/roles`: Role Management
- `/settings`: Settings

StoreFrontend:

- `/`: Login
- `/storefront`: Storefront
- `/summary`: Order Summary
- `/success`: Payment Success

## Notes

- Images are hotlinked in `src/data/posData.ts`.
- Navigation is handled by `src/router/PageRouter.tsx` using the `screen` value from Zustand.
- Admin sidebar collapse state is local to `AdminBackend/components/Shell.tsx`.
- CSS is split into global, AdminBackend, and StoreFrontend style files.
- Admin UI primitives use styled-components in `AdminBackend/components/AdminUi.styles.ts`.
- Shared POS types are defined in `src/types/pos.ts`.
- Order state, product quantity updates, item removal, and daily running order numbers are handled in `src/store/usePosStore.ts`.
