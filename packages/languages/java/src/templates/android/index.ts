export function androidTemplate(): string {
  return "import android.app.Activity;\nimport android.os.Bundle;\n\npublic class MainActivity extends Activity {\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n  }\n}\n";
}
