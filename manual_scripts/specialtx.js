const cardano = require("@emurgo/cardano-serialization-lib-nodejs");

const linearFee = cardano.LinearFee.new(
  cardano.BigNum.from_str("44"),
  cardano.BigNum.from_str("155381")
);

const senderUtxo = cardano.TransactionInput.new(
  cardano.TransactionHash.from_bytes(
    Buffer.from(
      "4efa5f2ccef15a1b2a427e2c1eda3a761f2116ee7138af22866205f719c0f09d",
      "hex"
    )
  ),
  0
);

const receiverAddress = cardano.Address.from_bytes(
  Buffer.from(
    "01956f1260ffd206478c9f079479f38faf4b73ac00c8953f6cc6dec2d8ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d781167966",
    "hex"
  )
);

const txBuilderCfg = cardano.TransactionBuilderConfigBuilder.new()
  .fee_algo(linearFee)
  .pool_deposit(cardano.BigNum.from_str("500000000"))
  .key_deposit(cardano.BigNum.from_str("2000000"))
  .max_value_size(4000)
  .max_tx_size(8000)
  .coins_per_utxo_word(cardano.BigNum.from_str("34482"))
  .build();

const txBuilder = cardano.TransactionBuilder.new(txBuilderCfg);
