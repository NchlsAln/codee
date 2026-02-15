# Development Setup

## Prerequisites
- Node.js 20 LTS
- Git

## Node Version Manager
We recommend fnm for cross-platform Node installs.

Windows (PowerShell):
1. `winget install Schniz.fnm`
2. Add to profile: `fnm env --use-on-cd | Out-String | Invoke-Expression`
3. `fnm install 20.11.0`
4. `fnm use 20.11.0`

macOS:
1. `brew install fnm`
2. Add to profile: `eval "$(fnm env --use-on-cd)"`
3. `fnm install 20.11.0 && fnm use 20.11.0`

Linux:
1. `curl -fsSL https://fnm.vercel.app/install | bash`
2. Add to profile: `eval "$(fnm env --use-on-cd)"`
3. `fnm install 20.11.0 && fnm use 20.11.0`

Fallback (if fnm fails):
1. `npm install -g n`
2. `n 20.11.0`

## Install
1. `npm install`
2. `npm run prepare`

## Native Dependencies
- Codee pins Node 20 LTS via `.nvmrc` and `package.json` engines.
- The root `.npmrc` config pulls prebuilt Electron binaries for `better-sqlite3`.
- If prebuilt downloads fail, install Visual Studio Build Tools (Desktop development with C++).

## Run
- Monorepo dev: `npm run dev`
- Desktop only: `npm -w apps/codee-desktop run dev`
- Extension only: `npm -w apps/codee-vscode run dev`
- Webview UI: `npm -w apps/codee-vscode --prefix webview-ui run watch`

## Build
- All packages: `npm run build`
- Production: `npm run build:prod`
