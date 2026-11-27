# gabeparra.github.io

> GitHub Pages redirect stub forwarding `gabeparra.github.io` to [gabrielparra.dev](https://gabrielparra.dev).

**Status:** `Maintained` - static GitHub Pages redirect to `https://gabrielparra.dev/`.

## Quickstart

Open `index.html` locally in a browser or serve it with Python to verify the redirect:

```bash
python3 -m http.server 8080
```

## Stack & Architecture

- **Stack:** Static HTML (`index.html`, `404.html`) deployed via GitHub Pages.
- **Behavior:** Both `index.html` and `404.html` declare `<link rel="canonical">`, `<meta http-equiv="refresh">`, and `window.location.replace(...)` targeting `https://gabrielparra.dev/`.

## License

MIT - see [LICENSE](./LICENSE).
