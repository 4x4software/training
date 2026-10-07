# Shortlink Agent Instructions

Use this file as the project-specific entry point for coding agents, and follow the repository's `AGENTS.md` instructions as well. `AGENTS.md` contains a generated Next.js rule; do not remove or rewrite its generated block.

## Mandatory Documentation Check

**Before generating any code, ALWAYS read every individual instruction or guidance file in `/docs` that is relevant to the task. This is a required first step—not an optional reference. Do not draft, suggest, or generate implementation code until those files have been read.**

First identify the requested task's affected areas, then read all matching `/docs` files before coding. If it is unclear which guides apply, inspect the `/docs` directory and read the potentially relevant files rather than guessing. This requirement applies to all code generation, including implementation changes, new files, tests, scripts, and code snippets.

## Guides

- Read [docs/auth.md](docs/auth.md) before generating code for authentication, sign-in or sign-up UI, or protected routes.
- Read [docs/ui.md](docs/ui.md) before generating code for UI components or screens.

## Working Rules

- Inspect the implementation around the requested change before editing. Prefer the smallest complete change and preserve established project patterns.
- Do not treat aspirational product behavior as implemented behavior. The app is an early link-shortener scaffold; confirm the current code before relying on routes, tables, or business rules.
- Do not expose secrets, database credentials, or privileged server operations to client code.
- Avoid unrelated changes, generated-file edits, and dependency additions that are not needed for the task.
- When a change affects framework APIs or configuration, follow the Next.js version guidance in `AGENTS.md` and consult the matching local Next.js documentation under `node_modules/next/dist/docs/` before coding.
