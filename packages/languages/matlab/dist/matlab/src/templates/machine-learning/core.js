"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineLearningTemplate = machineLearningTemplate;
function machineLearningTemplate() {
    return [
        "Mdl = fitctree(X, y);",
        "pred = predict(Mdl, X);",
        "disp(pred(1:5))"
    ].join("\n");
}
