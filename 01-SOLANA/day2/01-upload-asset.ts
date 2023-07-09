import { createMetaplexInstance } from "./metaplex";
import { toMetaplexFile } from "@metaplex-foundation/js";
import fs from "fs";

// Read the file you want to upload to Arweave
const buffer = fs.readFileSync(__dirname + "/assets/pic.jpg");
const file = toMetaplexFile(buffer, "image.jpg");

// Initialize the metaplex instance
const metaplex = createMetaplexInstance();

async function main() {
  // Upload the file (ex. image, pdf, etc.)
  const imageUrl = await metaplex.storage().upload(file);

  console.log("image Url", imageUrl);
  // image Url https://arweave.net/XW5EWpTTw_2rnUIpWEUvAv5MK2wJYQ4p-Zytf51xWhk
  // pdf Url https://arweave.net/PTi-LZbkhnmU0eoRGgmshIFbeB6k4HYZqO_EzX5iiiw
}

main();
