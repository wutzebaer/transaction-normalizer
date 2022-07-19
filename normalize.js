const CSL = require("@emurgo/cardano-serialization-lib-nodejs");

let tx = CSL.Transaction.from_bytes(Buffer.from(process.argv[2], "hex"));

let cbor = Buffer.from(tx.to_bytes()).toString('hex');

process.stdout.write(cbor);