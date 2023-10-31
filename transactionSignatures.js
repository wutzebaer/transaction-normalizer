const Cardano = require("@emurgo/cardano-serialization-lib-nodejs");

const txCbor = process.argv[2];
const tx = Cardano.Transaction.from_bytes(Buffer.from(txCbor, "hex"));
const witnesses = tx.witness_set();
const vkeyWitnesses = witnesses.vkeys();

const validPaymentSignatures = [];

for (let i = 0; i < vkeyWitnesses.len(); i++) {
  const witness = vkeyWitnesses.get(i);
  const vkey = witness.vkey();
  const signature = witness.signature();
  const isValid = vkey
    .public_key()
    .verify(Cardano.hash_transaction(tx.body()).to_bytes(), signature);

  if (isValid) {
    validPaymentSignatures.push(
      Buffer.from(vkey.public_key().hash().to_bytes()).toString("hex")
    );
  }
}

process.stdout.write(JSON.stringify(validPaymentSignatures));
