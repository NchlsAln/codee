# Security Architecture

Codee is local-first by design. All source code, embeddings, and chat history remain on the developer machine unless a user explicitly enables cloud features.

## Local-First Principles
- Data stays on device by default.
- Telemetry is opt-in and disabled by default.
- No code content is sent externally unless a user enables cloud inference.

## Data Handling
- SQLCipher stores project metadata and conversation history at rest.
- Vector storage keeps embeddings locally in memory.
- API keys are stored in OS keychain.
- Local data purge overwrites database files before deletion.

## Prompt Safety
- File content is sanitized before adding to context.
- System prompts instruct models to ignore instructions in files.
- Context assembly respects include/exclude patterns.

## Dependency Security
- npm audit runs in CI and blocks high/critical vulnerabilities.
- CodeQL analysis runs on pull requests.
- Dependabot updates lockfiles weekly.

## Network Security
- Offline mode blocks non-local network access.
- Cloud fallback requires certificate pinning by hostname.
- Webview CSP disallows inline scripts and external connections.
