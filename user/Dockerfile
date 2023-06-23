FROM node:18

WORKDIR /app

COPY user/package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .
