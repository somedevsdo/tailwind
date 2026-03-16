---
"@somedevsdo/tailwind": major
---

Removed `size-margin-*` and `size-padding-*` custom properties from `src/base.css`.

Use built-in Tailwind spacing utilities instead:

- `--size-padding-x-small` -> `p-1`
- `--size-padding-small` -> `p-2`
- `--size-padding-medium` -> `p-3`
- `--size-padding-large` -> `p-4`
- `--size-padding-x-large` -> `p-5`
- `--size-margin-x-small` -> `m-2`
- `--size-margin-small` -> `m-4`
- `--size-margin-medium` -> `m-6`
- `--size-margin-large` -> `m-8`
- `--size-margin-x-large` -> `m-10`

Apply the same spacing scale for directional variants (`px-*`, `py-*`, `mt-*`, `mb-*`, etc.).
