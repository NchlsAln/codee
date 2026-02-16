# Adding Patterns

This guide explains how to extend the polyglot system with new patterns and languages.

## Adding a New Pattern
1. Define the pattern detector in packages/polyglot-knowledge/src/analysis/pattern-detector.ts.
2. Add concept metadata in packages/polyglot-knowledge/src/concepts.
3. Add implementation snippets in packages/polyglot-knowledge/src/implementations.ts.
4. Implement translation logic in packages/polyglot-knowledge/src/engine/translation-engine.ts.
5. Add integration tests in packages/polyglot-knowledge/test/integration.
6. Update docs/polyglot/capabilities.md and limitations.md.

## Adding a New Language Checklist
- Create a language package in packages/languages/<lang>.
- Add language definition export in packages/languages/src/index.ts.
- Add a path alias in tsconfig.base.json.
- Provide pattern mappings in packages/polyglot-knowledge/src/mappings.
- Update Pattern Explorer implementations for the language.

## Pattern Template (Pattern #11)
Name:
- Concept ID:
- Detection regex:
- Parameters extracted:
- Translation steps:
- Validation hints:
- Performance considerations:
- Known gaps:

## Example PR: Add Go Support
- Add packages/languages/go updates (runtime, idioms, templates)
- Add mappings for python->go and typescript->go
- Extend Pattern Explorer implementations for Go
- Add integration tests for Go targets
