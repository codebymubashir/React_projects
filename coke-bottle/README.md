# Coke Bottle: Immersive 3D Scroll Experience

React + Vite + Tailwind + React Three Fiber + Drei + GSAP ScrollTrigger + Framer Motion + Lenis + Lucide.
One 3D can stays mounted for the whole page. Its position, rotation, scale, camera, lights and the
pour into the footer glass are all driven by scroll progress.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```
Node 18+ required.

## Assets
No files to add. Everything is generated at runtime:
- Can, glass, ice: procedural Three.js geometry
- Label, bump, condensation, bubble and bokeh sprites: canvas textures (`src/three/textures.js`)
- Reflections: drei `Environment` + `Lightformer` studio (no HDR download)
- Fonts: Oswald, Inter, Yellowtail from Google Fonts (`index.html`). They fall back to system fonts offline.

Optional upgrade for photoreal results: load a `.glb` can with drei `useGLTF` in `src/three/Can.jsx`
(keep the `rig` and `spin` groups so the scroll animation keeps working) and put the file in `public/models/`.

## Structure
```
src/
  App.jsx                    loader, 3D layer (lazy), navbar, content, footer
  lib/state.js               shared mutable scene state S (GSAP writes, R3F reads)
  lib/keyframes.js           per-section can poses + per-breakpoint layouts + pour pose
  hooks/useScrollTimeline.js Lenis + one scrubbed GSAP timeline + matchMedia (cleaned up on unmount)
  three/                     BottleScene, Can, Tumbler, Particles, textures
  components/                Navbar, HeroSection, StorySection, IngredientsSection,
                             MomentsSection, FinalCTA, Footer, LoadingScreen, ScrollExperience
```

## How to change things
- Can position/rotation per section: `src/lib/keyframes.js` (one entry per section, in order).
- Pour timing: the `tl.to(...)` positions at the bottom of `useScrollTimeline.js` (1 unit = 100vh).
- Copy: the section components. Colors: `tailwind.config.js` and `src/index.css`.
- Mobile / tablet / desktop framing: `LAYOUTS` in `keyframes.js`.

## Notes
- Respects `prefers-reduced-motion` (no Lenis, no idle spin, no particle motion, direct scrub).
- If WebGL fails, the page still works and shows a short notice.
- Concept project. Coca-Cola is a trademark of The Coca-Cola Company; this is not an official product.
