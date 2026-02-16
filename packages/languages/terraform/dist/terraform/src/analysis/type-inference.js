"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferTerraformTypes = inferTerraformTypes;
function inferTerraformTypes(source) {
  const inferred = {};
  const lines = source.split(/\r?\n/);
  for (const line of lines) {
    const varType = line.match(/type\s*=\s*(\w+)/);
    if (varType?.[1]) {
      inferred[`var:${inferred.__lastVar ?? "unknown"}`] = varType[1];
    }
    const variable = line.match(/variable\s+\"(\w+)\"/);
    if (variable?.[1]) {
      inferred.__lastVar = variable[1];
    }
    const assign = line.match(/(\w+)\s*=\s*\"([^\"]*)\"/);
    if (assign?.[1]) {
      inferred[assign[1]] = "string";
    }
  }
  delete inferred.__lastVar;
  return inferred;
}
