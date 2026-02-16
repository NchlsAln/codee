"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "import math",
        "import statistics",
        "",
        "values = [2.0, 4.0, 4.0, 4.0, 5.0]",
        "mean = statistics.mean(values)",
        "std = statistics.pstdev(values)",
        "hyp = math.hypot(3.0, 4.0)",
        "",
        "print(mean, std, hyp)"
    ].join("\n");
}
