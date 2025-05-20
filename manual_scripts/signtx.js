const Cardano = require("@emurgo/cardano-serialization-lib-nodejs");

// im browser
// api = await cardano.eternl.enable();
// await (await cardano.eternl.enable()).signTx('unsignedcborfromserver', false)

const tx = Cardano.Transaction.from_bytes(
  Buffer.from(
    "84a4008182582020872fa562f9d22c265da35cd33b6172c6e14762097f0ddc685c21b984ba6b1501018282581d61c8e421ef5c8a1ed13195ba9907686dfb3b4047d9a5917a8814e45e311a002dc6c082583901956f1260ffd206478c9f079479f38faf4b73ac00c8953f6cc6dec2d8ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d7811679661a950d5a1e021a0002afe9031a0663e84aa0f5f6",
    "hex"
  )
);
const witness = Cardano.TransactionWitnessSet.from_bytes(
  Buffer.from(
    "a10081825820f9009b9270a0e89d0ecf9d39e5f96829a23238d59eb793c63103086e659054bf584064fc7a6bf90ad2a71b9bbe7214af506f4d440e149ae80921b6b816379409f0003f3655fe2c8df776fa4620db90f4cb2135f9674d6462da00a08072ddf7da1e0f",
    "hex"
  )
);

const signedtx = Cardano.Transaction.new(
  tx.body(),
  witness,
  tx.auxiliary_data()
);

console.log(Buffer.from(signedtx.to_bytes()).toString("hex"));
