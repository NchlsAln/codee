"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiCTemplate = ffiCTemplate;
function ffiCTemplate() {
    return "public class JniSample {\n  static {\n    System.loadLibrary(\"native\");\n  }\n\n  private native int add(int a, int b);\n\n  public static void main(String[] args) {\n    System.out.println(new JniSample().add(2, 3));\n  }\n}\n";
}
