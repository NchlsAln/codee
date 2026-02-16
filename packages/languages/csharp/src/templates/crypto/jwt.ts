export function jwtTemplate(): string {
  return [
    "using System.IdentityModel.Tokens.Jwt;",
    "using Microsoft.IdentityModel.Tokens;",
    "using System.Text;",
    "",
    "var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(\"secretsecretsecret\"));",
    "var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);",
    "var token = new JwtSecurityToken(issuer: \"app\", audience: \"app\", signingCredentials: creds);",
    "Console.WriteLine(new JwtSecurityTokenHandler().WriteToken(token));"
  ].join("\n");
}
