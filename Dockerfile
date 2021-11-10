FROM node:14.17-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src /app/src
COPY config /app/config

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
