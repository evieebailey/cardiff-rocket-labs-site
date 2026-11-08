# Cardiff Rocket Labs website

A standalone React, TypeScript and CSS site built with Vite.

## Local development

Run `npm install`, then `npm run dev`. Run `npm run build` to type-check and create the deployable `docs` folder; `npm run preview` previews that build.

## GitHub Pages

Pages publishes the committed `docs/` folder from `main` at https://evieebailey.github.io/cardiff-rocket-labs-site/.
After editing the source, run `npm run build`, then commit and push the source changes and regenerated `docs/` files together. The build includes photos and videos, adds `.nojekyll`, and creates entry files for direct visits to every current route. Add new routes to `scripts/prepare-pages.mjs` when adding pages.
The Vite base path is configured in `vite.config.ts`; update it if the repository name or hosting URL changes. `npm run preview` previews the generated `docs/` build.

## Editing

Page content and the ordered section structure live in `src/main.tsx`; styles live in `src/style.css`. Assets are grouped by the supplied page folders under `public/assets`. Screenshots are intentionally excluded. The home introduction and project hero videos are configured in `Home`, `Draig` and `Polaris` using the reusable `VideoHero` component.

The text files supplied for the original pages were empty, so copy was transcribed from the Wix screenshots. The truncated Draig mounting description is marked for review. Please verify all transcribed content, names and project facts before publishing.

The contact form opens the visitor's email app with a prepared message; it does not send email itself. An automatic submission requires a separately configured server or email service. The map requires a network connection to Google Maps.
