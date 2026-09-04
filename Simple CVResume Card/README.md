# Simple CV / Resume Card

A clean, responsive, single-page CV/resume built with plain HTML, CSS and JavaScript. Made for Task 2 of the SpireX Foundation web development internship.

## Features
- Printable single-page resume layout (use the "Print / Save PDF" button, or your browser's print dialog)
- Light / dark mode toggle for on-screen reading; always prints clean black-on-white regardless of theme
- Education, skills, experience and projects laid out as clear, scannable entries
- No frameworks, no build step

## Tech stack
- HTML5
- CSS3 (custom properties, Flexbox, a dedicated print stylesheet)
- Vanilla JavaScript
- Source Serif 4 & Source Sans 3 via Google Fonts

## Run it
Open `index.html` in any browser. No build step needed.

## Customize it
Everything lives in `index.html`, with matching styles in `style.css`. In particular, replace:

| Field | Where |
|---|---|
| Name, title, contact details | the `<header class="resume-header">` block |
| Profile summary | the **Profile** section |
| Education | the **Education** entry, currently a bracketed placeholder |
| Skills | the three lines under **Skills** |
| Experience | the **Experience** entry (the SpireX internship one is already real; add more roles if you have them) |
| Projects | the three entries under **Projects** |

Colors and fonts are CSS custom properties at the top of `style.css`: `:root` for light mode, `[data-theme="dark"]` for dark. Change `--accent` to restyle the whole page.

## Deploy it
Push this folder to a GitHub repo and turn on GitHub Pages (Settings, then Pages, then Deploy from branch) for a live link to share alongside your repo.

## Author
Abdulsalam Abubakar Abolaji
