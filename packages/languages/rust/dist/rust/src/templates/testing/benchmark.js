"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
    return [
        "use criterion::{criterion_group, criterion_main, Criterion};",
        "",
        "fn bench_map(c: &mut Criterion) {",
        "    c.bench_function(\"square\", |b| {",
        "        b.iter(|| (0..1000).map(|v| v * v).collect::<Vec<_>>())",
        "    });",
        "}",
        "",
        "criterion_group!(benches, bench_map);",
        "criterion_main!(benches);"
    ].join("\n");
}
