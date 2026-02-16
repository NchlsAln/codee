"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetAstPatterns = void 0;
exports.puppetAstPatterns = [
  { pattern: "\\bclass\\s+\\w+", description: "Class definition" },
  { pattern: "\\bdefine\\s+\\w+", description: "Defined type" },
  { pattern: "\\binclude\\s+\\w+", description: "Class inclusion" },
  { pattern: "\\brequire\\s*=>", description: "Resource ordering" },
  { pattern: "\\bbefore\\s*=>", description: "Resource ordering" },
  { pattern: "\\bnotify\\s*=>", description: "Notifications" },
  { pattern: "\\bensure\\s*=>", description: "State enforcement" },
];
