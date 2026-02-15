# Privacy Policy (Draft)

Codee is a local-first assistant. Your source code, embeddings, and chat history stay on your device by default.

## What We Store Locally
- Conversation history and context metadata (SQLCipher-encrypted).
- Project configuration in the workspace `.codee` folder.
- API keys in your OS keychain (via keytar).

## What We Do Not Collect
- No telemetry is collected unless you explicitly opt in.
- No source code is transmitted to external services without consent.

## Telemetry (Opt-In)
- Telemetry is disabled by default.
- When enabled, Codee sends anonymous usage events (no code content).
- PostHog is used for self-hosted analytics.

## Crash Reporting (Opt-In)
- Crash reporting is disabled by default.
- When enabled, Codee sends crash reports to self-hosted Sentry.
- Crash reports may include stack traces and OS/app metadata.

## Optional Cloud Features
- Cloud fallback must be explicitly enabled.
- Certificate pinning is required for cloud endpoints.
- Offline mode blocks all non-local network access.

## Data Retention
- You control data retention via `codee.privacy.dataRetentionDays`.
- Use `Codee: Clear Local Data` to purge stored data.

## Contact
For privacy questions, contact privacy@codee.dev.
