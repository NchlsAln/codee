"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "val radius = 3.0",
        "val area = math.Pi * math.pow(radius, 2)",
        "val rounded = BigDecimal(area).setScale(2, BigDecimal.RoundingMode.HALF_UP)",
        "println(rounded)"
    ].join("\n");
}
