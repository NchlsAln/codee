import path from "node:path";
import { LanguageId } from "../../types";

export interface ImportRewriteOptions {
  basePackage?: string;
  namespace?: string;
  projectRoot?: string;
  filePath?: string;
}

export class ImportModuleMapper {
  rewriteImports(source: string, from: LanguageId, to: LanguageId, options: ImportRewriteOptions = {}): string {
    if (from === "python" && to === "java") {
      const basePackage = options.basePackage ?? "com.project";
      return source.replace(/^(from|import)\s+([\w.]+)/gm, (_match, _kw, modulePath) => {
        const mapped = `${basePackage}.${modulePath}`.replace(/\.+/g, ".");
        return `import ${mapped};`;
      });
    }
    if ((from === "typescript" || from === "javascript") && to === "rust") {
      return source.replace(/import\s+\{([^}]+)\}\s+from\s+["']([^"']+)["'];?/g, (_match, names, modulePath) => {
        const moduleName = this.normalizeRustModule(modulePath);
        return `use crate::${moduleName}::{${names.trim()}};`;
      });
    }
    if (from === "go" && to === "java") {
      const basePackage = options.basePackage ?? "com.project";
      return source.replace(/^package\s+(\w+)/m, (_match, pkg) => `package ${basePackage}.${pkg};`);
    }
    if (from === "go" && to === "cpp") {
      const namespace = options.namespace ?? "project";
      const updated = source.replace(/^package\s+(\w+)/m, (_match, pkg) => `namespace ${namespace} { // ${pkg}`);
      return updated.endsWith("}\n") || updated.endsWith("}") ? updated : `${updated}\n}`;
    }
    if (from === "java" && to === "cpp") {
      return source.replace(/^package\s+[\w.]+;\s*/m, "");
    }
    if (from === "java" && to === "go") {
      const filePath = options.filePath ?? "";
      const base = options.projectRoot ? path.relative(options.projectRoot, filePath) : filePath;
      const pkg = base ? path.dirname(base).split(path.sep).filter(Boolean).pop() : "main";
      return source.replace(/^package\s+[\w.]+;\s*/m, `package ${pkg ?? "main"}\n`);
    }
    return source;
  }

  private normalizeRustModule(modulePath: string): string {
    if (modulePath.startsWith("./")) {
      return modulePath.replace(/^\.\//, "").replace(/\//g, "::");
    }
    if (modulePath.startsWith("../")) {
      return modulePath.replace(/\.\.\//g, "").replace(/\//g, "::");
    }
    return modulePath.replace(/\//g, "::");
  }
}
