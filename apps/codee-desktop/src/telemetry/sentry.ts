import * as Sentry from "@sentry/electron/main";

export interface SentryConfig {
  dsn: string;
  environment?: string;
  release?: string;
}

export function initSentry(config: SentryConfig): void {
  if (!config.dsn) {
    return;
  }

  Sentry.init({
    dsn: config.dsn,
    environment: config.environment ?? "beta",
    release: config.release
  });
}
