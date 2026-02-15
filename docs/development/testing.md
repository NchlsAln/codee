# Testing Strategy

Codee uses a testing pyramid that scales from fast unit checks to full UI flows.

## Test Layers
- Unit: pure logic for core engine and language packages.
- Integration: multi-module flows (context assembly, embeddings, memory, config merges).
- Extension: VS Code activation and command registration.
- E2E: webview UI flows with a mocked host bridge.

## Running Tests
From the repo root:

```bash
npm run test:unit
npm run test:integration
npm run test:extension
npm run test:e2e
```

To run the full suite:

```bash
npm run test:all
```

## Package-Level Commands
- Core engine
	- `npm --prefix packages/core-engine run test:unit`
	- `npm --prefix packages/core-engine run test:integration`
- Languages
	- `npm --prefix packages/languages run test`
- VS Code extension
	- `npm --prefix apps/codee-vscode run test:extension`

## Coverage
- Core engine thresholds live in [packages/core-engine/jest.config.cjs](packages/core-engine/jest.config.cjs).
- Language package thresholds live in [packages/languages/jest.config.cjs](packages/languages/jest.config.cjs).

## Fixtures
- Core engine fixtures: [packages/core-engine/src/test/fixtures/sample-project](packages/core-engine/src/test/fixtures/sample-project)
- E2E fixtures: [e2e/fixtures](e2e/fixtures)

## Notes
- `test:e2e` builds the webview bundle before running Playwright tests.
- Extension tests launch an isolated VS Code instance via `@vscode/test-electron`.
