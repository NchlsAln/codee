# Polyglot Language System

## Overview
The polyglot system is split into two layers:

- `@codee/polyglot-knowledge`: language-agnostic concepts, mappings, templates, and validators.
- `@codee/lang-*`: language-specific runtime details, idioms, AST patterns, and templates.

## Adding a New Language
1. Create a new package in `packages/languages/<language>`.
2. Add `implementation/`, `analysis/`, and `templates/` folders.
3. Export a `<language>Definition` from `src/index.ts`.
4. Register the definition in `packages/languages/src/index.ts`.
5. Add the package to `packages/languages/package.json` and `packages/languages/tsconfig.json` references.
6. Add a path alias in `tsconfig.base.json`.

## Concept Mapping
- Add concept definitions under `packages/polyglot-knowledge/src/concepts`.
- Add mapping rules under `packages/polyglot-knowledge/src/mappings`.
- Update `translateCode` mappings when a new language pair is introduced.

## Validation Hooks
- Type preservation checks live in `validators/type-equivalence.ts`.
- Behavior checks live in `validators/behavior-preservation.ts`.
- Performance checks live in `validators/performance-comparison.ts`.

## VS Code Commands
- `codee.convertLanguage`: Convert selected code between languages.
- `codee.explainPattern`: Explain a detected concept.
- `codee.learningMode`: Guided learning prompts.
