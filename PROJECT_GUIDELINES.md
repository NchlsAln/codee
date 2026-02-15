# Project Guidelines

## Naming Conventions
- Files: kebab-case
- Classes and types: PascalCase
- Variables and functions: camelCase

## Import Organization
1. External dependencies
2. Internal packages (monorepo)
3. Relative imports

## Error Handling
- Never throw raw strings.
- Use custom error classes with clear names and metadata.
- Prefer returning Result-like objects for recoverable errors.

## Testing Requirements
- Unit tests for utilities and pure logic.
- Integration tests for feature flows and IO.
- New features should include tests unless explicitly scoped out.
