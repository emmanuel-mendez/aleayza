# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.15.0
ARG NGINX_VERSION=1.25.3

FROM node:${NODE_VERSION}-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci \
  && npm cache clean --force \
  && rm -rf /tmp/*
COPY . .
RUN npm run build

FROM nginx:${NGINX_VERSION}-alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4321
CMD ["nginx", "-g", "daemon off;"]