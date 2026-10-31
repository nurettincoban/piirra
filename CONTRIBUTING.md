# Contributing to Piirrä

Thank you for helping! Piirrä is a small, dependency-free static site, so contributing is easy.

## Quick start

```bash
python -m http.server 8000 -d site
```

Open http://localhost:8000, edit files, reload. There is no build step.

## Good first contributions

- **Language fixes.** Spotted a wrong Finnish form, an unnatural Turkish sentence or a typo? Edit the file in `site/data/` and open a pull request, or open an issue with the item id / word.
- **More content.** Words, sentences, dialogues, phrases and lessons follow the shapes in [docs/CONTENT.md](docs/CONTENT.md).
- **A new interface language.** Add a block to `site/js/i18n.js` and the matching field (for example `de`) to content items.

## Guidelines

- Keep the code framework-free and readable; match the style of the surrounding file.
- Every user-facing string goes through `t()` in `site/js/i18n.js`, in both English and Turkish.
- New word illustrations must make the word guessable from the picture alone, and one picture is used for only one word.
- If you use a new Lucide icon, run `python tools/build_icons.py <path-to-lucide>/dist/esm/icons` to regenerate `site/data/lucide.js`.
- When you change files listed in `site/sw.js`, bump `VERSION` there so returning visitors get the update.
- Keep content friendly and neutral: no brands, politics or scary topics.

## Licence of contributions

By contributing you agree that your contribution is licensed under CC BY-NC-SA 4.0, the same licence as the project.
