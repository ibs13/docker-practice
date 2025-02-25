#Base Image

FROM node:latest

#Preparation commands and settings

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080

EXPOSE 8080

#Startup Command
CMD [ "node", "index.js" ]

