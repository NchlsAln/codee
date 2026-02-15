import { app } from "electron";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const STATE_FILE = "first-run.json";

export function isFirstRun(): boolean {
  try {
    const state = readState();
    return !state.completed;
  } catch (error) {
    return true;
  }
}

export function markFirstRunComplete(): void {
  writeState({ completed: true });
}

export function showWelcomeIfFirstRun(): void {
  if (isFirstRun()) {
    // Placeholder: launch welcome window or wizard.
    markFirstRunComplete();
  }
}

function getStatePath(): string {
  return path.join(app.getPath("userData"), STATE_FILE);
}

function readState(): { completed: boolean } {
  const raw = readFileSync(getStatePath(), "utf-8");
  return JSON.parse(raw) as { completed: boolean };
}

function writeState(state: { completed: boolean }): void {
  writeFileSync(getStatePath(), JSON.stringify(state, null, 2), "utf-8");
}
