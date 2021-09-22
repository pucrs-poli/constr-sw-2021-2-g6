FROM node:14.17-alpine

ENV PORT=3000
ENV BASE_URL=http://localhost/auth
ENV REALM_NAME=master

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src /app/src
COPY config /app/config

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
