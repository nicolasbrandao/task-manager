## base stage
FROM node:lts-alpine as base
WORKDIR /app
RUN npm i -g npm pnpm concurrently

COPY . .
RUN cd backend && pnpm i
RUN cd frontend && pnpm i
EXPOSE 8080
CMD npx concurrently "cd backend && pnpm dev" "cd frontend && pnpm dev"
