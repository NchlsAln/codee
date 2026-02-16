"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
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
