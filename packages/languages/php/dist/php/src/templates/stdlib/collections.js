"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsTemplate = collectionsTemplate;
function collectionsTemplate() {
    return [
        "$users = [\"Ada\", \"Linus\", \"Grace\"];",
        "$filtered = array_filter($users, fn($u) => str_starts_with($u, \"A\"));",
        "$upper = array_map(fn($u) => strtoupper($u), $users);",
        "$total = array_reduce([1, 2, 3], fn($acc, $n) => $acc + $n, 0);",
        "print_r($filtered);",
        "print_r($upper);",
        "echo $total;"
    ].join("\n");
}
