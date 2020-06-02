FROM tarampampam/node:14-alpine

WORKDIR /usr/src/app

ADD .npmrc ./
ADD .babelrc ./
ADD .env ./
ADD package.json ./
RUN yarn install

RUN NODE_ENV=development

ADD config ./config
ADD src ./src 

CMD yarn start:dev