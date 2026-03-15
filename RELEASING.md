# Releasing `@somedevsdo/tailwind`

This package is released with Changesets and GitHub Actions.

## One-time repository setup

1. Ensure this repository is hosted in GitHub and `main` is the release branch.
2. Enable Actions for the repository.
3. In repository settings, grant workflow `GITHUB_TOKEN` read and write permissions.
4. Confirm package publishing to GitHub Packages is allowed by org/repo policy.

### Optional secret (only if required by org policy)

- `NODE_AUTH_TOKEN`: a PAT with `write:packages` and `read:packages`.

The workflow already requests required permissions:

- `contents: write`
- `pull-requests: write`
- `packages: write`

## Standard release flow

1. Make package changes.
2. Add a changeset:

   ```bash
   pnpm changeset
   ```

3. Commit code + changeset and merge to `main`.
4. GitHub Action creates or updates a release PR.
5. Merge the release PR.
6. GitHub Action publishes `@somedevsdo/tailwind` to `https://npm.pkg.github.com`.

## Quick verification

1. Confirm workflow `Release` succeeded in Actions.
2. Confirm the package appears in GitHub Packages.
3. Validate install/import in a consumer project:

   ```bash
   pnpm add @somedevsdo/tailwind
   ```

   ```css
   @import "@somedevsdo/tailwind/base.css";
   ```
