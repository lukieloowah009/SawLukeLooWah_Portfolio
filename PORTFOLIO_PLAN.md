# The Systems Behind Me — project plan

## Goal

Create a fast, responsive, accessible personal portfolio that feels like an interactive documentary and a thoughtful engineering console. Core line: **“I build systems. I also happen to be one.”** The visual language uses a dark archive, restrained observability details, strong typography, and personal storytelling without turning the site into a résumé or a fake live dashboard.

## Agreed stack

- **Astro** with TypeScript and static output.
- Astro components and semantic HTML for the default experience; add client-side JavaScript only for interactions that benefit from it.
- CSS custom properties and component styles for the visual system; no utility CSS dependency initially.
- Markdown and typed Astro content collections for project stories, career milestones, and writing.
- Deploy as a static site on **Vercel** (recommended) or Cloudflare (alternative; select during step 3).

## Three steps

### 1. Homepage creation — complete

- Responsive Astro homepage, shared layout, design tokens, chapter navigation, engineering diagram, interactive timeline, and Think/Life previews are implemented.
- Current sections: Home, Build, Journey, Think, and Life. Luke asked to remove Now, so no Now section or placeholders remain.
- Added an SVG favicon and custom 404 page. Astro check and static build have succeeded; repeat checks after further changes.

### 2. Content updates — in progress

- Confirmed and applied cloud savings: **$5M+ USD annually** (Luke confirmed $5 million; resume qualifier is `$5M+`).
- Confirmed and applied scale: **tens of thousands of tenants**. Do not claim 50,000+ VMs.
- Timeline now includes: born in Yangon in 1998; UWC Red Cross Nordic in Flekke, Norway (2015–2017), IB programme, an international community of 100+ countries and lifelong friendships; moved to the U.S. on a full scholarship with one suitcase in 2017; UF, internships, and cloud career. The Norway story emphasizes shared humanity and a wider worldview.
- Think themes: AI agents; balancing AI speed with avoiding AI slop and maintaining good engineering; system design and architecture.
- Life topics: cooking cuisines around the world and being a foodie; exploring small towns and cafés; video games and manga; occasional golf (still learning); time with family and friends. Keep Life copy personal and free of technical metaphors.
- Build story is published on the homepage, based on the resume and Luke's clarification. It covers multi-tenant provisioning/lifecycle workflows for tens of thousands of tenants; control-plane expansion to GCP and Azure West Europe; disaster recovery; RBAC/deployment challenges; and documented impact. Do not add internal topology, unsupported technical specifics, or invented retrospective claims.
- Remaining in this step: Luke reviews the latest page/story and supplies any corrections. Think/Life articles can be added later and are not launch blockers.

### 3. Deployment — later

- Recommendation: **Vercel** for static Astro with Git-based previews and no extra adapter configuration. Cloudflare is an alternative.
- No Git remote is configured. Choose/confirm repository destination and visibility, hosting account, and custom domain or provider subdomain before publishing.
- Verify production build, responsive behavior, keyboard accessibility, reduced-motion behavior, metadata/social preview, and deployed experience. Record live URL here.

## Resume-backed facts and constraints

- Senior Software Engineer at Citrix since June 2021, promoted from Software Engineer; Computer Science B.S. at the University of Florida (2017–2021); internships at Nexlabs and Citrix.
- Resume reports ownership of cloud provisioning/control-plane services for tens of thousands of tenants in Azure-heavy multi-cloud environments; lifecycle workflows for upgrades, migrations, rollbacks, and reprovisioning; disaster-recovery drills; co-led expansion to Western Europe; major latency reductions, elimination of recurring outages, and `$5M+` annual cloud savings.
- Luke clarified that control-plane expansion also included GCP, and specifically Azure West Europe.
- Use only information from the resume or explicit user corrections for the public Build story. Avoid exposing specific architecture details that were not provided.

## Session handoff

Continue with step 2 in `/Users/sawlukeloowah/Documents/Portfolio`. The latest request updated Build to a resume-based public story and removed Now entirely; these changes are in the source and this plan. Next, ensure the browser preview reflects the current source, invite Luke's copy corrections, then proceed to step 3 after review. Step 3 still needs a Git remote/repository destination, hosting account selection (Vercel recommended; Cloudflare alternative), and domain/subdomain choice. Complete final responsive/accessibility review, deploy, and record the live URL here.
