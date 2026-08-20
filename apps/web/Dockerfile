# Node 22 Base Image for Web Frontend
FROM node:22-alpine AS builder

WORKDIR /app

# Copy root workspace and package manifests
COPY package.json ./
COPY packages/ ./packages/
COPY apps/web/package.json ./apps/web/

# Install dependencies
RUN npm install

# Copy web source code
COPY apps/web/ ./apps/web/

# Build web frontend
WORKDIR /app/apps/web
RUN npm run build

# Nginx Production Stage
FROM nginx:alpine
COPY --from=builder /app/apps/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
