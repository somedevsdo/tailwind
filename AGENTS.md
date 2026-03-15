# AGENTS.md

## Purpose

This repository publishes `@somedevsdo/tailwind`, a PNPM-managed package containing somedevsdo design tokens for Tailwind CSS v4.

## Package outputs

- `base.css`: includes both light (`:root`) and dark (`[data-theme="dark"]`) token variables plus Tailwind v4 `@theme` mappings.
- `tokens.json`: extracted source tokens for traceability.

## How tokens are sourced

1. `scripts/extract-brand-tokens.mjs` fetches `https://somedevsdo.com`.
2. It resolves current Astro stylesheet URL(s) dynamically.
3. It extracts CSS custom properties from:
   - `:root`
   - `[data-theme=dark]`
4. It writes `base.css` and `tokens.json`.

## Commands

- `pnpm tokens:extract`: fetch and regenerate token artifacts.
- `pnpm build`: same as `pnpm tokens:extract`.
- `pnpm changeset`: create a new changeset file.
- `pnpm version-packages`: bump versions from changesets.
- `pnpm release`: build and publish via changesets.

## Release automation

Workflow: `.github/workflows/changesets.yml`

- Trigger: push to `main`.
- Behavior:
  - creates/updates release PR when unpublished changesets exist,
  - publishes package when release PR merges.

## Registry configuration

- Package registry: GitHub Packages (`https://npm.pkg.github.com`).
- Scope registry in `.npmrc`:
  - `@somedevsdo:registry=https://npm.pkg.github.com`

## Required GitHub Actions permissions

- `contents: write`
- `pull-requests: write`
- `packages: write`

## Required secrets

- `GITHUB_TOKEN` is used for release PR creation and package publishing.
- If org policy blocks publish with `GITHUB_TOKEN`, provide a PAT via `NODE_AUTH_TOKEN` secret.

## Operational notes

- Use PNPM exclusively.
- Commit generated `base.css` and `tokens.json` when source tokens change.
- Add a changeset for every user-facing package change.
