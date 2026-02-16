"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsTemplate = statisticsTemplate;
function statisticsTemplate() {
    return [
        "mdl = fitlm(tbl, 'y ~ x + z');",
        "disp(mdl);",
        "[h,p] = ttest(x, y);"
    ].join("\n");
}
