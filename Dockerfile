## base stage
FROM node:lts-alpine as base
WORKDIR /app
RUN npm i -g npm pnpm concurrently

COPY . .
RUN cd backend && pnpm i
CMD npx cd backend && pnpm dev