"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return [
        "let values = [2.0_f64, 4.0, 4.0, 4.0, 5.0];",
        "let mean = values.iter().sum::<f64>() / values.len() as f64;",
        "let variance = values.iter().map(|v| (v - mean).powi(2)).sum::<f64>() / values.len() as f64;",
        "let std = variance.sqrt();",
        "",
        "println!(\"{:.2} {:.2}\", mean, std);"
    ].join("\n");
}
