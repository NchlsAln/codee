"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizationTemplate = visualizationTemplate;
function visualizationTemplate() {
    return [
        "proc sgplot data=work.cleaned;",
        "  scatter x=x y=y;",
        "  reg x=x y=y;",
        "run;"
    ].join("\n");
}
