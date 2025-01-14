# Only for docker-compose
FROM node:12-alpine
LABEL authors="acontreira"

MAINTAINER Anderson Contreira <anderson.contreira@gmail.com>

WORKDIR /app

RUN npm install -g json-server@0.17.4

COPY ./api-mock /app/api-mock

EXPOSE 3000

CMD [ "json-server","--host", "0.0.0.0","--watch","/app/api-mock/db.json", "--routes","/app/api-mock/routes.json"]