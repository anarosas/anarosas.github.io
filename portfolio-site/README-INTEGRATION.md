# Merging this into your existing Jekyll repo

This scaffold was built standalone so it wouldn't touch your blog. Nothing
here assumes it owns your repo — copy these pieces in, keep everything else.

## 1. Copy these folders/files as-is
```
_layouts/          → default.html, home.html, post.html, page.html
_includes/         → head.html, window-chrome.html, footer.html
_data/projects.yml
assets/css/style.scss
assets/js/terminal.js
```
If you already have files with these exact names, back them up first —
these will overwrite on copy.

## 2. Merge _config.yml
Don't replace your `_config.yml`. Open the one in this scaffold and copy in:
- `author:` block (used by the whoami section and footer)
- the `defaults:` block — **merge**, don't duplicate, if you already have a
  `defaults:` key. This is what makes existing posts pick up `layout: post`
  automatically without editing every post's front matter.
- `jekyll-feed` under `plugins:` if you don't have it already

## 3. Your existing blog / _posts
Your `_posts/` folder stays exactly where it is — nothing here reads or
depends on post content beyond `title`, `date`, and `tags`, which Jekyll
already generates for you. The new `post.html` layout will apply
automatically via the `defaults` block above.

Delete the sample post: `_posts/2026-01-15-reducing-api-latency.md`.

## 4. Home page
`index.md` is new — if you already have a homepage, decide whether to
replace it or rename this one. The `home.html` layout pulls in:
- `site.data.projects` (edit `_data/projects.yml` with your real projects)
- `site.posts` (your real posts, most recent 5)

## 5. Blog index page
`blog.md` creates a `/blog/` page listing all posts, git-log style. If you
already have a blog index at a different URL, either redirect to `/blog/`
or copy this file's content into your existing one (keep your `permalink`).

## 6. Fonts
`head.html` loads JetBrains Mono from Google Fonts via `<link>` tags. If you
prefer to self-host for performance/privacy, download the font files and
swap the `<link>` tags for a local `@font-face` in `style.scss`.

## 7. Test locally
```bash
bundle exec jekyll serve
```
Visit `http://localhost:4000` — the tab bar's "blog.md" and "projects.json"
links assume the site is served from the domain root. If your GitHub Pages
site is served from a subpath (e.g. `username.github.io/reponame`), set
`baseurl: "/reponame"` in `_config.yml` — all the `relative_url` filters
already used throughout will pick that up automatically.
