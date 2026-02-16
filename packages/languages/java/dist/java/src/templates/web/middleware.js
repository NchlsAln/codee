"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return "import jakarta.servlet.FilterChain;\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.web.filter.OncePerRequestFilter;\n\nimport java.io.IOException;\n\npublic class RequestIdFilter extends OncePerRequestFilter {\n  @Override\n  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {\n    String id = request.getHeader(\"x-request-id\");\n    if (id == null) {\n      id = java.util.UUID.randomUUID().toString();\n    }\n    response.setHeader(\"x-request-id\", id);\n    filterChain.doFilter(request, response);\n  }\n}\n";
}
