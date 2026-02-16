"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathTemplate = mathTemplate;
function mathTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n  \"math\"\n)\n\nfunc main() {\n  values := []float64{2, 4, 4, 4, 5}\n  var sum float64\n  for _, v := range values {\n    sum += v\n  }\n  mean := sum / float64(len(values))\n  var variance float64\n  for _, v := range values {\n    diff := v - mean\n    variance += diff * diff\n  }\n  variance /= float64(len(values))\n  fmt.Println(mean, math.Sqrt(variance))\n}\n";
}
