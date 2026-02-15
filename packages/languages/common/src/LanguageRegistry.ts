import { BaseLanguageAnalyzer } from "./BaseLanguageAnalyzer";
import { BaseLanguageServer } from "./BaseLanguageServer";
import { BaseCodeTemplates } from "./BaseCodeTemplates";
import { BasePromptEngineering } from "./BasePromptEngineering";

export interface LanguageDefinition {
  id: string;
  name: string;
  extensions: string[];
  serverFactory: (projectPath?: string) => BaseLanguageServer;
  analyzerFactory: () => BaseLanguageAnalyzer;
  templates: BaseCodeTemplates;
  promptEngineering: BasePromptEngineering;
}

type ServerMap = Map<string, BaseLanguageServer>;

export class LanguageRegistry {
  private readonly languages = new Map<string, LanguageDefinition>();
  private readonly activeServers = new Map<string, ServerMap>();

  registerLanguage(definition: LanguageDefinition): void {
    this.languages.set(definition.id, definition);
  }

  getLanguage(id: string): LanguageDefinition | undefined {
    return this.languages.get(id);
  }

  getLanguages(): LanguageDefinition[] {
    return Array.from(this.languages.values());
  }

  detectLanguage(filePath: string): LanguageDefinition | undefined {
    const lower = filePath.toLowerCase();
    return this.getLanguages().find((language) =>
      language.extensions.some((ext) => lower.endsWith(ext))
    );
  }

  getOrStartServer(projectPath: string, languageId: string): BaseLanguageServer | undefined {
    const definition = this.languages.get(languageId);
    if (!definition) {
      return undefined;
    }

    const key = projectPath || "<global>";
    const serverMap = this.activeServers.get(key) ?? new Map<string, BaseLanguageServer>();
    if (!this.activeServers.has(key)) {
      this.activeServers.set(key, serverMap);
    }

    const existing = serverMap.get(languageId);
    if (existing) {
      return existing;
    }

    const server = definition.serverFactory(projectPath);
    void server.start();
    serverMap.set(languageId, server);
    return server;
  }

  async stopServer(projectPath: string, languageId: string): Promise<void> {
    const key = projectPath || "<global>";
    const serverMap = this.activeServers.get(key);
    const server = serverMap?.get(languageId);
    if (!server) {
      return;
    }

    await server.stop();
    serverMap?.delete(languageId);
  }

  listActiveServers(projectPath: string): BaseLanguageServer[] {
    const key = projectPath || "<global>";
    return Array.from(this.activeServers.get(key)?.values() ?? []);
  }
}