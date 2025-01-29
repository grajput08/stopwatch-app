# Interactive Chess & Stopwatch App

## Features

- ⚡️ [React 18](https://beta.reactjs.org/) with Modern Hooks
- 🦾 TypeScript Implementation
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Responsive Design
- 🧭 Navigation:
  - Clean header with tab switching
  - Route-based navigation between features
  - Active tab highlighting

### ⏱️ Stopwatch Features

- Precise timing with centisecond accuracy (MM:SS:CS format)
- Interactive controls:
  - Start: Begin the timer
  - Pause: Temporarily stop
  - Reset: Return to 00:00:00
- Memory-leak free implementation
- Optimized re-rendering

### ♟️ Chessboard Features

- Dynamic grid generation (1x1 to 12x12)
- Interactive size controls:
  - Input field for direct number entry
  - Arrow key support (↑/↓) for incremental changes
  - Input validation with size limits
- Optimized rendering using:
  - useMemo for board generation
  - CSS Grid for layout
  - Responsive square sizing
- Classic alternating color pattern

### Development Tools

- [ESLint](https://eslint.org/) - TypeScript/React configuration
- [Prettier](https://prettier.io/) - Code formatting
- React Router for navigation
- Vite for fast development

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
