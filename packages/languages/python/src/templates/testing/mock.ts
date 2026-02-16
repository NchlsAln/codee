export function mockTemplate(): string {
  return [
    "from unittest.mock import patch",
    "",
    "def fetch_user() -> str:",
    "    return 'real-user'",
    "",
    "def test_fetch_user():",
    "    with patch(__name__ + '.fetch_user', return_value='mock-user'):",
    "        assert fetch_user() == 'mock-user'"
  ].join("\n");
}
