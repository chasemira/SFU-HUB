FROM node:lts

EXPOSE 3000

WORKDIR /app

ADD package.json package-lock.json prisma /app/

RUN npm ci

RUN npm run generate:prisma

RUN npm run build

CMD ["npm","run","run"]