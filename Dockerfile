## base stage
FROM node:lts-alpine as base
WORKDIR /app
RUN npm i -g npm pnpm concurrently

COPY . .
EXPOSE 8080
RUN cd backend && pnpm i
CMD cd backend && pnpm dev