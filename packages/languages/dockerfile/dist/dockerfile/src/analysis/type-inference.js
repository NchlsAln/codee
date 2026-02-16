"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferDockerfileTypes = inferDockerfileTypes;
function inferDockerfileTypes(source) {
  const inferred = {};
  const lines = source.split(/\r?\n/);
  for (const line of lines) {
    const argMatch = line.match(/^ARG\s+(\w+)/);
    if (argMatch?.[1]) {
      inferred[`ARG:${argMatch[1]}`] = "string";
    }
    const envMatch = line.match(/^ENV\s+(\w+)=/);
    if (envMatch?.[1]) {
      inferred[`ENV:${envMatch[1]}`] = "string";
    }
    const fromMatch = line.match(/^FROM\s+([^\s]+)/);
    if (fromMatch?.[1]) {
      inferred.baseImage = fromMatch[1];
    }
  }
  return inferred;
}
