---
"@somedevsdo/tailwind": major
---

Renamed `@theme` color names and source custom properties to remove `clr-`/`clr-palette-` segments.

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
