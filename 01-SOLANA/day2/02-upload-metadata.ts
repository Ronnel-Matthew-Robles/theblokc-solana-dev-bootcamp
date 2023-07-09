import { createMetaplexInstance } from "./metaplex";

// Initialize the metaplex instance
const metaplex = createMetaplexInstance();

// Construct the metadata of the NFT
const metadata = {
  name: "Puzzy Cat NFT",
  description: "Here's a pic of a pussy cat",
  image:
    "https://lvxeiwuu2pb73k45iiuvqrjpal7eyk3mbfqq4kpztswx7hlrlimq.arweave.net/XW5EWpTTw_2rnUIpWEUvAv5MK2wJYQ4p-Zytf51xWhk",
  attributes: [
    {
      trait_type: "Event",
      value: "Solana Developers Bootcamp",
    },
  ],
};

async function main() {
  // Upload the metadata
  const { uri } = await metaplex.nfts().uploadMetadata(metadata);

  console.log("metadata uri", uri);
  // metadata uri https://arweave.net/QupC2oWSUOOb03ptlSWzxbI8uqSaoaQdXl8XelHLpeM
}

main();
