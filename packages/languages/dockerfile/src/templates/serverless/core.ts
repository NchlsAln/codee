export function serverlessTemplate(): string {
  return ["FROM public.ecr.aws/lambda/nodejs:18", "COPY index.js ./", 'CMD ["index.handler"]'].join(
    "\n",
  );
}
