FROM node:20-alpine
LABEL authors="acontreira"

MAINTAINER Anderson Contreira <anderson.contreira@gmail.com>

WORKDIR /app

copy package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]