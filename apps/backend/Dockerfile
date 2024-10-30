FROM node:lts

EXPOSE 3000

WORKDIR /app

ADD . /app

RUN npm ci

RUN npm run generate:prisma

RUN npm run build

CMD ["npm","run","run"]