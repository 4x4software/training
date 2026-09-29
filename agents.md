# Shortlink Agent Instructions

Use this file as the project-specific entry point for coding agents. Read the relevant guide in `docs/` before making changes, and follow the repository's `AGENTS.md` instructions as well. `AGENTS.md` contains a generated Next.js rule; do not remove or rewrite its generated block.

## Guides

Refer to the /docs folder for any specific instructions files. ALWAYS refer to these files BEFORE making any changes in code.
- Read [docs/auth.md](docs/auth.md) before changing authentication, sign-in or sign-up UI, or protected routes.
- Read [docs/ui.md](docs/ui.md) before creating or changing UI components and screens.

## Working Rules

- Inspect the implementation around the requested change before editing. Prefer the smallest complete change and preserve established project patterns.
- Do not treat aspirational product behavior as implemented behavior. The app is an early link-shortener scaffold; confirm the current code before relying on routes, tables, or business rules.
- Do not expose secrets, database credentials, or privileged server operations to client code.
- Avoid unrelated changes, generated-file edits, and dependency additions that are not needed for the task.
- When a change affects framework APIs or configuration, follow the Next.js version guidance in `AGENTS.md` and consult the matching local Next.js documentation under `node_modules/next/dist/docs/` before coding.
