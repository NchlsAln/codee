export function jsonTemplate(): string {
  return "import com.fasterxml.jackson.databind.ObjectMapper;\n\npublic class JsonSample {\n  record User(int id, String email) {}\n\n  public static void main(String[] args) throws Exception {\n    ObjectMapper mapper = new ObjectMapper();\n    String payload = mapper.writeValueAsString(new User(1, \"ada@example.com\"));\n    System.out.println(payload);\n  }\n}\n";
}
