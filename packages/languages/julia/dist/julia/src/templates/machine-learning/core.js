"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineLearningTemplate = machineLearningTemplate;
function machineLearningTemplate() {
    return [
        "using MLJ",
        "model = @load RandomForestClassifier",
        "mach = machine(model, X, y)",
        "fit!(mach)"
    ].join("\n");
}
