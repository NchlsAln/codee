"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineLearningTemplate = machineLearningTemplate;
function machineLearningTemplate() {
    return [
        "library(caret)",
        "set.seed(42)",
        "model <- train(y ~ ., data = df, method = 'rf')",
        "print(model)"
    ].join("\n");
}
