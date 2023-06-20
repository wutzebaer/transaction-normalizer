FROM node

WORKDIR /usr/app
RUN npm i @emurgo/cardano-serialization-lib-nodejs@11.4.0
RUN npm i @emurgo/cardano-message-signing-nodejs@1.0.1
COPY normalize.js normalize.js
COPY validate.js validate.js