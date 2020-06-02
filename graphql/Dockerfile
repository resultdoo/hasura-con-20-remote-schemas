FROM tarampampam/node:14-alpine

WORKDIR /usr/src/app

ADD package.json ./
ADD .npmrc ./
ADD .babelrc ./
ADD .env ./
RUN yarn install

RUN NODE_ENV=development

ADD src ./src 

CMD yarn start