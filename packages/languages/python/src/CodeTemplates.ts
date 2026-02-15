import { BaseCodeTemplates } from "@codee/lang-common";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("python", {
      idioms: ["Prefer explicit imports.", "Follow PEP 8.", "Use type hints for clarity."],
      templates: {
        "django.view":
          "from django.http import JsonResponse\n\n\ndef health_check(_request):\n    return JsonResponse({\"ok\": True})\n",
        "fastapi.endpoint":
          "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/health\")\ndef health_check():\n    return {\"ok\": True}\n",
        "flask.route":
          "from flask import Flask, jsonify\n\napp = Flask(__name__)\n\n@app.get(\"/health\")\ndef health_check():\n    return jsonify(ok=True)\n"
      },
      frameworkTemplates: {
        "data.science":
          "import pandas as pd\n\n_df = pd.read_csv(\"data.csv\")\nprint(_df.head())\n"
      },
      testTemplates: {
        pytest:
          "def test_example():\n    assert True\n"
      }
    });
  }
}