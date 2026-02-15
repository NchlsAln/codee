# VS Code Extension API

## Extension Points
- Sidebar tree provider
- Chat webview provider
- Commands and status bar

## Messaging
- Extension -> Webview: `stream`, `message`, `system`, `context`
- Webview -> Extension: `send`, `stop`, `action`, `manageContext`
