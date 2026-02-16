"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caretTemplate = caretTemplate;
function caretTemplate() {
    return [
        "library(caret)",
        "data(iris)",
        "model <- train(Species ~ ., data = iris, method = 'rf')",
        "print(model)"
    ].join("\n");
}
