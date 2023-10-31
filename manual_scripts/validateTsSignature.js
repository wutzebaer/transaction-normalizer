const Cardano = require("@emurgo/cardano-serialization-lib-nodejs");

const txCbor =
  "84a50081825820f169ecc6417d573d3138cb2fdfd53ce1ef1465254d0af4c78d820383f1f8e76201018282583901956f1260ffd206478c9f079479f38faf4b73ac00c8953f6cc6dec2d8ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d7811679661a002dc6c082583901956f1260ffd206478c9f079479f38faf4b73ac00c8953f6cc6dec2d8ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d7811679661a953da2e3021a0002ddcd031a0663aec00758207fee961645586d071066b46481ecb65c21b6c1dcbe2915f486cb5a5b9db9eeb0a10081825820f9009b9270a0e89d0ecf9d39e5f96829a23238d59eb793c63103086e659054bf5840f3b05a91f46003ae827ad56348e7b958a13f3d3161841a026855d49e296fe630366f1aeb384085ad1aeb28ad2d6076cfb72cd506a041162a4f821e15a3466208f5d90103a100a11902a2a1636d7367837840504c4541534520434f4e4649524d3a205965732c20492077616e7420746f206c696e6b206d792077616c6c657420277374616b65317538776d75376a6330653478406136666e356861666c637a666a79366161677768737868367735703768737974386a657368687930726e2720776974682074686520446973636f72642061636378386f756e7420277775747a6562616572272c20736f20746861742069742063616e20616363657373206d79206472696c6c7a2d746f6b656e2e";

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
  console.log("valid", isValid);

  if (isValid) {
    validPaymentSignatures.push(
      Buffer.from(vkey.public_key().hash().to_bytes()).toString("hex")
    );
  }
}

// Prints hash of public key of baseaddress part

const address = Cardano.Address.from_bech32(
  "addr1qx2k7ynqllfqv3uvnureg70n37h5kuavqryf20mvcm0v9kxahea9slntm5n8f06nlsynyf4m6sa0qd05agra0qgk09nqjm5fxn"
);
const baseAddress = Cardano.BaseAddress.from_address(address);
console.log(
  Buffer.from(baseAddress.payment_cred().to_keyhash().to_bytes()).toString(
    "hex"
  )
);

console.log(validPaymentSignatures);

// 01956f1260ffd206478c9f079479f38faf4b73ac00c8953f6cc6dec2d8ddbe7a587e6bdd2674bf53fc093226bbd43af035f4ea07d781167966
// f10f7de5d68b5bac576ac3e2c0be792f25936e3283fd5357f23c6204
// 90cc1524808244ab92fad4963dd1693d327f12d4a4f548696f3ea969
