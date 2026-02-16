import { LanguageId } from "../../types";
export interface ImportRewriteOptions {
    basePackage?: string;
    namespace?: string;
    projectRoot?: string;
    filePath?: string;
}
export declare class ImportModuleMapper {
    rewriteImports(source: string, from: LanguageId, to: LanguageId, options?: ImportRewriteOptions): string;
    private normalizeRustModule;
}
