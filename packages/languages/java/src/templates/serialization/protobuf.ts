export function protobufTemplate(): string {
  return "import com.google.protobuf.ByteString;\n\npublic class ProtobufSample {\n  public static void main(String[] args) throws Exception {\n    User user = User.newBuilder().setId(1).setEmail(\"ada@example.com\").build();\n    ByteString bytes = user.toByteString();\n    System.out.println(bytes.size());\n  }\n}\n";
}
