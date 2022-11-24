FROM node

WORKDIR /usr/app
RUN npm i @emurgo/cardano-serialization-lib-nodejs@11.1.0
COPY normalize.js normalize.js