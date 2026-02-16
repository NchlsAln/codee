export function rspecTemplate(): string {
  return [
    "RSpec.describe 'math' do",
    "  it 'adds numbers' do",
    "    expect(2 + 2).to eq(4)",
    "  end",
    "end"
  ].join("\n");
}
