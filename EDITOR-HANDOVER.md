# Cardiff Rocket Labs website - editor handover

## Project and purpose

This is the first local draft of a website for Cardiff Rocket Labs, a student-led team at Cardiff University. The site is intended to be independently deployable and easy for the team to edit. It has not been published as part of this work.

The project uses React functional components and hooks, TypeScript, standard CSS, Vite and React Router. Keep new components and application logic in TypeScript; avoid Wix APIs, page builders and proprietary frameworks. Prefer reusable, readable components and maintain responsive desktop, tablet and mobile layouts.

## Run and build

Open this folder (`cardiff-rocket-labs-site`) in VS Code. In its terminal run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the URL printed by Vite, normally http://localhost:5173/. The local preview works only while a dev server is running. If that address stops loading, check the terminal and restart `npm.cmd run dev`. If the port is occupied, use the URL Vite prints rather than starting competing servers.

`npm.cmd run build` performs a TypeScript check and creates the production `dist` folder. `npm.cmd run preview` serves the production build locally. When deploying to a static host, configure SPA fallback to `index.html` so that direct visits and refreshes on nested routes work.

The workspace was not a Git repository at handover; check the user's setup before assuming there is version control or a deployment pipeline.

## Project structure

- `src/main.tsx`: all routing, page content and shared components currently live here. The file is compressed into long lines; formatting or splitting into sensible page/component files would improve maintainability, but preserve content order when doing so.
- `src/style.css`: standard CSS for the entire site, including responsive breakpoints, animations and reduced motion. It is also largely compressed into long lines; some later rules override earlier ones, so inspect the cascade before editing.
- `public/assets/`: supplied photos, videos and logos grouped roughly according to their original page folders. URLs use the `asset()` helper, which encodes path segments. `public/favicon.png` is the browser icon derived from the supplied logo.
- `index.html`: document metadata and favicon reference.
- `README.md`: basic project and deployment notes. See the implementation details in this handover where they are more specific.
- `dist/` and `node_modules/`: generated build output and dependencies; both are ignored by `.gitignore`.

The original supplied material is in the sibling folder `../Cardiff rocket labs/`. Files with `Screenshot` in their names are Wix design/copy references only. **Never use those screenshots as website image assets or copy them into the site's asset folder.** Original photos, logos and videos may be used. The Chimaera Festival reference is available as a ZIP and extracted capture under `../website-reference-collector/output/website-reference-chimaera-festival.de-2026-08-06T09-41-31...`; it is inspiration for visual style and motion, not a source of branding or imagery to copy.

## Pages and navigation

Routes are defined in `Layout` in `src/main.tsx`:

- `/`: Home
- `/about`: About Us
- `/team`: Team
- `/projects`: projects index
- `/projects/draig`, `/projects/polaris`, `/projects/bowser`: project pages
- `/sponsors`: Sponsors
- `/clt`: Cardiff Launch Team
- `/contact`: Contact

The shared header is transparent and fixed so it remains visible while scrolling. The menu is a full-screen overlay. The shared footer appears on all pages and includes the team logo. The site's primary colours are black and off-white, with the user-specified red accent `#EF1C27` stored as `--red` in CSS. The user wants flowing scrolling and page transitions, with good responsive behaviour and reduced-motion support.

## Home page and media

The home page opens with `Home/Intro video.mp4` behind the Cardiff Rocket Labs heading and other hero text. The video fills the viewport with responsive cropping; the header remains visible over it. The team group photo immediately follows the hero and should remain full colour, uncropped and unobstructed by text or overlays. The round arrow scrolls to that photo.

The `Video` component plays visible videos muted, inline and in a loop using an `IntersectionObserver`. It pauses them when off-screen and enables controls if autoplay fails or reduced motion is preferred. Draig and Polaris use `VideoHero` before their headings; Bowser and CLT have videos further down their pages. The Bowser source MOV was converted to `bowser-test.mp4` for wider browser compatibility. Keep reduced-motion and autoplay fallback behaviour intact when editing video layouts. The home intro is around 53 MB, so consider user experience and compression if the team later prepares a production version.

The home page also has a welding-image section headed "IDEAS INTO ACTION." Its `Eyebrow` component currently renders the red icon and "MADE IN CARDIFF" label. The user asked how to remove that label and icon; they were shown how to delete `<Eyebrow>MADE IN CARDIFF</Eyebrow>`, but **the code was not changed**. Do not assume it was removed or remove the whole section unless asked.

## Content and references

The original page text files were empty except for `2025/2026` in the team text file. Page copy was transcribed from the supplied Wix screenshots, preserving the visible section order where possible. Some text, names, technical claims, headings and spelling require verification against the team's final approved content. A truncated Draig mounting description is explicitly marked for review in the page. Do not invent facts to fill missing copy. The user wants page text kept in its supplied chronological order, with photos logically interspersed and easy to rearrange.

The original site request used the Wix screenshots for structure and copy and Chimaera Festival for design inspiration. Subsequent user choices prioritised a Chimaera-inspired black-and-white design, the explicit red accent, video-first layouts for Home, Draig and Polaris, and a full-colour unobstructed team photo.

## Contact and map

The contact form has first name and email as required fields, plus last name, phone, company and additional information. On submit it constructs a `mailto:` message to `Cardiffrocketlabs@cardiff.ac.uk` and opens the visitor's email app. **It does not send an email itself**; the visitor must send the message. This is the approach the user explicitly selected. Direct automatic delivery would require a separately configured email service or backend and a new implementation decision.

The contact page embeds Google Maps for Cardiff University's School of Engineering. It should remain in colour; it requires a network connection to Google Maps.

## Verification and known limits

The latest TypeScript and Vite production build passed. HTTP checks previously confirmed the local homepage and home video were served successfully. Browser preview access was unavailable to the previous assistant, so the responsive layout, playback, controls, form behaviour, map and focus states have not all been visually verified in a browser. Check those in Chrome, including desktop, tablet, mobile, keyboard navigation, reduced motion, muted autoplay and its fallback.

Before publishing, review transcribed copy and images with the team, confirm the precise Engineering School location on the map, and test the static host's nested-route fallback. The previous assistant did not publish the site or configure an email delivery service.
