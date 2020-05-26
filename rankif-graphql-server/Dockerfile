FROM node:latest
WORKDIR /usr/src/app/graphqlApp
COPY package.json /usr/src/app/graphqlApp
COPY ./dist/ /usr/src/app/graphqlApp/dist
COPY ./prisma/ /usr/src/app/graphqlApp/prisma
COPY ./schema/ /usr/src/app/graphqlApp/schema
RUN npm install
EXPOSE 4000
CMD npm run prisma-deploy && npm start
