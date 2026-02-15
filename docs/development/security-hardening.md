# Security Hardening Guide

## Quick Checklist
- Enable Offline Mode for air-gapped work.
- Leave cloud fallback disabled unless required.
- Configure certificate pins if cloud fallback is enabled.
- Use Read-only Mode in sensitive repositories.
- Set a short data retention window.

## Firewall Rules (Example)
- Allow outbound only to localhost for model endpoints.
- Block all other outbound connections.

## Certificate Pinning
Set `codee.core.pinnedCertificates` with SHA256 fingerprints for each hostname used for cloud fallback.

## Data Purge
Run `Codee: Clear Local Data` to securely delete local storage.

## Notes
- SQLCipher uses a key stored in your OS keychain.
- Webview CSP blocks inline scripts and external connections.
