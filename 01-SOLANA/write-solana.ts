import "dotenv/config";
import * as Web3 from "@solana/web3.js";
import base58 from "bs58";

// import { SystemProgram } from '@solana/web3.js'

// Get private key from env
const privateKey = process.env.SOL_PRIVATE_KEY;

async function main() {
  // initialize the transaction
  const transaction = new Web3.Transaction();

  // Write the instruction
  const sendSolInstruction = Web3.SystemProgram.transfer({
    fromPubkey: new Web3.PublicKey(
      "9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q"
    ),
    toPubkey: new Web3.PublicKey(
      "FqfCfToJUp4BSdCwZV6xWeDkR48eonU5TwPtRJuqPTH4"
    ),
    lamports: 0.1 * Web3.LAMPORTS_PER_SOL,
  });

  // Add the instruction to the transaction
  transaction.add(sendSolInstruction);

  // Convert to private key to base58
  const base58DecodedPK = base58.decode(privateKey || "");

  // Get keypair
  const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK);

  // Initialize a connection
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));

  // Once the transaction is submitted to blockchain, a transaction hash will be returned
  const txHash = await Web3.sendAndConfirmTransaction(connection, transaction, [
    keyPairFromSecret,
  ]);
  console.log("txhash", txHash);
}

main();
