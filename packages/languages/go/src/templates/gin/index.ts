export function ginTemplate(): string {
  return "package main\n\nimport (\n  \"net/http\"\n\n  \"github.com/gin-gonic/gin\"\n)\n\nfunc main() {\n  router := gin.Default()\n  router.GET(\"/health\", func(c *gin.Context) {\n    c.JSON(http.StatusOK, gin.H{\"ok\": true})\n  })\n  _ = router.Run(\":8080\")\n}\n";
}
