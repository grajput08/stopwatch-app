# Stopwatch App

## Features

- ⚡️ [React 18](https://beta.reactjs.org/)
- 🦾 TypeScript, of course
- 🎨 [Tailwind](https://tailwindcss.com/) - next generation utility-first CSS
- ⏱️ Stopwatch functionality:
  - Precise timing with centisecond accuracy
  - Start/Pause/Reset controls
  - Clean time display (MM:SS:CS format)
  - Memory-leak free implementation

### Coding Style

- [ESLint](https://eslint.org/) - configured for React/Hooks & TypeScript
- [Prettier](https://prettier.io/)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)

### Development

Just run and visit http://127.0.0.1:3000/

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

### Issues

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.
