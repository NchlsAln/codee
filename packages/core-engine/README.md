# Core Engine

AI orchestration layer for Codee. This package owns prompt routing, tool execution, and local-first model integration.

## Decisions
- Local inference via Ollama first, with cloud providers pluggable later.
- LangChain is used initially, but the abstraction should allow custom orchestration.
