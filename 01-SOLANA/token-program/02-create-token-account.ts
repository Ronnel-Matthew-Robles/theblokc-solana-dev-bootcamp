import "dotenv/config";
import * as Web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";
import base58 from "bs58";

// Get private key from env
const privateKey = process.env.SOL_PRIVATE_KEY;

async function main() {
  // Initialize a connection
  const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"));

  // Convert the private key to base58
  const base58DecodedPK = base58.decode(privateKey || "");

  // Get keypair (also called signer)
  const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK);

  const tokenAccount = await token.createAccount(
    connection,
    keyPairFromSecret,
    new Web3.PublicKey("HTEF3V3hAhQ9tYwtKKUhEe8bGZm8QDgfdvL6EpvaAghn"),
    new Web3.PublicKey("9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q")
  );

  console.log("tokenAccout", tokenAccount.toBase58());
}

main();
