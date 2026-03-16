---
"@somedevsdo/tailwind": major
---

Renamed `@theme` color variable names to remove `clr-`/`clr-palette-` segments.

Use these new names instead:

- `color-clr-background` -> `color-primary-background`
- `color-clr-content-background` -> `color-content-background`
- `color-clr-header` -> `color-header`
- `color-clr-text` -> `color-primary-text`
- `color-clr-palette-ebony` -> `color-ebony`
- `color-clr-palette-ebony-clay` -> `color-ebony-clay`
- `color-clr-palette-emporer` -> `color-emporer`
- `color-clr-palette-mystic` -> `color-mystic`
- `color-clr-palette-perfume` -> `color-perfume`
- `color-clr-palette-seance` -> `color-seance`
- `color-clr-palette-silver` -> `color-silver`
- `color-clr-palette-white` -> `color-white`

Update class usage accordingly, for example:

- `bg-clr-background` -> `bg-primary-background`
- `text-clr-text` -> `text-primary-text`
