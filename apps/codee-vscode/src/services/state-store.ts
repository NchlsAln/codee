export type ExtensionState = {
  lastSessionId?: string;
  activeLanguage?: string;
};

export class StateStore {
  private state: ExtensionState = {};

  getState(): ExtensionState {
    return this.state;
  }

  updateState(update: Partial<ExtensionState>): void {
    this.state = { ...this.state, ...update };
  }
}
