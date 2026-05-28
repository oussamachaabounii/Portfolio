# Portfolio — Oussama Chaabouni

Personal portfolio. Static site (React + Babel-in-browser, no build step).

## Live
Deployed via GitHub Pages: https://oussamachaabounii.github.io/Portfolio/

## Local preview
Open `index.html` with any static server (or just double-click — but a server is more reliable because of the `src/*.jsx` fetches):

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Structure
```
index.html         # entry, loads React + Babel + scripts
tweaks-panel.jsx   # Tweaks panel component
src/
  data.jsx         # profile, projects, stack, experience, stats
  sections.jsx     # Nav, Hero, About, Stats, AI, Work, Stack, Experience, Contact
  main.jsx         # App composition + theme tweaks
```

## Deploy
Already wired for GitHub Pages on `main` branch.
Settings → Pages → Source: `main` / root.
