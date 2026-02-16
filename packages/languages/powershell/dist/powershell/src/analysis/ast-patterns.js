"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.powershellAstPatterns = void 0;
exports.powershellAstPatterns = [
    { pattern: "\\bGet-\\w+\\b", description: "Cmdlet usage" },
    { pattern: "\\|\\s*Where-Object\\b", description: "Pipeline filtering" },
    { pattern: "\\|\\s*Select-Object\\b", description: "Pipeline projection" },
    { pattern: "\\bForEach-Object\\b", description: "Pipeline iteration" },
    { pattern: "\\bInvoke-Command\\b", description: "Remoting usage" },
    { pattern: "\\bEnter-PSSession\\b", description: "Interactive remoting" },
    { pattern: "\\bGet-Credential\\b", description: "Credential handling" },
    { pattern: "\\b\\$ErrorActionPreference\\b", description: "Error handling policy" },
    { pattern: "\\[\\w+\\]\\s*\\$\\w+", description: "Type accelerator usage" },
    { pattern: "\\bNew-Object\\b", description: ".NET object creation" },
    { pattern: "\\bImport-Module\\b", description: "Module import" }
];
