"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.benchmarkTemplate = benchmarkTemplate;
function benchmarkTemplate() {
    return [
        "import 'package:benchmark_harness/benchmark_harness.dart';",
        "",
        "class SortBench extends BenchmarkBase {",
        "  SortBench() : super('sort');",
        "  @override void run() => [3, 1, 2].toList()..sort();",
        "}",
        "",
        "void main() => SortBench().report();"
    ].join("\n");
}
