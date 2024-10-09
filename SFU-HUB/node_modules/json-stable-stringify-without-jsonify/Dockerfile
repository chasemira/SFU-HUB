FROM node:lts

EXPOSE 3000

WORKDIR /app

ADD . /app

RUN npm ci

RUN npm run generate:openapi

CMD ["npm","run","run"]