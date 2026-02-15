import { ILanguageSupport } from "./types";
export declare class LanguageRegistry {
    private readonly languages;
    getLanguages(): ILanguageSupport[];
    getLanguage(id: string): ILanguageSupport | undefined;
    detectFromFile(filePath: string): ILanguageSupport | undefined;
    getSystemPrompt(languageId: string): string;
}
