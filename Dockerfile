FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./
COPY apps ./apps
COPY packages ./packages
COPY tools ./tools
COPY tsconfig*.json ./

RUN npm install

CMD ["npm", "run", "build"]
