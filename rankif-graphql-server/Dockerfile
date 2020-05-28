FROM node:latest
WORKDIR /usr/src/app/graphqlApp
COPY package.json /usr/src/app/graphqlApp
COPY tsconfig.json /usr/src/app/graphqlApp
COPY ./src/ /usr/src/app/graphqlApp/src
COPY ./prisma/ /usr/src/app/graphqlApp/prisma
COPY ./schema/ /usr/src/app/graphqlApp/schema
RUN npm install
RUN ls
RUN npm run build-prod
RUN ls
RUN pwd
RUN cd dist
RUN pwd
COPY ./dist/ /usr/src/app/graphqlApp/dist
EXPOSE 4000
CMD npm run prisma-deploy && npm start
