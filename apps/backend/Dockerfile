FROM node:lts

EXPOSE 3000

WORKDIR /app

ADD package.json package-lock.json /app/

RUN npm ci

ADD . /app

RUN npm run generate:prisma

RUN npm run build

CMD ["npm","run","run"]