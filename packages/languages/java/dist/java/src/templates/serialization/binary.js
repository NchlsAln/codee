"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return "import java.io.ByteArrayOutputStream;\nimport java.io.ObjectOutputStream;\n\npublic class BinarySample {\n  public static void main(String[] args) throws Exception {\n    try (ByteArrayOutputStream out = new ByteArrayOutputStream(); ObjectOutputStream oos = new ObjectOutputStream(out)) {\n      oos.writeObject(\"payload\");\n      System.out.println(out.toByteArray().length);\n    }\n  }\n}\n";
}
