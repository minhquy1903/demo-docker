FROM node:16-alpine

WORKDIR /demo-docker

COPY . .

RUN npm install

CMD [ "npm", "run", "start:dev"]