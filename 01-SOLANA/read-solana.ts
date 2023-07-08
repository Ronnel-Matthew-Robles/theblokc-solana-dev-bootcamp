import * as Web3 from "@solana/web3.js";

const publicKey = new Web3.PublicKey(
  "9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q"
);

async function main() {
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));
  //   console.log("devnet url", Web3.clusterApiUrl("devnet"));
  const balance = await connection.getBalance(publicKey);
  console.log("balance", balance);
  const accountInfo = await connection.getParsedAccountInfo(publicKey);
  console.log("accountInfo", accountInfo);
}

main();
