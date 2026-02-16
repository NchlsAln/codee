import { translateCode } from "../../index";
import { ASTNode, LanguageId, SharedType, TypeDefinition } from "../../types";

const TYPE_PATTERNS: Array<{ kind: TypeDefinition["kind"]; regex: RegExp }> = [
  { kind: "class", regex: /\bclass\s+(?<name>\w+)/g },
  { kind: "interface", regex: /\binterface\s+(?<name>\w+)/g },
  { kind: "enum", regex: /\benum\s+(?<name>\w+)/g },
  { kind: "struct", regex: /\bstruct\s+(?<name>\w+)/g }
];

const ALIAS_PATTERNS: RegExp[] = [
  /\btype\s+(?<name>\w+)\s*=/g,
  /\busing\s+(?<name>\w+)\s*=/g,
  /\btypedef\s+[^;]+\s+(?<name>\w+)\s*;/g
];

export class TypeRegistry {
  private readonly types = new Map<string, SharedType>();
  private readonly definitions = new Map<string, TypeDefinition>();

  registerType(name: string, definition: ASTNode, sourceLang: LanguageId): void {
    if (this.types.has(name)) {
      return;
    }
    this.types.set(name, {
      name,
      sourceLanguage: sourceLang,
      definition,
      targetDefinitions: new Map()
    });
  }

  getTypeDefinition(name: string, targetLang: LanguageId): string | undefined {
    const entry = this.types.get(name);
    if (!entry) {
      return undefined;
    }
    const cached = entry.targetDefinitions.get(targetLang);
    if (cached) {
      return cached;
    }
    const sourceSnippet = entry.definition.value;
    if (!sourceSnippet) {
      return undefined;
    }
    const translation = translateCode(entry.sourceLanguage, targetLang, sourceSnippet);
    const output = translation.output;
    entry.targetDefinitions.set(targetLang, output);
    return output;
  }

  generateTypeDefinitions(targetLang: LanguageId): string {
    const outputs: string[] = [];
    for (const type of this.types.values()) {
      const output = this.getTypeDefinition(type.name, targetLang);
      if (output) {
        outputs.push(output);
      }
    }
    return outputs.join("\n\n");
  }

  registerFromSource(source: string, language: LanguageId, filePath: string): TypeDefinition[] {
    const found: TypeDefinition[] = [];
    for (const pattern of TYPE_PATTERNS) {
      let match: RegExpExecArray | null;
      while ((match = pattern.regex.exec(source)) !== null) {
        const name = match.groups?.name?.trim();
        if (!name) {
          continue;
        }
        this.registerType(
          name,
          { type: pattern.kind, name, value: this.extractLine(source, match.index ?? 0) },
          language
        );
        const definition: TypeDefinition = {
          name,
          kind: pattern.kind,
          language,
          sourceFile: filePath
        };
        if (!this.definitions.has(name)) {
          this.definitions.set(name, definition);
        }
        found.push(definition);
      }
    }
    for (const pattern of ALIAS_PATTERNS) {
      let match: RegExpExecArray | null;
      while ((match = pattern.exec(source)) !== null) {
        const name = match.groups?.name?.trim();
        if (!name) {
          continue;
        }
        this.registerType(
          name,
          { type: "type-alias", name, value: this.extractLine(source, match.index ?? 0) },
          language
        );
      }
    }
    return found;
  }

  findDuplicates(definitions: TypeDefinition[], filePath: string): string[] {
    return definitions
      .map((definition) => definition.name)
      .filter((name) => {
        const existing = this.definitions.get(name);
        return existing ? existing.sourceFile !== filePath : false;
      });
  }

  has(name: string): boolean {
    return this.definitions.has(name);
  }

  get(name: string): TypeDefinition | undefined {
    return this.definitions.get(name);
  }

  list(): TypeDefinition[] {
    return Array.from(this.definitions.values());
  }

  private extractLine(source: string, index: number): string {
    const start = source.lastIndexOf("\n", index - 1) + 1;
    const end = source.indexOf("\n", index);
    if (end === -1) {
      return source.slice(start).trim();
    }
    return source.slice(start, end).trim();
  }
}
