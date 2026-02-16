"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsTemplate = statisticsTemplate;
function statisticsTemplate() {
    return [
        "fit <- lm(y ~ x + z, data = df)",
        "summary(fit)",
        "t.test(df$x, df$y)"
    ].join("\n");
}
