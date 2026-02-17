"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.djangoAsyncTemplate = djangoAsyncTemplate;
function djangoAsyncTemplate() {
  return [
    "from django.http import JsonResponse",
    "from django.views import View",
    "",
    "class HealthView(View):",
    "    async def get(self, request):",
    "        return JsonResponse({'ok': True})",
    "",
    "# ASGI setup in asgi.py and Channels for websockets",
    "# Celery or Django-Q for background tasks",
  ].join("\n");
}
