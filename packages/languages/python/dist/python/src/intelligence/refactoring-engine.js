"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refactoringEngine = void 0;
exports.refactoringEngine = {
  overview: "Refactor Python services toward modern patterns.",
  transformations: [
    "Extract service classes for IO boundaries",
    "Introduce async for parallel IO",
    "Convert dicts to dataclasses or Pydantic models",
    "Add type hints incrementally",
  ],
  checks: ["duplicate logic", "long functions", "implicit globals", "tight coupling"],
};
