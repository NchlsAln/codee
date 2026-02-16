"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitTemplate = unitTemplate;
function unitTemplate() {
    return [
        "require 'minitest/autorun'",
        "class MathTest < Minitest::Test",
        "  def test_adds",
        "    assert_equal 4, 2 + 2",
        "  end",
        "end"
    ].join("\n");
}
