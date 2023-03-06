FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g express
RUN npm install -g mysql

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]