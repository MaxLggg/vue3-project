# AGENTS.md

## Cursor Cloud specific instructions

This is a **Vue 3 + Vite + TypeScript** frontend-only SPA ("Vue3 Study"). No backend, database, or Docker services are needed.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (Vite, default port 5173) |
| Lint (with autofix) | `npm run lint` |
| Build | `npm run build` |
| Type-check | `npm run type-check` |
| Format | `npm run format` |

See `README.md` for the full list of scripts.

### Notes

- The dev server binds to `localhost:5173` by default. Use `npm run dev -- --host 0.0.0.0` to expose it on all interfaces.
- There is no `test:unit` script defined in `package.json` despite being referenced in `README.md`; Vitest is installed but no test files exist. You can run `npx vitest run` if tests are added later.
- ESLint config is in `.eslintrc.cjs` and uses `vue-eslint-parser` with `@typescript-eslint/parser`.
- The project uses both Element Plus and Ant Design Vue UI libraries; auto-import is configured in `vite.config.ts` for Element Plus only.
