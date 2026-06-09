# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Install community plugins declared in quartz.config.yaml
npx quartz plugin install --from-config

# Build the site (outputs to public/)
npx quartz build

# Build and serve locally at http://localhost:8080 (auto-reloads on changes)
npx quartz build --serve

# Type-check without building
npm run check

# Format code
npm run format
```

All commands must be run from `/Users/wonhurk/quartz` (the project root). The CLI fails with `ENOENT: package.json` if run from another directory.

## Architecture

### Config system

**`quartz.config.yaml`** is the active configuration (takes precedence over `quartz.config.default.yaml`). It controls:
- Site metadata (`pageTitle`, `baseUrl`, `locale`, theme colors/fonts)
- Which community plugins are enabled and their options
- Layout positions and conditions per component (`position: left/right/beforeBody/afterBody`, `condition: not-index`, `priority`)
- Per-page-type layout overrides under `layout.byPageType` (keys: `content`, `folder`, `tag`, `canvas`, `bases`, `404`)

`quartz.config.ts` exists but is **not used** — the YAML config is what the build reads.

### Plugin system

Community plugins live in **`.quartz/plugins/`** (git-ignored, installed by `npx quartz plugin install`). Each plugin is a cloned GitHub repo with a pre-built `dist/`. The manifest of installed versions is in **`quartz.lock.json`**.

Plugin types (set in each plugin's manifest):
- **transformer** — processes markdown/HTML (e.g. `crawl-links`, `obsidian-flavored-markdown`)
- **filter** — excludes files from output (e.g. `remove-draft`)
- **emitter** — writes output files (e.g. `content-page`, `content-index`)
- **component** — UI element placed in a layout slot

The internal plugin API lives in `quartz/plugins/` and `quartz/components/`. The config loader at `quartz/plugins/loader/config-loader.ts` reads `quartz.config.yaml`, resolves plugin sources, builds layout objects, and wires everything together.

### Build pipeline

`quartz/build.ts` orchestrates three sequential processor stages:
1. **parse** (`quartz/processors/parse.ts`) — reads `content/`, runs transformer plugins, produces a unified AST per file
2. **filter** (`quartz/processors/filter.ts`) — applies filter plugins to exclude files
3. **emit** (`quartz/processors/emit.ts`) — runs emitter/page-type plugins to write `public/`

Partial rebuilds (watch mode) skip unchanged files using a content map keyed by `FilePath`.

### Content

All markdown lives in **`content/`**. Files use wiki-style slugs as filenames (e.g. `cd8-t-cells.md`). Canonical names are stored as `title:` in YAML frontmatter. Files without frontmatter that start with `# Heading` need the heading extracted into frontmatter for proper display in the explorer and page titles.

### Styling

Custom CSS goes in **`quartz/styles/custom.scss`**. It has access to theme variables via `@use "./variables.scss" as *`. The `broken` link style (grey, non-clickable) for dead wiki links is defined here.

### Key configuration decisions in this repo

- `disableBrokenWikilinks: true` on `crawl-links` — adds `broken` CSS class to links pointing to non-existent pages
- Graph View excluded from the index page via `condition: not-index` on the `graph` plugin
- `content/index.md` is the homepage; it contains the top-30 most-linked entities table
