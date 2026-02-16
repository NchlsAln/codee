"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineLearningTemplate = machineLearningTemplate;
function machineLearningTemplate() {
    return [
        "proc hpsplit data=work.cleaned;",
        "  class group;",
        "  model group = x y z;",
        "run;"
    ].join("\n");
}
