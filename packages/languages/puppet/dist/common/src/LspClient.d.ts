export declare class LspClient {
  private process?;
  start(command: string, args: string[], cwd?: string): void;
  stop(): void;
}
