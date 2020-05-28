FROM node:latest
WORKDIR /usr/src/app/graphqlApp
COPY package.json /usr/src/app/graphqlApp
COPY tsconfig.json /usr/src/app/graphqlApp
COPY ./src/ /usr/src/app/graphqlApp/src
RUN npm install
RUN npm run build-prod
COPY ./prisma/ /usr/src/app/graphqlApp/prisma
COPY ./dist/ /usr/src/app/graphqlApp/dist
COPY ./schema/ /usr/src/app/graphqlApp/schema
EXPOSE 4000
CMD npm run prisma-deploy && npm start
