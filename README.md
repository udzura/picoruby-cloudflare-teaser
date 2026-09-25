# PicoRuby × Cloudflare Workers teaser

A bilingual static teaser site for the PicoRuby Cloudflare Workers runtime.
The deployable site is kept in `dist/` with no build step.

## Preview locally

```console
python3 -m http.server 4173 --directory dist
```

Open <http://localhost:4173/>.

The landing page links to the bilingual [binding reference](http://localhost:4173/bindings.html),
which is also available directly at `/bindings.html` after deployment.

In `bindings.html`, every piece of prose is written twice, as sibling elements
with `lang="en"` and `lang="ja"`; `styles.css` hides the inactive language.
Code samples are shared. Mark code blocks as
`<figure class="ref-code"><figcaption>…</figcaption><pre><code data-code="ruby">`
(`ruby`, `jsonc`, `js`, or `sh`) and `guide.js` adds highlighting and a copy
button. New sections need an `id`, the `ref-section` class, and a matching
link in the sidebar nav.

## Deploy to Cloudflare Pages

For a Git-integrated Pages project, use:

- Build command: leave blank
- Build output directory: `dist`

For Direct Upload with Wrangler:

```console
npx wrangler pages deploy
```

`wrangler.jsonc` points Pages at `dist/`. The first direct upload may require
`npx wrangler pages project create` and Cloudflare authentication. Deployment
is intentionally not performed by this repository's local preview workflow.

## Content source

The product claims, compatibility boundaries, code samples, and links are
based on the adjacent
[`picoruby-cloudflare-worker-wasm`](https://github.com/udzura/picoruby-cloudflare-worker-wasm)
repository, including its `README.md`, `docs/`, and `examples/` directories.
The quick-start flow is based on
[`picoruby-cloudflare-template`](https://github.com/udzura/picoruby-cloudflare-template),
which provides the `picoruby-cloudflare` project generator.
