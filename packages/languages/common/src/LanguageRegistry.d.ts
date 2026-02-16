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
export declare class LanguageRegistry {
    private readonly languages;
    private readonly activeServers;
    registerLanguage(definition: LanguageDefinition): void;
    getLanguage(id: string): LanguageDefinition | undefined;
    getLanguages(): LanguageDefinition[];
    detectLanguage(filePath: string): LanguageDefinition | undefined;
    getOrStartServer(projectPath: string, languageId: string): BaseLanguageServer | undefined;
    stopServer(projectPath: string, languageId: string): Promise<void>;
    listActiveServers(projectPath: string): BaseLanguageServer[];
}
