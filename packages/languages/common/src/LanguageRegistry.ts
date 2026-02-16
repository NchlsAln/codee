import { BaseLanguageAnalyzer } from "./BaseLanguageAnalyzer";
import { BaseLanguageServer } from "./BaseLanguageServer";
import { BaseCodeTemplates } from "./BaseCodeTemplates";
import { BasePromptEngineering } from "./BasePromptEngineering";
import { ALL_LANGUAGES } from "./all-languages";

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

const toCamelCase = (value: string): string => {
  const parts = value.split(/[\s_-]+/).filter(Boolean);
  if (parts.length === 0) {
    return "";
  }
  const first = parts[0] ?? "";
  const rest = parts.slice(1);
  return `${first.toLowerCase()}${rest.map((part) => `${part[0]?.toUpperCase() || ""}${part.slice(1)}`).join("")}`;
};

export { ALL_LANGUAGES } from "./all-languages";

export function registerAllLanguages(registry: LanguageRegistry): void {
  ALL_LANGUAGES.forEach((lang) => {
    const moduleName = `@codee/lang-${lang}`;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const module = require(moduleName);
      const definitionKey = `${toCamelCase(lang)}Definition`;
      const definition = module[definitionKey] ?? module.default;
      if (!definition) {
        return;
      }
      registry.registerLanguage(definition);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.includes(moduleName)) {
        return;
      }
      throw error;
    }
  });
}