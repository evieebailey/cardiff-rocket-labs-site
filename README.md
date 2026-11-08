# Cardiff Rocket Labs website

A standalone React, TypeScript and CSS site built with Vite.

## Local development

Run `npm install`, then `npm run dev`. Run `npm run build` to type-check and create the deployable `dist` folder; `npm run preview` previews that build. Configure a static host to serve `index.html` for routes such as `/projects/draig`.

## Editing

Page content and the ordered section structure live in `src/main.tsx`; styles live in `src/style.css`. Assets are grouped by the supplied page folders under `public/assets`. Screenshots are intentionally excluded. The home introduction and project hero videos are configured in `Home`, `Draig` and `Polaris` using the reusable `VideoHero` component.

The text files supplied for the original pages were empty, so copy was transcribed from the Wix screenshots. The truncated Draig mounting description is marked for review. Please verify all transcribed content, names and project facts before publishing.

The contact form opens the visitor's email app with a prepared message; it does not send email itself. An automatic submission requires a separately configured server or email service. The map requires a network connection to Google Maps.
