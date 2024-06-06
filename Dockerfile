FROM node:20-alpine AS development
WORKDIR /home/app
COPY . .

FROM node:20-alpine AS install
WORKDIR /home/app
COPY --from=development /home/app/package*.json ./
RUN npm ci && npm cache clean --force
COPY --from=development /home/app .

FROM node:20-alpine AS build
WORKDIR /home/app
COPY --from=install /home/app .
RUN npm run build

FROM httpd:2.4-alpine AS production
RUN echo -e "\nServerName localhost\nDocumentRoot /usr/local/apache2/htdocs/\nErrorDocument 404 /404.html" >> /usr/local/apache2/conf/httpd.conf
COPY --from=build /home/app/dist/ /usr/local/apache2/htdocs/
EXPOSE 80