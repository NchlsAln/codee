"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppDefinition = exports.javaDefinition = exports.goDefinition = exports.rustDefinition = exports.pythonDefinition = exports.typescriptDefinition = exports.registerAllLanguages = exports.ALL_LANGUAGES = exports.LanguageRegistry = void 0;
exports.registerDefaultLanguages = registerDefaultLanguages;
const lang_common_1 = require("@codee/lang-common");
var lang_common_2 = require("@codee/lang-common");
Object.defineProperty(exports, "LanguageRegistry", { enumerable: true, get: function () { return lang_common_2.LanguageRegistry; } });
Object.defineProperty(exports, "ALL_LANGUAGES", { enumerable: true, get: function () { return lang_common_2.ALL_LANGUAGES; } });
Object.defineProperty(exports, "registerAllLanguages", { enumerable: true, get: function () { return lang_common_2.registerAllLanguages; } });
var lang_typescript_1 = require("@codee/lang-typescript");
Object.defineProperty(exports, "typescriptDefinition", { enumerable: true, get: function () { return lang_typescript_1.typescriptDefinition; } });
var lang_python_1 = require("@codee/lang-python");
Object.defineProperty(exports, "pythonDefinition", { enumerable: true, get: function () { return lang_python_1.pythonDefinition; } });
var lang_rust_1 = require("@codee/lang-rust");
Object.defineProperty(exports, "rustDefinition", { enumerable: true, get: function () { return lang_rust_1.rustDefinition; } });
var lang_go_1 = require("@codee/lang-go");
Object.defineProperty(exports, "goDefinition", { enumerable: true, get: function () { return lang_go_1.goDefinition; } });
var lang_java_1 = require("@codee/lang-java");
Object.defineProperty(exports, "javaDefinition", { enumerable: true, get: function () { return lang_java_1.javaDefinition; } });
var lang_cpp_1 = require("@codee/lang-cpp");
Object.defineProperty(exports, "cppDefinition", { enumerable: true, get: function () { return lang_cpp_1.cppDefinition; } });
function registerDefaultLanguages(registry) {
    (0, lang_common_1.registerAllLanguages)(registry);
}
