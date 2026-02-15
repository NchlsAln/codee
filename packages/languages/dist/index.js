"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonDefinition = exports.typescriptDefinition = exports.LanguageRegistry = void 0;
exports.registerDefaultLanguages = registerDefaultLanguages;
const lang_typescript_1 = require("@codee/lang-typescript");
const lang_python_1 = require("@codee/lang-python");
var lang_common_1 = require("@codee/lang-common");
Object.defineProperty(exports, "LanguageRegistry", { enumerable: true, get: function () { return lang_common_1.LanguageRegistry; } });
var lang_typescript_2 = require("@codee/lang-typescript");
Object.defineProperty(exports, "typescriptDefinition", { enumerable: true, get: function () { return lang_typescript_2.typescriptDefinition; } });
var lang_python_2 = require("@codee/lang-python");
Object.defineProperty(exports, "pythonDefinition", { enumerable: true, get: function () { return lang_python_2.pythonDefinition; } });
function registerDefaultLanguages(registry) {
    registry.registerLanguage(lang_typescript_1.typescriptDefinition);
    registry.registerLanguage(lang_python_1.pythonDefinition);
}
