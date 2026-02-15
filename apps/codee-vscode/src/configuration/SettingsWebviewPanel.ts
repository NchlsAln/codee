import * as vscode from "vscode";
import { getNonce } from "../utils/webview";
import { SettingsManager } from "./SettingsManager";
import { DEFAULT_CONFIG } from "./defaults";

export class SettingsWebviewPanel {
  private panel?: vscode.WebviewPanel;

  constructor(private readonly extensionUri: vscode.Uri, private readonly settingsManager: SettingsManager) {}

  show(): void {
    if (this.panel) {
      this.panel.reveal();
      return;
    }

    this.panel = vscode.window.createWebviewPanel(
      "codee.settings",
      "Codee Settings",
      vscode.ViewColumn.One,
      { enableScripts: true, localResourceRoots: [this.extensionUri] }
    );

    this.panel.webview.html = this.getHtml(this.panel.webview);
    this.panel.webview.onDidReceiveMessage((message) => this.handleMessage(message));
    this.panel.onDidDispose(() => {
      this.panel = undefined;
    });

    void this.pushConfig();
  }

  private getHtml(webview: vscode.Webview): string {
    const nonce = getNonce();

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}';" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Codee Settings</title>
    <style>
      body { font-family: var(--vscode-font-family); color: var(--vscode-foreground); background: var(--vscode-editor-background); padding: 16px; }
      .grid { display: grid; grid-template-columns: 220px 1fr; gap: 16px; }
      .category { padding: 8px; border: 1px solid var(--vscode-panel-border); margin-bottom: 6px; cursor: pointer; }
      .category.active { border-left: 3px solid var(--vscode-focusBorder); }
      .field { margin-bottom: 12px; }
      .field-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .help-button { border: 1px solid var(--vscode-panel-border); background: transparent; color: inherit; border-radius: 10px; width: 22px; height: 22px; cursor: pointer; }
      .field input, .field textarea { width: 100%; background: var(--vscode-input-background); color: var(--vscode-input-foreground); border: 1px solid var(--vscode-input-border); padding: 6px; }
      .field.invalid input, .field.invalid textarea { border-color: var(--vscode-inputValidation-errorBorder); }
      .toolbar { display: flex; gap: 8px; margin-bottom: 12px; }
      .hint { font-size: 12px; opacity: 0.7; }
    </style>
  </head>
  <body>
    <div class="toolbar">
      <vscode-text-field id="search" placeholder="Search settings"></vscode-text-field>
      <vscode-button id="export">Export</vscode-button>
      <vscode-button id="import">Import</vscode-button>
    </div>
    <div class="grid">
      <div id="categories">
        <div class="category active" data-category="core">Core</div>
        <div class="category" data-category="features">Features</div>
        <div class="category" data-category="languages">Languages</div>
        <div class="category" data-category="privacy">Privacy</div>
        <div class="category" data-category="advanced">Advanced</div>
      </div>
      <div id="content"></div>
    </div>

    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      const categories = document.querySelectorAll(".category");
      const content = document.getElementById("content");
      const search = document.getElementById("search");

      const schema = {
        core: [
          { key: "core.modelId", label: "Model ID", help: "core.modelId" },
          { key: "core.modelPath", label: "Model Path", help: "core.modelPath" },
          { key: "core.modelEndpoint", label: "Model Endpoint", help: "core.modelEndpoint" },
          { key: "core.cloudFallback", label: "Cloud Fallback", type: "checkbox", help: "core.cloudFallback" },
          { key: "core.pinnedCertificates", label: "Pinned Certificates", format: "json", help: "core.pinnedCertificates" }
        ],
        features: [
          { key: "features.autoComplete", label: "Autocomplete", type: "checkbox", help: "features.autoComplete" },
          { key: "features.inlineSuggestions", label: "Inline Suggestions", type: "checkbox", help: "features.inlineSuggestions" },
          { key: "features.codeLens", label: "Code Lens", type: "checkbox", help: "features.codeLens" },
          { key: "features.readOnlyMode", label: "Read-only Mode", type: "checkbox", help: "features.readOnlyMode" }
        ],
        languages: [
          { key: "languages.enabled", label: "Enabled Languages", format: "json", help: "languages.enabled" },
          { key: "languages.lspPaths", label: "Custom LSP Paths", format: "json", help: "languages.lspPaths" }
        ],
        privacy: [
          { key: "privacy.telemetryEnabled", label: "Telemetry", type: "checkbox", help: "privacy.telemetryEnabled" },
          { key: "privacy.telemetryEndpoint", label: "Telemetry Endpoint", help: "privacy.telemetryEndpoint" },
          { key: "privacy.telemetryProjectKey", label: "Telemetry Project Key", help: "privacy.telemetryProjectKey" },
          { key: "privacy.crashReportingEnabled", label: "Crash Reporting", type: "checkbox", help: "privacy.crashReportingEnabled" },
          { key: "privacy.crashReportingDsn", label: "Crash Reporting DSN", help: "privacy.crashReportingDsn" },
          { key: "privacy.loggingEnabled", label: "Logging", type: "checkbox", help: "privacy.loggingEnabled" },
          { key: "privacy.dataRetentionDays", label: "Retention Days", type: "number", help: "privacy.dataRetentionDays" },
          { key: "privacy.offlineMode", label: "Offline Mode", type: "checkbox", help: "privacy.offlineMode" }
        ],
        advanced: [
          { key: "advanced.contextWindowTokens", label: "Context Window Tokens", type: "number", help: "advanced.contextWindowTokens" },
          { key: "advanced.temperature", label: "Temperature", type: "number", help: "advanced.temperature" },
          { key: "advanced.systemPrompts", label: "Custom System Prompts", format: "json", help: "advanced.systemPrompts" },
          { key: "advanced.includePatterns", label: "Include Patterns", format: "json", help: "advanced.includePatterns" },
          { key: "advanced.excludePatterns", label: "Exclude Patterns", format: "json", help: "advanced.excludePatterns" },
          { key: "advanced.customInstructions", label: "Custom Instructions", format: "text", help: "advanced.customInstructions" },
          { key: "advanced.teamPrompts", label: "Team Prompts", format: "json", help: "advanced.teamPrompts" },
          { key: "advanced.themePreference", label: "Theme Preference", help: "advanced.themePreference" },
          { key: "advanced.indexingIdleDelayMs", label: "Indexing Idle Delay (ms)", type: "number", help: "advanced.indexingIdleDelayMs" },
          { key: "advanced.embeddingCacheMaxEntries", label: "Embedding Cache Max Entries", type: "number", help: "advanced.embeddingCacheMaxEntries" },
          { key: "advanced.languageServerIdleMs", label: "Language Server Idle (ms)", type: "number", help: "advanced.languageServerIdleMs" },
          { key: "advanced.performanceMetricsEnabled", label: "Performance Metrics", type: "checkbox", help: "advanced.performanceMetricsEnabled" },
          { key: "advanced.mockLlmEnabled", label: "Mock LLM Mode", type: "checkbox", help: "advanced.mockLlmEnabled" },
          { key: "advanced.developerMode", label: "Developer Mode", type: "checkbox", help: "advanced.developerMode" },
          { key: "advanced.maxIndexFiles", label: "Max Index Files", type: "number", help: "advanced.maxIndexFiles" }
        ]
      };

      let activeCategory = "core";
      let currentConfig = {};
      let searchQuery = "";

      function renderCategory(category) {
        activeCategory = category;
        content.innerHTML = "";
        schema[category]
          .filter((field) => field.label.toLowerCase().includes(searchQuery))
          .forEach((field) => {
          const wrapper = document.createElement("div");
          wrapper.className = "field";
          const header = document.createElement("div");
          header.className = "field-header";
          const label = document.createElement("label");
          label.textContent = field.label;
          const help = document.createElement("button");
          help.className = "help-button";
          help.textContent = "?";
          help.title = "Open documentation";
          help.addEventListener("click", () => vscode.postMessage({ type: "openDocs", key: field.help }));
          header.appendChild(label);
          header.appendChild(help);
          const input = field.format === "json" || field.format === "text"
            ? document.createElement("textarea")
            : document.createElement("input");
          input.dataset.key = field.key;
          if (field.format) {
            input.dataset.format = field.format;
          }
          if (input instanceof HTMLInputElement) {
            input.type = field.type || "text";
          }
          const value = getConfigValue(field.key);
          if (input instanceof HTMLInputElement && input.type === "checkbox") {
            input.checked = Boolean(value);
          } else {
            input.value = field.format === "json" ? JSON.stringify(value ?? {}, null, 2) : String(value ?? "");
          }
          input.addEventListener("input", () => validateField(wrapper, input, field));
          wrapper.appendChild(header);
          wrapper.appendChild(input);
          content.appendChild(wrapper);
        });
        const saveButton = document.createElement("vscode-button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", () => {
          const values = Array.from(content.querySelectorAll("input, textarea")).reduce((acc, input) => {
            const key = input.dataset.key;
            if (input instanceof HTMLInputElement && input.type === "checkbox") {
              acc[key] = input.checked;
            } else if (input.dataset.format === "json") {
              acc[key] = input.value;
            } else {
              acc[key] = input.value;
            }
            return acc;
          }, {});
          vscode.postMessage({ type: "save", category, values });
        });
        const resetButton = document.createElement("vscode-button");
        resetButton.textContent = "Reset";
        resetButton.addEventListener("click", () => vscode.postMessage({ type: "reset", category }));
        content.appendChild(saveButton);
        content.appendChild(resetButton);
      }

      categories.forEach((item) => {
        item.addEventListener("click", () => {
          categories.forEach((node) => node.classList.remove("active"));
          item.classList.add("active");
          renderCategory(item.dataset.category);
        });
      });

      search.addEventListener("input", () => {
        searchQuery = search.value.toLowerCase();
        renderCategory(activeCategory);
      });

      document.getElementById("export").addEventListener("click", () => vscode.postMessage({ type: "export" }));
      document.getElementById("import").addEventListener("click", () => vscode.postMessage({ type: "import" }));

      window.addEventListener("message", (event) => {
        if (event.data.type === "config") {
          currentConfig = event.data.config || {};
          renderCategory(activeCategory);
        }
      });

      renderCategory(activeCategory);

      function getConfigValue(key) {
        return key.split(".").reduce((obj, segment) => (obj ? obj[segment] : undefined), currentConfig);
      }

      function validateField(wrapper, input, field) {
        wrapper.classList.remove("invalid");
        wrapper.title = "";
        if (field.format === "json") {
          try {
            JSON.parse(input.value || "{}");
          } catch (error) {
            wrapper.classList.add("invalid");
            wrapper.title = "Invalid JSON";
          }
        }
        if (field.type === "number") {
          const value = Number(input.value);
          if (Number.isNaN(value)) {
            wrapper.classList.add("invalid");
            wrapper.title = "Invalid number";
          }
        }
      }
    </script>
  </body>
</html>`;
  }

  private async handleMessage(message: { type: string; category?: string; values?: Record<string, unknown> }): Promise<void> {
    if (message.type === "openDocs") {
      await vscode.commands.executeCommand("codee.openDocumentation");
      return;
    }
    if (message.type === "save" && message.category && message.values) {
      const config = vscode.workspace.getConfiguration("codee");
      for (const [key, value] of Object.entries(message.values)) {
        await config.update(key, this.coerceValue(value), vscode.ConfigurationTarget.Global);
      }
      await this.settingsManager.recordAudit("vscode", `Updated ${message.category} settings`);
      void this.pushConfig();
      return;
    }

    if (message.type === "reset" && message.category) {
      const config = vscode.workspace.getConfiguration("codee");
      const defaults = DEFAULT_CONFIG as unknown as Record<string, unknown>;
      const categoryDefaults = (defaults as Record<string, unknown>)[message.category] as Record<string, unknown>;
      for (const [key, value] of Object.entries(categoryDefaults)) {
        await config.update(`${message.category}.${key}`, value, vscode.ConfigurationTarget.Global);
      }
      await this.settingsManager.recordAudit("vscode", `Reset ${message.category} settings`);
      void this.pushConfig();
      return;
    }

    if (message.type === "export") {
      const config = await this.settingsManager.resolve();
      const uri = await vscode.window.showSaveDialog({
        title: "Export Codee Settings",
        filters: { JSON: ["json"] }
      });
      if (uri) {
        await vscode.workspace.fs.writeFile(uri, Buffer.from(JSON.stringify(config, null, 2)));
      }
      return;
    }

    if (message.type === "import") {
      const uri = await vscode.window.showOpenDialog({
        title: "Import Codee Settings",
        filters: { JSON: ["json"] },
        canSelectMany: false
      });
      if (uri && uri[0]) {
        const raw = await vscode.workspace.fs.readFile(uri[0]);
        const config = await this.settingsManager.importConfig(raw.toString());
        await this.settingsManager.updateUserProfile(config);
        void this.pushConfig();
      }
    }
  }

  private async pushConfig(): Promise<void> {
    if (!this.panel) {
      return;
    }
    const config = await this.settingsManager.resolve();
    this.panel.webview.postMessage({ type: "config", config });
  }

  private coerceValue(value: unknown): unknown {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        try {
          return JSON.parse(trimmed);
        } catch (error) {
          return value;
        }
      }
      if (value === "true") {
        return true;
      }
      if (value === "false") {
        return false;
      }
      const asNumber = Number(value);
      if (!Number.isNaN(asNumber) && value.trim() !== "") {
        return asNumber;
      }
    }
    return value;
  }
}
