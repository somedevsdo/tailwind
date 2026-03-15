# @somedevsdo/tailwind

Shared brand tokens for Tailwind CSS v4 projects.

## Install

```bash
pnpm add @somedevsdo/tailwind
```

## Usage

Import a single stylesheet that includes light and dark tokens:

```css
@import "@somedevsdo/tailwind/base.css";
```

Dark mode tokens are applied when an ancestor has `data-theme="dark"`.

## Local development

```bash
pnpm install
pnpm build
```

`pnpm build` fetches token variables from `https://somedevsdo.com` and regenerates:

- `base.css`
- `tokens.json`

## Release flow

This repo uses [Changesets](https://github.com/changesets/changesets).

1. Add a changeset:

   ```bash
   pnpm changeset
   ```

2. Merge to `main`.
3. GitHub Actions opens/updates a release PR.
4. Merging the release PR publishes to GitHub Packages automatically.
