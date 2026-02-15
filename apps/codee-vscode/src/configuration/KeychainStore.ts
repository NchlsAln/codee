import type * as keytar from "keytar";

export class KeychainStore {
  private keytar: typeof keytar | null = null;
  private loaded = false;

  private loadKeytar(): void {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      this.keytar = require("keytar");
    } catch (error) {
      this.keytar = null;
    }
  }

  async getPassword(service: string, account: string): Promise<string | null> {
    this.loadKeytar();
    if (!this.keytar) {
      return null;
    }
    return this.keytar.getPassword(service, account);
  }

  async setPassword(service: string, account: string, password: string): Promise<void> {
    this.loadKeytar();
    if (!this.keytar) {
      return;
    }
    await this.keytar.setPassword(service, account, password);
  }

  async deletePassword(service: string, account: string): Promise<void> {
    this.loadKeytar();
    if (!this.keytar) {
      return;
    }
    await this.keytar.deletePassword(service, account);
  }
}
