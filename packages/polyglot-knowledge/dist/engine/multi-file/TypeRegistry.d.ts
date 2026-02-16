import { ASTNode, LanguageId, TypeDefinition } from "../../types";
export declare class TypeRegistry {
    private readonly types;
    private readonly definitions;
    registerType(name: string, definition: ASTNode, sourceLang: LanguageId): void;
    getTypeDefinition(name: string, targetLang: LanguageId): string | undefined;
    generateTypeDefinitions(targetLang: LanguageId): string;
    registerFromSource(source: string, language: LanguageId, filePath: string): TypeDefinition[];
    findDuplicates(definitions: TypeDefinition[], filePath: string): string[];
    has(name: string): boolean;
    get(name: string): TypeDefinition | undefined;
    list(): TypeDefinition[];
    private extractLine;
}
