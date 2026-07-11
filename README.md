# Jack -- 3D Creator Portfolio

A dark-themed, single-page 3D creator portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Sections

1. **Hero** -- massive gradient headline, magnetic-hover portrait, nav, and CTA.
2. **Marquee** -- two rows of scroll-driven GIF tiles (opposite directions).
3. **About** -- character-by-character scroll-reveal copy with 4 decorative corner images.
4. **Services** -- numbered list of 5 offerings.
5. **Projects** -- 3 sticky, scale-stacking project cards with image grids.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
```

## Notes

- All images are pulled from the external URLs specified in the design brief (figma.site, motionsites.ai, higgs.ai/CloudFront). An internet connection is required to see them load.
- The `Kanit` typeface is loaded from Google Fonts in `index.html`.
- `prefers-reduced-motion` is respected globally via `src/index.css`.
- Nav links (`About`, `Price`, `Projects`, `Contact`) scroll to `#about`, `#price`, `#projects` anchors; `Contact` has no dedicated section in the brief, so it currently has no target anchor -- wire it up to a contact section/modal if you add one.
