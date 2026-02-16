"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.androidTemplate = androidTemplate;
function androidTemplate() {
    return "import android.app.Activity;\nimport android.os.Bundle;\n\npublic class MainActivity extends Activity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n  }\n}\n";
}
