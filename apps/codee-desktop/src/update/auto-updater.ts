import { autoUpdater } from "electron-updater";

export function initAutoUpdater(): void {
  const stagingFeedUrl = process.env.CODEE_UPDATE_URL;

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.allowPrerelease = process.env.CODEE_ALLOW_PRERELEASE !== "false";

  if (stagingFeedUrl) {
    autoUpdater.setFeedURL({ provider: "generic", url: stagingFeedUrl });
  }

  autoUpdater.checkForUpdatesAndNotify();
}
