# Security Policy

This document describes Codee's threat model, defensive controls, and how to report security issues.

## Threat Model
- Local malware accessing sensitive code in memory or on disk.
- Accidental cloud transmission of private code.
- Prompt injection via malicious files in a workspace.
- Dependency vulnerabilities in the build or runtime chain.
- Extension privilege escalation through unsafe file writes or execution.

## Defensive Controls
### Data Protection
- SQLCipher-encrypted local database for conversation storage.
- API keys stored in OS keychain (via keytar).
- Memory scrubbing of file buffers after reading for context assembly.
- Secure deletion for local data purge.

### Network Security
- Default localhost-only model endpoints.
- Offline Mode blocks non-local network access.
- Certificate pinning required for cloud fallback.
- No external requests without user opt-in.

### Prompt Injection Defense
- Context sanitization of file contents before use.
- Hardened system prompt to ignore instructions inside files.
- Webview Content Security Policy (no inline scripts).

### Code Safety
- Read-only mode option to prevent file modifications.
- Explicit confirmation before applying refactors.

### Dependency Security
- npm audit in CI (blocks high/critical).
- CodeQL scanning for JavaScript/TypeScript.
- Dependabot for lockfile maintenance.
- Native modules require explicit security review.

## Reporting Vulnerabilities
- Email: security@codee.dev
- Include steps to reproduce, impact, and affected versions.

## Coordinated Disclosure
We aim to acknowledge reports within 72 hours and provide a remediation plan as soon as feasible.
