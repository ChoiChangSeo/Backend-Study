FROM node:16

WORKDIR /homework/
COPY ./package.json /homework/
COPY ./yarn.lock /homework/
RUN yarn install

COPY . /homework/

CMD yarn dev