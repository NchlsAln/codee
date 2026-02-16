"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefAstPatterns = void 0;
exports.chefAstPatterns = [
  { pattern: '\\bpackage\\s+"', description: "Package resource" },
  { pattern: '\\bservice\\s+"', description: "Service resource" },
  { pattern: '\\btemplate\\s+"', description: "Template resource" },
  { pattern: '\\bexecute\\s+"', description: "Execute resource" },
  { pattern: "\\binclude_recipe\\b", description: "Include recipe" },
  { pattern: "\\bnotifies\\b|\\bsubscribes\\b", description: "Notifications" },
  { pattern: "node\['[\\w-]+'\]", description: "Node attribute usage" },
];
