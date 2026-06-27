# USMLE Step 1 Study Schedule Project Context

## What this is
A PWA (Progressive Web App) plus iOS Scriptable widget for tracking a USMLE Step 1 study schedule. Deployed on Vercel, source on GitHub at https://github.com/momohaid/Step1.

## Files
- `index.html` is the entire PWA. All logic, styles, and schedule data live here.
- `sw.js` is the service worker. Bump `CACHE` version, for example `step1-v12`, on every deploy.
- `manifest.json` is the PWA manifest.
- `Step1Schedule.js` is the iOS Scriptable widget.
- `sketchy.html` is the Sketchy video reference page.

## Schedule data
`const SCHEDULE = [...]` in `index.html` is a single JSON array of day objects.

Day object shape:
```json
{"d":"Sun Jun 28","iso":"2026-06-28","h":6,"s":"Cardio","bc":"content description","fa":"FA page refs","p":"Pathoma ref","sk":"Sketchy videos","uw":20,"an":35,"dv":"Bootcamp ep","type":"normal"}
```

Types: `normal`, `rest`, `nbme`, `exam`.

## Schedule overview
- Start: Jun 28, 2026 (Sunday)
- Exam: Oct 26, 2026 (Monday)
- Saturdays are always rest/Anki days.
- 103 study days, 4 NBMEs (Forms 25, 26, 28, 30), and 2x Free 120.
- Content order: Cardio -> Pulm -> Renal -> Neuro -> Repro -> Immuno -> Psych -> Pharm -> Genetics -> Heme -> Derm -> Biostat -> Endo -> Public Health -> GI -> Biochem -> MSK -> Micro -> Pharm systems -> Dedicated review -> Final prep.

## Deploy workflow
```bash
cd ~/Claude/Projects/USMLE
git add .
git commit -m "describe change"
git push
```

Vercel auto-deploys on push. No manual deploy is needed.

## Design
Dark navy theme. Key CSS variables:
```css
--bg: #1a1f2e; --bg2: #212840; --bg3: #141929;
--border: #2d3650; --border2: #3a4568;
--text: #e2e8f5; --muted: #8899bb; --dim: #5c6f99; --xdim: #3d5080;
```

`.day.rest { background: #111622; }`
`.sk-title { color: #8899bb; }`

## Owner
Mo (momohaid@gmail.com). Pre-med student preparing for USMLE Step 1.
Preference: concise responses, no unnecessary explanation.
