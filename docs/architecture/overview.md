# Architecture Overview

Codee is a local-first AI coding assistant built as a TypeScript monorepo. The desktop shell is Electron hosting a VS Code extension runtime, while core AI logic runs in shared packages.

## Tech Stack
- TypeScript 5.3+ (strict)
- Electron (desktop shell)
- VS Code Extension API (editor integration)
- SQLite (local-first persistence)
- Local LLM inference (Ollama) with cloud fallback support

## System Architecture
```mermaid
graph TD
  User[Developer] --> VSCode[VS Code Extension UI]
  VSCode --> Engine[Core Engine]
  Engine --> Memory[Project Memory + Vector Store]
  Engine --> LLM[LLM Adapters]
  Engine --> LangServers[Language Servers]
  Memory --> SQLite[SQLite]
  LLM --> Ollama[Ollama]
  VSCode --> Desktop[Electron Shell]
```

## Package Dependencies
```mermaid
graph LR
  Apps[apps/*] --> Core[packages/core-engine]
  Apps --> UI[packages/ui-system]
  Apps --> Data[packages/data-layer]
  Core --> Languages[packages/languages/*]
  Core --> Data
```
