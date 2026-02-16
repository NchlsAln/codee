export function djangoTemplate(): string {
  return [
    "from django.http import JsonResponse",
    "from django.views.decorators.http import require_GET",
    "",
    "@require_GET",
    "def health_check(_request):",
    "    return JsonResponse({\"ok\": True})"
  ].join("\n");
}
