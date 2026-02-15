import { PostHog } from "posthog-node";

export interface TelemetryEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
}

export interface TelemetryConfig {
  enabled: boolean;
  endpoint: string;
  projectKey: string;
  distinctId: string;
  release: string;
}

export class TelemetryService {
  private enabled = false;
  private client?: PostHog;
  private distinctId = "unknown";
  private release = "0.0.0";

  configure(config: TelemetryConfig): void {
    this.enabled = config.enabled;
    this.distinctId = config.distinctId;
    this.release = config.release;

    if (!this.enabled || !config.endpoint || !config.projectKey) {
      this.client = undefined;
      return;
    }

    this.client = new PostHog(config.projectKey, { host: config.endpoint });
  }

  track(event: TelemetryEvent): void {
    if (!this.enabled || !this.client) {
      return;
    }
    this.client.capture({
      distinctId: this.distinctId,
      event: event.name,
      properties: {
        ...event.properties,
        release: this.release,
        platform: process.platform
      }
    });
  }

  shutdown(): void {
    if (this.client) {
      void this.client.shutdown();
      this.client = undefined;
    }
  }
}
