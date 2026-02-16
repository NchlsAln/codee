"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffiNativeTemplate = ffiNativeTemplate;
function ffiNativeTemplate() {
    return "import com.sun.jna.Library;\nimport com.sun.jna.Native;\n\npublic class JnaSample {\n  public interface Lib extends Library {\n    Lib INSTANCE = Native.load(\"native\", Lib.class);\n    int add(int a, int b);\n  }\n\n  public static void main(String[] args) {\n    System.out.println(Lib.INSTANCE.add(2, 3));\n  }\n}\n";
}
