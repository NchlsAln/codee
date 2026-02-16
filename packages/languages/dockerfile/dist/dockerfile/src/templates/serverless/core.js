"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverlessTemplate = serverlessTemplate;
function serverlessTemplate() {
  return ["FROM public.ecr.aws/lambda/nodejs:18", "COPY index.js ./", 'CMD ["index.handler"]'].join(
    "\n",
  );
}
