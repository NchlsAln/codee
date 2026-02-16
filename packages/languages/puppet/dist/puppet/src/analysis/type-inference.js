"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferPuppetTypes = inferPuppetTypes;
function inferPuppetTypes(source) {
  const inferred = {};
  const lines = source.split(/\r?\n/);
  for (const line of lines) {
    const assign = line.match(/^\s*\$(\w+)\s*=\s*"([^"]*)"/);
    if (assign?.[1]) {
      inferred[assign[1]] = "string";
    }
    const numAssign = line.match(/^\s*\$(\w+)\s*=\s*\d+(?:\.\d+)?/);
    if (numAssign?.[1]) {
      inferred[numAssign[1]] = "number";
    }
  }
  return inferred;
}
