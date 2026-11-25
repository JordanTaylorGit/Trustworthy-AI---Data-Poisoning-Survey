# Data Poisoning Attacks and Defenses: A Literature Survey

CSE 6324 (Trustworthy AI) project. Topic: **AI Security, data poisoning attacks and defenses.**
Team: Jordan Taylor, Alan Mach

## Repo map

| Path | What it is |
|---|---|
| `docs/` | The website (GitHub Pages serves this folder). This is what gets zipped for Canvas. |
| `docs/data/papers.json` | One entry per paper. The site renders from this file. |
| `docs/data/resources.json` | Software, datasets, benchmarks. |
| `planning/` | Team plan, taxonomy, comparison table, AI disclosure log, contributions. Not part of the site. |
| `notes/` | One markdown note per paper, copied from `planning/PAPER_NOTE_TEMPLATE.md`. |
| `slides/` | Slide outline and link to the Google Slides deck. |

## First-time setup

1. Create a GitHub repo, push this folder, add your teammate as a collaborator.
2. Settings > Pages > Source: **Deploy from a branch**, branch `main`, folder `/docs`.
3. The public URL will be `https://<user>.github.io/<repo>/`. Put it in `slides/README.md` and submit it on Canvas.
4. Preview locally (the site fetches JSON, so opening the file directly will not work):
   ```
   cd docs && python3 -m http.server 8000
   ```
   then open http://localhost:8000

## Working agreement

- Work on a branch, open a pull request, the other person reviews. Do not push straight to `main` near deadlines.
- Every paper starts with `"verified": false` in `papers.json`. Flip it to `true` only after you checked title, authors, venue, year, and link against the publisher or arXiv page. Remove the "unverified" badge logic before submission once everything is true.
- Log AI use in `planning/AI_DISCLOSURE_LOG.md` the same day you do it. The final disclosure on the site and slides is built from that log.
- Keep paper claims and our own interpretation separate in notes (see the template). The same rule applies on the slides.

## Submission checklist (one person submits on Canvas)

- [ ] Public site URL works in a private browser window
- [ ] ZIP of `docs/` (run `./make_zip.sh`)
- [ ] Slides (.pptx or Google Slides link, sharing set to "anyone with the link can view")
- [ ] Contribution slide names both members
- [ ] AI disclosure on the site (footer section) and on a slide
- [ ] All paper links open, all `verified` flags true
