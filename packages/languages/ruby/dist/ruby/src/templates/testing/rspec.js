"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rspecTemplate = rspecTemplate;
function rspecTemplate() {
    return [
        "RSpec.describe 'math' do",
        "  it 'adds numbers' do",
        "    expect(2 + 2).to eq(4)",
        "  end",
        "end"
    ].join("\n");
}
