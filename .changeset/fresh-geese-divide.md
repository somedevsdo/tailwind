---
"@somedevsdo/tailwind": major
---

Removed `font-heading-*` and `font-text-*` custom properties from `base.css`.

Use built-in Tailwind typography utilities where possible:

Recommended built-in replacements:

- `font-text-x-small` -> `text-xs`
- `font-text-small` -> `text-sm`
- `font-text-medium` -> `text-base`
- `font-text-large` -> `text-lg`
- `font-heading-x-small` -> `text-lg font-bold`
- `font-heading-large` -> `text-4xl font-bold`

For `font-heading-small`, `font-heading-medium`, and `font-heading-x-large`, there is no exact built-in Tailwind size match. Recommended closest built-in replacements are:

- `font-heading-small` -> `text-2xl font-bold leading-tight`
- `font-heading-medium` -> `text-3xl font-bold leading-tight`
- `font-heading-x-large` -> `text-5xl font-bold leading-tight`

If you need exact parity instead of closest match, use arbitrary values (for example, `text-[1.375rem]`, `text-[1.75rem]`, `text-[2.75rem]`).
