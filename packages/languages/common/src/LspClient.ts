import { ChildProcessWithoutNullStreams, spawn } from "child_process";

export class LspClient {
  private process?: ChildProcessWithoutNullStreams;

  start(command: string, args: string[], cwd?: string): void {
    if (this.process) {
      return;
    }

    if (process.env.NODE_ENV === "test" || process.env.CODEE_DISABLE_LSP_SPAWN === "1") {
      return;
    }

    this.process = spawn(command, args, {
      cwd,
      stdio: "pipe"
    });
  }

  stop(): void {
    if (!this.process) {
      return;
    }

    this.process.kill();
    this.process = undefined;
  }
}