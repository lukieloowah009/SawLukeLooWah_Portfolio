# The Systems Behind Me — project plan

## Goal

Create a fast, responsive, accessible personal portfolio that feels like an interactive documentary and a thoughtful engineering console. Core line: **“I build systems. I also happen to be one.”** The visual language uses a dark archive, restrained observability details, strong typography, and personal storytelling without turning the site into a résumé or a fake live dashboard.

## Agreed stack

- **Astro** with TypeScript and static output.
- Astro components and semantic HTML for the default experience; add client-side JavaScript only for interactions that benefit from it.
- CSS custom properties and component styles for the visual system; no utility CSS dependency initially.
- Markdown and typed Astro content collections for project stories, career milestones, and writing.
- Deploy as a static site on **GitHub Pages** via GitHub Actions (free plan).

## Three steps

### 1. Homepage creation — complete

- Responsive Astro homepage, shared layout, design tokens, chapter navigation, engineering diagram, interactive timeline, and Think/Life previews are implemented.
- Current sections: Home, Build, Journey, Think, and Life. Luke asked to remove Now, so no Now section or placeholders remain.
- Luke prefers the site at approximately 125% browser zoom by default. CSS pixel-based type/spacing and responsive breakpoints are scaled together to keep the same responsive behavior.
- Added an SVG favicon and custom 404 page. Astro check and static build have succeeded; repeat checks after further changes.

### 2. Content updates — in progress

- Confirmed and applied cloud savings: **$5M+ USD annually** (Luke confirmed $5 million; resume qualifier is `$5M+`).
- Confirmed and applied scale: **tens of thousands of tenants**. Do not claim 50,000+ VMs.
- Timeline now includes: born in Yangon in 1998; UWC Red Cross Nordic in Flekke, Norway (2015–2017), IB programme, an international community of 100+ countries and lifelong friendships; moved to the U.S. on a full scholarship with one suitcase in 2017; UF, internships, and cloud career. The Norway story emphasizes shared humanity and a wider worldview.
- Think themes: AI agents; balancing AI speed with avoiding AI slop and maintaining good engineering; system design and architecture.
- Life topics: cooking cuisines around the world and being a foodie; exploring small towns and cafés; video games and manga; occasional golf (still learning); time with family and friends. Keep Life copy personal and free of technical metaphors.
- Luke asked to remove the detailed Build Field Story because he does not want that level of project detail published. It has been removed from the homepage and source content. Keep public Build material at the existing high-level overview unless Luke approves specific copy.
- Remaining in this step: Luke reviews the latest page/story and supplies any corrections. Think/Life articles can be added later and are not launch blockers.

### 3. Deployment — complete

- Repository remote is `git@github.com:lukieloowah009/SawLukeLooWah_Portfolio.git`; deploy from `main` to `https://lukieloowah009.github.io/SawLukeLooWah_Portfolio/`.
- Astro is configured with the GitHub Pages site URL and project `base`; favicon, 404 return links, and compiled assets use the project path.
- Added `.github/workflows/deploy.yml` to run `pnpm check` and `pnpm test`, then publish the static `dist/` output on pushes to `main` (and manual dispatch).
- Local validation after removing the detailed Build story: Astro check (0 diagnostics), 1 unit test, 6 production smoke tests. Build has two non-fatal Rollup annotation warnings in the installed Zod dependency.
- GitHub Pages was enabled by Luke; deployment commit `3aaff26` was pushed to `main`.
- GitHub Actions run [37256104244](https://github.com/lukieloowah009/SawLukeLooWah_Portfolio/actions/runs/37256104244) completed successfully. The live site returned HTTP 200 at [https://lukieloowah009.github.io/SawLukeLooWah_Portfolio/](https://lukieloowah009.github.io/SawLukeLooWah_Portfolio/).
- No custom domain is configured; it can be added later.

## Resume-backed facts and constraints

- Senior Software Engineer at Citrix since June 2021, promoted from Software Engineer; Computer Science B.S. at the University of Florida (2017–2021); internships at Nexlabs and Citrix.
- Resume supports the public high-level facts already shown: Senior Software Engineer at Citrix, cloud platform engineering, tens of thousands of tenants, and `$5M+` annual savings. Keep additional resume detail private unless Luke approves it for publication.

## Session handoff

Steps 1–3 are complete for the first release. The live GitHub Pages site is https://lukieloowah009.github.io/SawLukeLooWah_Portfolio/. Luke requested removal of the detailed Field Story; it is removed from the current source and a redeploy is pending. The previous public commit history still contains the earlier version; history has not been rewritten. Continue future content updates in `/Users/sawlukeloowah/Documents/Portfolio`; pushes to `main` run checks/tests and deploy automatically. No custom domain is configured.
