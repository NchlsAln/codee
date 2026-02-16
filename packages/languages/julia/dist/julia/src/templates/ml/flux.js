"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fluxTemplate = fluxTemplate;
function fluxTemplate() {
    return [
        "using Flux",
        "model = Chain(Dense(2, 4, relu), Dense(4, 1))",
        "x = rand(Float32, 2, 10)",
        "y = rand(Float32, 1, 10)",
        "loss(x, y) = Flux.Losses.mse(model(x), y)",
        "println(loss(x, y))"
    ].join("\n");
}
