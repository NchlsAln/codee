"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportModuleMapper = void 0;
const node_path_1 = __importDefault(require("node:path"));
class ImportModuleMapper {
    rewriteImports(source, from, to, options = {}) {
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
            const base = options.projectRoot ? node_path_1.default.relative(options.projectRoot, filePath) : filePath;
            const pkg = base ? node_path_1.default.dirname(base).split(node_path_1.default.sep).filter(Boolean).pop() : "main";
            return source.replace(/^package\s+[\w.]+;\s*/m, `package ${pkg ?? "main"}\n`);
        }
        return source;
    }
    normalizeRustModule(modulePath) {
        if (modulePath.startsWith("./")) {
            return modulePath.replace(/^\.\//, "").replace(/\//g, "::");
        }
        if (modulePath.startsWith("../")) {
            return modulePath.replace(/\.\.\//g, "").replace(/\//g, "::");
        }
        return modulePath.replace(/\//g, "::");
    }
}
exports.ImportModuleMapper = ImportModuleMapper;
