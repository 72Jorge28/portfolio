# Locally hosted fonts

Variable Latin WOFF2 subsets, downloaded from the official Google Fonts service.
The Latin subsets include the accented characters used by the English and Spanish
interface. Both fonts are distributed under the SIL Open Font License 1.1; their
unmodified licenses are included alongside the files.

- Cormorant Garamond: normal, weights 300–700, Google Fonts version 21.
- Manrope: normal, weights 200–800, Google Fonts version 20.

`fonts.ts` loads them with `next/font/local`, `display: swap`, and CSS variables.
This avoids third-party requests at runtime and network-dependent font downloads
at build time. The WOFF2 files are unmodified; do not edit generated font data.

Sources:

- https://fonts.google.com/specimen/Cormorant+Garamond
- https://fonts.google.com/specimen/Manrope
- https://github.com/google/fonts/tree/main/ofl/cormorantgaramond
- https://github.com/google/fonts/tree/main/ofl/manrope
