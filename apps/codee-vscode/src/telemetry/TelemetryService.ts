import * as vscode from "vscode";
import { createHash } from "crypto";
import { PostHog } from "posthog-node";
import * as Sentry from "@sentry/node";
import { SettingsManager } from "../configuration/SettingsManager";

interface TelemetryConfig {
  enabled: boolean;
  endpoint: string;
  projectKey: string;
  crashEnabled: boolean;
  crashDsn: string;
  offlineMode: boolean;
}

export class TelemetryService implements vscode.Disposable {
  private client?: PostHog;
  private crashInitialized = false;
  private config: TelemetryConfig = {
    enabled: false,
    endpoint: "",
    projectKey: "",
    crashEnabled: false,
    crashDsn: "",
    offlineMode: false
  };
  private readonly disposables: vscode.Disposable[] = [];
  private readonly distinctId: string;
  private readonly release: string;

  constructor(private readonly context: vscode.ExtensionContext, private readonly settingsManager: SettingsManager) {
    const machineId = vscode.env.machineId ?? "unknown";
    this.distinctId = createHash("sha256").update(machineId).digest("hex");
    this.release =
      vscode.extensions.getExtension("codee.codee-vscode")?.packageJSON?.version ?? "0.0.0";
  }

  async initialize(): Promise<void> {
    await this.refreshConfig();
    this.disposables.push(...this.settingsManager.watch(() => void this.refreshConfig()));

    if (this.config.crashEnabled) {
      this.initializeCrashReporting();
    }

    this.trackDailyActive();
    this.track("extension_activated");
  }

  dispose(): void {
    this.disposables.forEach((item) => item.dispose());
    this.disposables.length = 0;
    if (this.client) {
      void this.client.shutdown();
      this.client = undefined;
    }
  }

  track(event: string, properties?: Record<string, string | number | boolean>): void {
    if (!this.config.enabled || this.config.offlineMode || !this.client) {
      return;
    }

    this.client.capture({
      distinctId: this.distinctId,
      event,
      properties: {
        ...properties,
        release: this.release,
        platform: process.platform
      }
    });
  }

  trackCommand(commandId: string): void {
    this.track("command_used", { commandId });
  }

  trackDailyActive(): void {
    if (!this.config.enabled || this.config.offlineMode) {
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    const lastActive = this.context.globalState.get<string>("codee.telemetry.lastActive");
    if (lastActive === today) {
      return;
    }
    void this.context.globalState.update("codee.telemetry.lastActive", today);
    this.track("active_user");
  }

  trackError(error: Error): void {
    if (!this.config.crashEnabled) {
      return;
    }
    Sentry.captureException(error);
  }

  private async refreshConfig(): Promise<void> {
    const config = await this.settingsManager.resolve();
    const nextConfig: TelemetryConfig = {
      enabled: config.privacy.telemetryEnabled,
      endpoint: config.privacy.telemetryEndpoint,
      projectKey: config.privacy.telemetryProjectKey,
      crashEnabled: config.privacy.crashReportingEnabled,
      crashDsn: config.privacy.crashReportingDsn,
      offlineMode: config.privacy.offlineMode
    };

    if (!this.isSameConfig(nextConfig, this.config)) {
      const shouldInitCrash = nextConfig.crashEnabled && !this.crashInitialized;
      this.config = nextConfig;
      this.initializeClient();
      if (shouldInitCrash) {
        this.initializeCrashReporting();
      }
    }
  }

  private initializeClient(): void {
    if (this.client) {
      void this.client.shutdown();
      this.client = undefined;
    }

    if (!this.config.enabled || this.config.offlineMode) {
      return;
    }

    if (!this.config.projectKey || !this.config.endpoint) {
      return;
    }

    this.client = new PostHog(this.config.projectKey, {
      host: this.config.endpoint
    });
  }

  private initializeCrashReporting(): void {
    if (this.crashInitialized) {
      return;
    }
    const dsn = this.config.crashDsn || process.env.CODEE_SENTRY_DSN || "";
    if (!dsn || this.config.offlineMode) {
      return;
    }

    Sentry.init({
      dsn,
      environment: process.env.CODEE_ENVIRONMENT ?? "beta",
      release: this.release
    });

    this.crashInitialized = true;

    process.on("uncaughtException", (error) => {
      Sentry.captureException(error);
    });

    process.on("unhandledRejection", (reason) => {
      const error = reason instanceof Error ? reason : new Error(String(reason));
      Sentry.captureException(error);
    });
  }

  private isSameConfig(a: TelemetryConfig, b: TelemetryConfig): boolean {
    return (
      a.enabled === b.enabled &&
      a.endpoint === b.endpoint &&
      a.projectKey === b.projectKey &&
      a.crashEnabled === b.crashEnabled &&
      a.crashDsn === b.crashDsn &&
      a.offlineMode === b.offlineMode
    );
  }
}
