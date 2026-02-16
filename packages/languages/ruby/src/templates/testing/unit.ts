export function unitTemplate(): string {
  return [
    "require 'minitest/autorun'",
    "class MathTest < Minitest::Test",
    "  def test_adds",
    "    assert_equal 4, 2 + 2",
    "  end",
    "end"
  ].join("\n");
}
