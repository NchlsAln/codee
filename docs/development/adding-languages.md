# Adding a Language

## Steps
1. Create a new package under `packages/languages/<language>`.
2. Implement:
   - `LanguageServer.ts`
   - `LanguageAnalyzer.ts`
   - `CodeTemplates.ts`
   - `PromptEngineering.ts`
3. Register the language in the common registry.
4. Add prompts and templates for common tasks.
5. Add extensions for detection.

## Checklist
- LSP command configured
- Tree-sitter grammar listed
- Templates include tests and framework stubs
- Prompts include few-shot examples
