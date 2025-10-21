## Project snapshot

This is a minimal TypeScript Node starter project for AES-128 decryption. Key folders:

- `src/` - TypeScript source files. Entry point: `src/index.ts`.
- `test/` - Tests run with Vitest (`npm test`).
- `dist/` - Build output (generated).
- `package.json`, `tsconfig.json` - build and dev scripts.

## What the agent needs to know

- Build: `npm run build` runs `tsc` and outputs to `dist/`.
- Run (dev): `npm run dev` executes `src/index.ts` with `ts-node`.
- Tests: `npm test` runs Vitest. Tests import source via `../src/...`.
- Lint: `npm run lint` runs ESLint configured for TypeScript (no config file in scaffold; follow project style if added).

## Architecture & patterns

- Small, single-package Node app. No framework layers are present. Keep changes contained under `src/` for logic, `test/` for tests.
- Prefer named exports for small utilities (see `src/util.ts`) so tests and other modules can import them directly.
- The `src/index.ts` file contains a `main` function exported as default for programmatic use and also runs when invoked as a script.

## Conventions discovered here

- Exports: functions in `src/` are simple exported functions (no classes or DI in scaffold).
- Tests: place tests in `test/` and import with relative paths. Use Vitest's `describe/it/expect` API.
- Error handling: `src/index.ts` prints unhandled errors and exits with code 1.

## When modifying files

- If you add runtime dependencies, update `package.json` and include minimal usage in `README.md`.
- When adding new commands, keep `scripts` in `package.json` consistent (build/test/start/dev).

## Examples (copyable)

- Add a new util and test:

  - create `src/math.ts`:
    export const add = (a: number, b: number) => a + b

  - create `test/math.test.ts`:
    import { add } from '../src/math'
    expect(add(1,2)).toBe(3)

## Files to inspect for context

- `src/index.ts` — exports `main`, runs when executed directly.
- `src/util.ts` — shows simple exported util functions.
- `test/example.test.ts` — example test demonstrating Vitest usage.
- `package.json` — scripts and devDependencies.

## Agent behavior rules

- Keep changes minimal and localized. Prefer adding files over large refactors.
- Run tests locally after changes (`npm test`). If tests are failing due to missing dev deps, note it in the PR.
- Don't add secrets or external network calls. If external integration is required, add configuration keys in `.env` and document them in `README.md`.

If anything here is unclear or you want the instructions to cover more advanced flows (CI, Docker, monorepo patterns), tell me which area to expand.
