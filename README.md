# TruckSpot — Logo & Landing Page

Contest entry for the TruckSpot branding + single-scroll landing page brief.

## Run locally

**You must serve over HTTP.** ES modules do not work from `file://`.

```bash
# Option A — Node
npm start                  # → http://localhost:3000

# Option B — Python
python3 -m http.server 3000

# Option C — VS Code Live Server
# Right-click index.html → Open with Live Server
```

Then open:

- **Landing page:** http://localhost:3000/
- **Contest board (screenshot this):** http://localhost:3000/presentation.html

## File map

| Path | Purpose |
|---|---|
| `index.html` | The single-scroll landing page |
| `presentation.html` | 1600px contest board (desktop + mobile + logo + palette) |
| `css/styles.css` | All styles, sectioned with clear headers |
| `js/app.js` | Entry point — wires everything |
| `js/data/trucks.js` | Seed data for 6 trucks |
| `js/modules/trucks.js` | Filter state + pub/sub |
| `js/modules/map.js` | Leaflet init, markers, visibility |
| `js/modules/cards.js` | Renders nearby list + menu cards |
| `js/modules/alerts.js` | Email + push opt-in with localStorage |
| `assets/logos/*.svg` | Logo variants + favicon |

## How the map works

- Uses **Leaflet 1.9.4** from unpkg + **OpenStreetMap** tiles.
- **Zero API keys**, zero backend.
- Filtering chips both update the truck list **and** hide/show map markers via `setVisibleTrucks`.
- Clicking a nearby list item flies the map to that marker.

## External libraries

| Library | Version | Source |
|---|---|---|
| Leaflet | 1.9.4 | unpkg CDN (`https://unpkg.com/leaflet@1.9.4`) |
| Fonts | Google Fonts | `Sora`, `Inter` |

No build step, no npm dependencies required at runtime.

## Handoff notes (for winner stage)

- **SVG → PNG export:** open each SVG in Figma or Inkscape and export at:
  - Wordmark: 512 px tall, color + mono dark + mono light.
  - Icon: 1024×1024.
  - Favicon: 32×32 and 180×180 (apple-touch-icon).
- **Figma organization:** one page per asset type (`01-Brand`, `02-Desktop`, `03-Mobile`, `04-Cards`), with a library file holding the color variables and the logo components.
- **Deployment:** `vercel deploy` or `netlify deploy --dir .` — no environment variables needed.

## Performance

- Single CSS file, four JS modules (~7 KB total uncompressed).
- Leaflet CSS/JS preconnected, lazy map markers.
- System fonts fallback if Google Fonts is blocked.
- Images are all SVG (zero raster assets except optional screenshots).

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`, `aside`).
- Skip-link, focus rings, `aria-pressed` on filters, `aria-live` success/error messages.
- Respects `prefers-reduced-motion`.
- All form fields labeled, error state announced.
