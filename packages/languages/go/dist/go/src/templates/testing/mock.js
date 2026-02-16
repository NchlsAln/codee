"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockTemplate = mockTemplate;
function mockTemplate() {
    return "package main\n\nimport (\n  \"testing\"\n\n  \"github.com/stretchr/testify/mock\"\n)\n\ntype API struct { mock.Mock }\n\nfunc (a *API) Fetch() string {\n  args := a.Called()\n  return args.String(0)\n}\n\nfunc TestMock(t *testing.T) {\n  api := new(API)\n  api.On(\"Fetch\").Return(\"mock\")\n  _ = api.Fetch()\n}\n";
}
