# Package Dependencies

```mermaid
graph LR
  Desktop[apps/codee-desktop] --> Extension[apps/codee-vscode]
  Extension --> Core[packages/core-engine]
  Core --> Languages[packages/languages/*]
  Core --> Data[packages/data-layer]
  Core --> UI[packages/ui-system]
```
