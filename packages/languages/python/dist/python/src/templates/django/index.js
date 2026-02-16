"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.djangoTemplate = djangoTemplate;
function djangoTemplate() {
    return [
        "from django.http import JsonResponse",
        "from django.views.decorators.http import require_GET",
        "",
        "@require_GET",
        "def health_check(_request):",
        "    return JsonResponse({\"ok\": True})"
    ].join("\n");
}
