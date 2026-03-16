---
"@somedevsdo/tailwind": major
---

Removed custom spacing theme aliases derived from `size-margin-*` and `size-padding-*` tokens.
Use Tailwind's built-in spacing utilities instead:

- `p-size-padding-x-small` -> `p-1`
- `p-size-padding-small` -> `p-2`
- `p-size-padding-medium` -> `p-3`
- `p-size-padding-large` -> `p-4`
- `p-size-padding-x-large` -> `p-5`
- `m-size-margin-x-small` -> `m-2`
- `m-size-margin-small` -> `m-4`
- `m-size-margin-medium` -> `m-6`
- `m-size-margin-large` -> `m-8`
- `m-size-margin-x-large` -> `m-10`

This release also removes `tokens.json`; consume `base.css` as the package output.
