# Adding portfolio content

All content is built into the static site by Astro at build time.

- **Timeline:** edit `src/data/timeline.json`. Keep entries factual and preserve the `id`, `order`, `period`, `title`, `summary`, and `tag` fields. `detail` is the expandable story.
- **Project stories:** add a Markdown file under `src/content/projects/` using the schema in `src/content.config.ts`. Keep `status: draft` until Luke approves the wording, metrics, and details safe to share.
- **Think and Life writing:** add a Markdown file under `src/content/writing/`. Set `section` to `think` or `life`; keep `status: draft` until reviewed. The two template files show the required frontmatter.

Draft projects and writing are not rendered on the homepage. Any future public listing or detail route should query only entries whose status is `published`.
