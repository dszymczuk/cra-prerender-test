FROM node:10

WORKDIR /home/node/client

COPY ./package.json ./package.json

RUN npm install

COPY ./src ./src
COPY ./public ./public

RUN npm run build

COPY ./server/index.js .

CMD ["node","index.js"]