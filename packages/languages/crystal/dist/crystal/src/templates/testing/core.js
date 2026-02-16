"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingTemplate = testingTemplate;
function testingTemplate() {
    return [
        "require \"spec\"",
        "describe \"math\" do",
        "  it \"adds\" do",
        "    (1 + 2).should eq(3)",
        "  end",
        "end",
        "require \"benchmark\"",
        "Benchmark.ips do |x|",
        "  x.report(\"sum\") { (1..1000).sum }",
        "end"
    ].join("\n");
}
