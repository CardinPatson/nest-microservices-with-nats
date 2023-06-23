FROM node:18

WORKDIR /app

COPY gateway/package*.json ./

RUN npm i -g @nestjs/cli

RUN npm install

COPY . .

EXPOSE 3001

