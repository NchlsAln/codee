"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualizationTemplate = visualizationTemplate;
function visualizationTemplate() {
    return [
        "library(ggplot2)",
        "ggplot(df, aes(x = x, y = y)) +",
        "  geom_point() +",
        "  geom_smooth(method = 'lm')"
    ].join("\n");
}
