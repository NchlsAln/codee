import { app, BrowserWindow } from "electron";
import { createHash } from "crypto";
import { initAutoUpdater } from "./update/auto-updater";
import { showWelcomeIfFirstRun } from "./onboarding/first-run";
import { runMigrations } from "./migrations/migration-manager";
import { TelemetryService } from "./telemetry/telemetry-service";
import { initSentry } from "./telemetry/sentry";

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  win.loadURL("about:blank");
}

app.whenReady().then(() => {
  const telemetry = new TelemetryService();
  const telemetryEnabled = process.env.CODEE_TELEMETRY_ENABLED === "true";
  const crashEnabled = process.env.CODEE_CRASH_REPORTING_ENABLED === "true";
  const release = app.getVersion();
  const distinctId = createHash("sha256").update(app.getPath("userData")).digest("hex");

  telemetry.configure({
    enabled: telemetryEnabled,
    endpoint: process.env.CODEE_TELEMETRY_ENDPOINT ?? "",
    projectKey: process.env.CODEE_TELEMETRY_PROJECT_KEY ?? "",
    distinctId,
    release
  });

  if (crashEnabled) {
    initSentry({
      dsn: process.env.CODEE_SENTRY_DSN ?? "",
      environment: process.env.CODEE_ENVIRONMENT ?? "beta",
      release
    });
  }

  void runMigrations();
  createWindow();
  showWelcomeIfFirstRun();
  initAutoUpdater();

  telemetry.track({ name: "app_started" });

  app.on("before-quit", () => telemetry.shutdown());
});
