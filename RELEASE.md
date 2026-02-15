# Release Guide

## Overview
Codee releases are built with Turborepo and esbuild, packaged by electron-builder, and published via GitHub Actions.

## Prerequisites
- Node.js 20
- Git tags with format vX.Y.Z
- Code signing credentials configured in CI secrets

## Release Steps
1. Ensure conventional commit messages are used for all changes.
2. Update versions with `npm run release:version`.
3. Push a tag: `git tag vX.Y.Z` then `git push --tags`.
4. GitHub Actions will build, package, and draft the release.
5. For beta builds, use pre-release tags like `v0.9.0-beta.1`.

## Artifacts
- Desktop installers: macOS (universal DMG), Windows (NSIS), Linux (AppImage)
- VS Code extension package (.vsix)

## Source Maps
- Desktop builds keep source maps for beta diagnostics.
- For crash reporting, upload source maps to Sentry when publishing beta builds.
- To debug locally, open DevTools and load the matching .map file from the build output.

## Onboarding
- First-run wizard initializes local model setup and project scanning tutorial.
- Update notifications are surfaced in the desktop shell.

## Telemetry
Telemetry is opt-in only. Default is disabled. Ensure privacy settings are respected.

## Crash Reporting
Crash reporting is opt-in only. Default is disabled. Configure a self-hosted Sentry DSN before enabling.

## Auto-Update (Staging)
- Set `CODEE_UPDATE_URL` to test staging updates.
- Set `CODEE_ALLOW_PRERELEASE=true` to allow prerelease feeds.

## Telemetry Env Vars (Desktop)
- `CODEE_TELEMETRY_ENABLED=true`
- `CODEE_TELEMETRY_ENDPOINT=https://posthog.example.com`
- `CODEE_TELEMETRY_PROJECT_KEY=phc_xxx`
- `CODEE_CRASH_REPORTING_ENABLED=true`
- `CODEE_SENTRY_DSN=https://...`
