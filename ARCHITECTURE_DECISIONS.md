# Architecture Decisions

## ADR-001: Electron + VS Code Extension
- Status: Accepted
- Context: Need a native desktop shell with editor integration.
- Decision: Use Electron for the desktop shell and VS Code extension host for UI and editor APIs.
- Consequences: Fast delivery and strong editor feature support.

## ADR-002: Local-First with SQLite
- Status: Accepted
- Context: Users require offline operation and data privacy.
- Decision: Store data locally in SQLite with migrations.
- Consequences: Predictable upgrades and privacy by default.

## ADR-003: Monorepo Structure
- Status: Accepted
- Context: Multiple apps and shared packages.
- Decision: Use a monorepo with apps, packages, tools.
- Consequences: Consistent builds and shared code.

## ADR-004: TypeScript Strict Mode
- Status: Accepted
- Context: Need reliability and scalability.
- Decision: Enforce strict TypeScript across the codebase.
- Consequences: Better correctness and IDE support.
