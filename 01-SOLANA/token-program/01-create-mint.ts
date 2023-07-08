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

  // Create the mint
  const tokenMint = await token.createMint(
    connection,
    keyPairFromSecret,
    new Web3.PublicKey("9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q"),
    new Web3.PublicKey("9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q"),
    9
  );

  console.log("tokenMint", tokenMint.toBase58());
  // HTEF3V3hAhQ9tYwtKKUhEe8bGZm8QDgfdvL6EpvaAghn
}

main();
