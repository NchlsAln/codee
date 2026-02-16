"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsTemplate = statisticsTemplate;
function statisticsTemplate() {
    return [
        "proc reg data=work.cleaned;",
        "  model y = x z;",
        "run;",
        "proc ttest data=work.cleaned;",
        "  class group;",
        "  var score;",
        "run;"
    ].join("\n");
}
