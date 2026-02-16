# Polyglot Limitations

## Known Gaps
- Complex control-flow restructuring is not always safe to automate.
- Rust ownership and lifetimes often require manual review.
- Decorators/macros can be semantic, not purely structural.
- Advanced TypeScript types (conditional, mapped) are simplified.
- Generic constraints and associated types may need manual tuning.
- Pattern matching between languages is lossy when exhaustiveness differs.
- Iterator/generator translations may need manual state management.
- Concurrency primitives do not map 1:1 across runtimes.

## Recommendations
- Use small, focused selections for conversion.
- Review warnings when confidence < 0.7.
- Prefer using Pattern Explorer to learn idiomatic equivalents.
