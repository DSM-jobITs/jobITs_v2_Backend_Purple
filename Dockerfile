FROM node:latest

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm i
RUN npm i ts-node
RUN npm i typescript

CMD ["npm", "start"]