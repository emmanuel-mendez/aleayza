# Aleayza

<p align="center">
  <img align="center" alt="Aleayza" src="https://raw.githubusercontent.com/emmanuel-mendez/aleayza/main/public/images/aleayza-repository-open-graph.png"/>
</p>

Aleayza lets you create both your personal portfolio website and professional CV in one place. This minimalist template is designed for high performance, is fully customizable, and is easily scalable. Inspired by https://github.com/BartoszJarocki/cv and https://github.com/gndx/ev0-astro-theme projects.

## Project Structure

Inside the project you'll see the following folders:

```
.
├── public/
└── src/
    ├── components/
    │   ├── atoms/
    │   ├── molecules/
    │   └── organisms/
    ├── layouts/
    ├── pages/
    └── styles/
        ├── elements/
        ├── generic/
        ├── objects/
        ├── settings/
        ├── tools/
        └── utilities/
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where I like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
