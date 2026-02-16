"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return [
        "from concurrent.futures import ProcessPoolExecutor",
        "",
        "def square(value: int) -> int:",
        "    return value * value",
        "",
        "with ProcessPoolExecutor() as pool:",
        "    results = list(pool.map(square, [1, 2, 3, 4]))",
        "    print(results)"
    ].join("\n");
}
