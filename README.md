# POS React App

React POS application built from the provided reference HTML screens. The app uses Vite, Zustand for shared state, and styled-components for reusable styled UI primitives.

## Tech Stack

- React
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
      reference/
    StoreFrontend/         Storefront, order summary, payment success, login
      pages/
      reference/
  router/                  Page routing by Zustand screen state
  store/                   Zustand POS store
  styles.css               Global app styles
```

## Screen Mapping

AdminBackend:

- `screen-01`: Reports
- `screen-02`: Role Management
- `screen-03`: Register Member
- `screen-04`: Members
- `screen-05`: Settings
- `screen-06`: Inventory
- `screen-10`: Dashboard

StoreFrontend:

- `screen-07`: Payment Success
- `screen-08`: Storefront
- `screen-09`: Empty reference screen
- `screen-11`: Storefront
- `screen-12`: Empty reference screen
- `screen-13`: Login

## Notes

- Images from the reference HTML are hotlinked in `src/data/posData.js`.
- Navigation is handled by `src/router/PageRouter.jsx` using the `screen` value from Zustand.
- Admin sidebar collapse state is local to `AdminBackend/components/Shell.jsx`.
- Order state, product quantity updates, item removal, and daily running order numbers are handled in `src/store/usePosStore.js`.
