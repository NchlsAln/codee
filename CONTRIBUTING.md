# Contributing

## Local Development
- `npm run dev:hot` for hot reload (extension + engine).
- `npm run test:watch` for TDD loops.
- `npm run lint:fix` to auto-fix lint issues.
- `npm run generate:language -- <languageId>` to scaffold a new language package.

## Dev Container
Use `.devcontainer/devcontainer.json` for a consistent environment.

## Code Style
- Enforced by ESLint and Prettier.

## Commit Messages
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`.
- Changelogs are generated with `npm run release:notes`.

## Pull Requests
- Include a clear description and screenshots where relevant.
- Link issues and document breaking changes.
- Follow the PR checklist in `.github/pull_request_template.md`.

## Code Review Checklist
- Tests added or updated
- No sensitive data logged
- Performance impact considered
- Documentation updated

## CLA
- Contributors must sign the CLA before merge.

## PR Template
```
## Summary

## Testing

## Screenshots (if UI)

## Checklist
- [ ] Tests
- [ ] Docs
```
