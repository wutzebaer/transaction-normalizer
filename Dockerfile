FROM node

WORKDIR /usr/app
RUN npm i @emurgo/cardano-serialization-lib-nodejs@11.5.0
RUN npm i @emurgo/cardano-message-signing-nodejs@1.0.1
COPY normalize.js normalize.js
COPY validate.js validate.js
COPY transactionSignatures.js transactionSignatures.js