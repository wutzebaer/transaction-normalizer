const Cardano = require("@emurgo/cardano-serialization-lib-nodejs");
const Message = require("@emurgo/cardano-message-signing-nodejs");

/*
const signature = {
  signature:
    "84582aa201276761646472657373581de1c72ddc77796080be458e5af6b177f48bafc7f51553a6e278c46a1d8da166686173686564f44b68656c6c6f20776f726c645840fe73368d402d64d18c2ef0a4036d5bed4973c5ea618a56138361ac10d6dd3e35654c2ce20ae63862ebd8199e03096628cd365ac51b4afcd22eec87c00194270a",
  key: "a4010103272006215820f5223c1f30c31c450aefd698870ad59a91231bec29db150a55e053b15c600ae9",
};
*/

const message = Message.COSESign1.from_bytes(
  Buffer.from(Buffer.from(process.argv[2], "hex"), "hex")
);
const headermap = message.headers().protected().deserialized_headers();
const coseKey = Message.COSEKey.from_bytes(Buffer.from(process.argv[3], "hex"));

const address = Cardano.Address.from_bytes(
  headermap.header(Message.Label.new_text("address")).as_bytes()
);
const rewardAddress = Cardano.RewardAddress.from_address(address);
const publicKey = Cardano.PublicKey.from_bytes(
  coseKey
    .header(
      Message.Label.new_int(
        Message.Int.new_negative(Message.BigNum.from_str("2"))
      )
    )
    .as_bytes()
);

const data = message.signed_data().to_bytes();
const ed25519Sig = Cardano.Ed25519Signature.from_bytes(message.signature());
if (!publicKey.verify(data, ed25519Sig)) {
  throw new Error(
    `Message integrity check failed (has the message been tampered with?)`
  );
}

if (
  !Buffer.from(rewardAddress.payment_cred().to_keyhash().to_bytes()).toString(
    "hex"
  ) === Buffer.from(publicKey.hash().to_bytes()).toString("hex")
) {
  throw new Error(
    `publicKey from signature does not match to rewardAddress from header`
  );
}

const result = {
  rewardAddress: Buffer.from(rewardAddress.to_address().to_bytes()).toString(
    "hex"
  ),
  message: Buffer.from(message.payload()).toString("utf-8"),
};

process.stdout.write(JSON.stringify(result));

//console.log(process.argv[2], process.argv[3])
// console.log("publicKey", Buffer.from(publicKey.as_bytes()).toString("hex"));
// console.log(address);
// console.log(rewardAddress.to_address().to_bech32());
// console.log(Buffer.from(rewardAddress.to_address().to_bytes()).toString("hex"));
// console.log(Buffer.from(message.payload()).toString("utf-8"));
// console.log(Buffer.from("hello world", "utf8").toString("hex"));
// api.signData((await api.getRewardAddresses())[0], "68656c6c6f20776f726c64");
// api.signData('e1b8f91f31f2d47692f2fc6198b827c9e05f5c1e1a0625fd60522b215e', "68656c6c6f20776f726c64");
