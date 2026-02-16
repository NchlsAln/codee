"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTemplate = authTemplate;
function authTemplate() {
    return [
        "from fastapi import Depends, HTTPException, status",
        "from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer",
        "",
        "security = HTTPBearer()",
        "",
        "def require_token(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:",
        "    if credentials.credentials != 'secret':",
        "        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)",
        "    return credentials.credentials"
    ].join("\n");
}
