# build stage
FROM node:20-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9 --activate

# deps (cache-friendly)
COPY package.json pnpm-lock.yaml nest-cli.json tsconfig*.json ./
RUN pnpm install --frozen-lockfile

# src → build
COPY src ./src
RUN pnpm build

# sanity check: dist/main.js 있어야 함
RUN ls -l dist && node -e "require('fs').accessSync('dist/main.js')"

# runtime stage
FROM node:20-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/main.js"]