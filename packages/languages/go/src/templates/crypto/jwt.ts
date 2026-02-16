export function jwtTemplate(): string {
  return "package main\n\nimport (\n  \"fmt\"\n  \"github.com/golang-jwt/jwt/v5\"\n)\n\nfunc main() {\n  token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{\"sub\": \"user-1\"})\n  signed, _ := token.SignedString([]byte(\"secret\"))\n  fmt.Println(signed)\n}\n";
}
