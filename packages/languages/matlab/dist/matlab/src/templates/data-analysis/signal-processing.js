"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signalTemplate = signalTemplate;
function signalTemplate() {
    return [
        "t = 0:0.01:1;",
        "x = sin(2*pi*5*t);",
        "y = lowpass(x, 3, 100);",
        "plot(t, y);"
    ].join("\n");
}
