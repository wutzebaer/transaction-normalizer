FROM node

WORKDIR /usr/app
RUN npm i @emurgo/cardano-serialization-lib-nodejs@11.0.0
COPY normalize.js normalize.js