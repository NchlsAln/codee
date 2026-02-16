export function mockTemplate(): string {
  return "import org.junit.jupiter.api.Test;\nimport static org.mockito.Mockito.*;\n\ninterface Api {\n  String fetch();\n}\n\nclass MockTest {\n  @Test\n  void mocks() {\n    Api api = mock(Api.class);\n    when(api.fetch()).thenReturn(\"mock\");\n    api.fetch();\n  }\n}\n";
}
