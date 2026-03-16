# @somedevsdo/tailwind

## 1.0.0-beta.0

### Major Changes

- ccc4ea2: Renamed `@theme` color names and source custom properties to remove `clr-`/`clr-palette-` segments.

  Source custom property renames:

  - `--clr-background` -> `--primary-background`
  - `--clr-content-background` -> `--content-background`
  - `--clr-header` -> `--header`
  - `--clr-text` -> `--primary-text`
  - `--clr-palette-ebony` -> `--ebony`
  - `--clr-palette-ebony-clay` -> `--ebony-clay`
  - `--clr-palette-emporer` -> `--emperor`
  - `--clr-palette-mystic` -> `--mystic`
  - `--clr-palette-perfume` -> `--perfume`
  - `--clr-palette-seance` -> `--seance`
  - `--clr-palette-silver` -> `--silver`
  - `--clr-palette-white` -> `--white`

  Use these new names instead:

  - `color-clr-background` -> `color-primary-background`
  - `color-clr-content-background` -> `color-content-background`
  - `color-clr-header` -> `color-header`
  - `color-clr-text` -> `color-primary-text`
  - `color-clr-palette-ebony` -> `color-ebony`
  - `color-clr-palette-ebony-clay` -> `color-ebony-clay`
  - `color-clr-palette-emporer` -> `color-emperor`
  - `color-clr-palette-mystic` -> `color-mystic`
  - `color-clr-palette-perfume` -> `color-perfume`
  - `color-clr-palette-seance` -> `color-seance`
  - `color-clr-palette-silver` -> `color-silver`
  - `color-clr-palette-white` -> `color-white`

  Typography token renames in `@theme`:

  - `font-font-family-default` -> `font-default`
  - `font-font-family-header` -> `font-header`
  - `font-font-family-text` -> `font-text`

  Update class usage accordingly, for example:

  - `bg-clr-background` -> `bg-primary-background`
  - `text-clr-text` -> `text-primary-text`
  - `font-font-family-header` -> `font-header`

- b40c183: Removed `font-heading-*` and `font-text-*` custom properties from `base.css`.

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

- 5252484: Removed custom spacing theme aliases derived from `size-margin-*` and `size-padding-*` tokens.
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

- c7f15c3: Removed `size-margin-*` and `size-padding-*` custom properties from `src/base.css`.

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

## 0.1.0

### Minor Changes

- 0431860: Initial release of `@somedevsdo/tailwind` with generated brand tokens from somedevsdo.com,
  including combined light and dark mode support in `base.css` plus automated changeset-based publishing.
