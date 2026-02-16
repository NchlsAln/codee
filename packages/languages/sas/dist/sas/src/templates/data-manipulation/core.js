"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataManipulationTemplate = dataManipulationTemplate;
function dataManipulationTemplate() {
    return [
        "data work.cleaned;",
        "  set work.raw;",
        "  if score > 80;",
        "  length group $20;",
        "run;",
        "proc sort data=work.cleaned; by group; run;"
    ].join("\n");
}
