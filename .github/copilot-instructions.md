# OpenCut Copilot Instructions

## Build, test, and lint commands

Tool versions are pinned in `.prototools` (`moon`, `bun`, `rust`). Run this once after cloning:

```sh
proto use
```

Primary task runner is Moon (workspace auto-discovers `apps/*`):

```sh
moon ci                # CI entrypoint used by .github/workflows/bun-ci.yml
moon run web:dev       # Vite/TanStack Start on localhost:5173
moon run api:dev       # Wrangler dev for Cloudflare Worker API on localhost:8787
moon run desktop:dev   # Cargo run (GPUI desktop shell)
moon run web:build
moon run api:build
moon run desktop:build
moon run desktop:check # cargo check
moon run web:test      # vitest run (currently no committed test files)
```

Run a single web test file or test name with Vitest directly from `apps/web`:

```sh
cd apps/web
bun run test src/path/to/file.test.ts
bun run test src/path/to/file.test.ts -t "test name"
```

There is currently no dedicated lint task configured in Moon or package scripts.

## High-level architecture

This repository is a multi-runtime monorepo with three application targets under `apps/`:

1. **`apps/web`**: TanStack Start + Vite + React 19 app, deployed to Cloudflare Workers (`wrangler.jsonc`, `main: "@tanstack/react-start/server-entry"`).
2. **`apps/api`**: Elysia API running on Cloudflare Workers (`src/index.ts` + `CloudflareAdapter`).
3. **`apps/desktop`**: Rust/GPUI desktop shell (`src/main.rs`) managed in the workspace Cargo setup (`/Cargo.toml` + `apps/desktop/Cargo.toml`).

Moon is the cross-project orchestrator (`.moon/workspace.yml`) and CI executes `moon ci` across macOS/Linux/Windows.

## Key conventions in this codebase

- **TanStack file routing** (`apps/web/src/routes/*`) is source-of-truth. `apps/web/src/routeTree.gen.ts` is generated and must not be edited.
- **Web path aliases** are `#/*` (and `@/*`), mapped to `apps/web/src/*` in `tsconfig.json`; current code commonly keeps explicit `.ts` suffixes in alias imports.
- **UI layer** in `apps/web/src/components/ui` is built around Base UI + shadcn patterns; shared class composition uses `cn()` from `src/lib/utils.ts`.
- **API endpoints** are defined by chaining handlers on a single Elysia instance and must keep `.compile()` (AoT compile trigger) at the end.
- **Desktop app** is currently a scaffolded GPUI window; treat it as an early shell and keep changes small and incremental unless a task explicitly broadens scope.
