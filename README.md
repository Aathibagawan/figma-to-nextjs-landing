# Teknic Euchner — Home Page 

A pixel-accuracy reproduction of the Figma design at:
`https://www.figma.com/design/RxgVVLOnvntqzrG6963JkE/TEKNIC-EUCHNER---INTERVIEW--Copy-`

Built with **Next.js (App Router) + JavaScript + plain React + CSS Modules** — no UI
libraries, no Tailwind.

---

## 1. Project structure

```
app/
  layout.js         Root layout — loads Space Grotesk / IBM Plex Mono / IBM Plex Sans
                     via next/font/google and mounts globals.css
  page.js            Assembles every section in order
  globals.css        CSS custom properties (design tokens) + resets

components/
  Header.jsx / .module.css          Sticky nav bar
  Hero.jsx / .module.css            "Precision That Keeps Industry Moving."
  IntroSection.jsx / .module.css    "Engineering You Can Rely On."
  StatsSection.jsx / .module.css    4 stat cards (35+ Years, 1989, ...)
  ProductsSection.jsx / .module.css 6 product cards, 3×2 grid
  WhyUsSection.jsx / .module.css    6 feature cards, "Why Teknic Euchner"
  ApplicationsSection.jsx / .module.css   6-row numbered application list
  AboutSection.jsx / .module.css    "German Know-How. Indian Manufacturing."
  QualitySection.jsx / .module.css  "Quality Isn't an Inspection."
  CtaSection.jsx / .module.css      "Let's Find the Right Solution..."
  Footer.jsx / .module.css          "Looking for Products?" CTA + footer + bottom bar
  Button.jsx / .module.css          Shared CTA button (red / outline variants)
  SectionHeading.jsx / .module.css  Shared "H2 + divider + paragraph" two-column pattern
  Icon.jsx                          Hand-built inline-SVG icon set

data/
  content.js         All real copy from the Figma file (nav, stats, products,
                     features, applications, footer) — single source of truth,
                     kept out of the JSX so components stay purely presentational
```

Components are split one-per-section (matching the Figma frame structure), with two
shared components (`Button`, `SectionHeading`) factored out because that exact
"H2 + red divider + paragraph" layout repeats across six sections — reproducing it as one
component keeps the six sections from duplicating the same markup/CSS.

## 2. Implementation decisions

- **Design tokens**: every color, font and font size below was read directly from the
  Figma file via the Figma MCP tool (`get_design_context` / variable inspection), not
  estimated from the screenshot:
  - `--color-primary: #E60000`, `--color-nav-footer: #151B20`, `--color-dark: #0F0F0F`,
    `--color-text-light: #CAD1D9`, `--color-text-muted: #5C5C5C`, `--color-card-dark: #121517`
  - Headings: **Space Grotesk** (Bold 700 for H1/H2, Medium 500 for H5)
  - Labels / nav / buttons: **IBM Plex Mono** Medium, uppercase
  - Body copy: **IBM Plex Sans** Regular
  - Type scale: H1 `50.81px/58px`, H2 `40.33px`, H5 `20.16px`, body `16px`
- **The notched button**: the red/outline CTA buttons in the design use a chamfered
  bottom-right corner. That's reproduced with `clip-path: polygon(...)` in
  `Button.module.css` rather than an image, so it scales cleanly and needs no asset.
- **Corner brackets** on stat cards and product images are drawn with CSS borders/pseudo
  elements, not the original Figma vector exports (see asset note below).
- **Layout**: 1440px design frame → `1280px` content container with `80px` side padding,
  matching the Figma frame math (1440 − 80 × 2 = 1280) exactly.

### Assets

This build environment's network sandbox blocks outbound requests to Figma's asset CDN,
so the real photography/video couldn't be exported from within this tool. Once the
exported files were supplied manually and dropped into `public/images` and
`public/video`, they were wired in with `next/image` (product photos, the About facility
photo, the Quality inspection photo) and a native `<video>` (hero background):

```
public/
  images/
    Inductive Proximity switches.png
    Single limit swithches.png
    Precision singlr & multiple limit switches.png
    Photooelectric sensors.png
    Nk limits swithches.png
    Cable connectors.png
    Facility  team photo.png
    Quality inspection photo.png
  video/
    Hero background Image, Video.mp4
```

The **simple vector graphics** (corner brackets, divider lines, social icons, stat icons,
the notched button shape) remain hand-rebuilt in CSS/inline SVG rather than exported
files — no image asset needed for those. The header logo is still set as styled text;
supply a logo file and swap it into `Header.jsx` the same way if needed.

## 3. Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 4. Production build

```bash
npm run build
npm start
```

The production build was verified in this environment (with `next/font/google` calls
temporarily stubbed, since this sandbox also blocks `fonts.googleapis.com`) and compiles
with **zero errors**:

```
✓ Compiled successfully
✓ Generating static pages (4/4)
```

With normal internet access (any real machine, CI runner, or Vercel), `next/font/google`
will fetch the fonts at build time exactly as configured in `app/layout.js` — no code
change needed.

## 5. Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables required.
4. Deploy — Vercel runs `npm run build` automatically.

## 6. Public deployment URL

`<to be filled in after you deploy — e.g. https://teknic-euchner.vercel.app>`

## 7. GitHub repository URL

`<to be filled in after you push this project to GitHub>`
