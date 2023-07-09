import { createMetaplexInstance } from "./metaplex";

async function main() {
  // Initialize the metaplex instance
  const metaplex = createMetaplexInstance();
  // Set the metadata uri
  const metadataUri =
    "https://arweave.net/QupC2oWSUOOb03ptlSWzxbI8uqSaoaQdXl8XelHLpeM";

  // Create the NFT
  const { nft } = await metaplex.nfts().create({
    uri: metadataUri,
    name: "SolDevBootcamp", // name of the nft
    sellerFeeBasisPoints: 0, // royalty fee
  });
  console.log("nft", nft);

  //   nft {
  //     model: 'nft',
  //     updateAuthorityAddress: PublicKey [PublicKey(9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q)] {
  //       _bn: <BN: 855964e6b777261321e562a151925f46449f41a2ab8b6dbda61d913b6dd0bddb>
  //     },
  //     json: {
  //       name: 'Puzzy Cat NFT',
  //       description: "Here's a pic of a pussy cat",
  //       image: 'https://lvxeiwuu2pb73k45iiuvqrjpal7eyk3mbfqq4kpztswx7hlrlimq.arweave.net/XW5EWpTTw_2rnUIpWEUvAv5MK2wJYQ4p-Zytf51xWhk',
  //       attributes: [ [Object] ]
  //     },
  //     jsonLoaded: true,
  //     name: 'SolDevBootcamp',
  //     symbol: '',
  //     uri: 'https://arweave.net/QupC2oWSUOOb03ptlSWzxbI8uqSaoaQdXl8XelHLpeM',
  //     isMutable: true,
  //     primarySaleHappened: false,
  //     sellerFeeBasisPoints: 0,
  //     editionNonce: 252,
  //     creators: [
  //       {
  //         address: [PublicKey [PublicKey(9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q)]],
  //         verified: true,
  //         share: 100
  //       }
  //     ],
  //     tokenStandard: 0,
  //     collection: null,
  //     collectionDetails: null,
  //     uses: null,
  //     programmableConfig: null,
  //     address: PublicKey [PublicKey(6LgT4rziQHPwx38HmgEd5Lwtp3oxqjZRQvcuvs5Wb3iT)] {
  //       _bn: <BN: 4f55135b2d270e8e2113b09736ce8fcbfe85a90c94e59c75930462dfcf86814c>
  //     },
  //     metadataAddress: Pda [PublicKey(H1xaYvUsZVCYEshEZvtZ8mfNx8Grfqi2B92QjF18ji7b)] {
  //       _bn: <BN: edf9d5658e513ad9115189a3bdf2926527a58f3215bbac8f511f7d65a1ff43c2>,
  //       bump: 255
  //     },
  //     mint: {
  //       model: 'mint',
  //       address: PublicKey [PublicKey(6LgT4rziQHPwx38HmgEd5Lwtp3oxqjZRQvcuvs5Wb3iT)] {
  //         _bn: <BN: 4f55135b2d270e8e2113b09736ce8fcbfe85a90c94e59c75930462dfcf86814c>
  //       },
  //       mintAuthorityAddress: PublicKey [PublicKey(3FXG75u9MSuFsYyvEUsQcFiJhhnAiUsCirKeEdqb1nW8)] {
  //         _bn: <BN: 216fb8837cead7646edf6724e4bb7aaa0722bc066753be40d566df4b55b83e8d>
  //       },
  //       freezeAuthorityAddress: PublicKey [PublicKey(3FXG75u9MSuFsYyvEUsQcFiJhhnAiUsCirKeEdqb1nW8)] {
  //         _bn: <BN: 216fb8837cead7646edf6724e4bb7aaa0722bc066753be40d566df4b55b83e8d>
  //       },
  //       decimals: 0,
  //       supply: { basisPoints: <BN: 1>, currency: [Object] },
  //       isWrappedSol: false,
  //       currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
  //     },
  //     token: {
  //       model: 'token',
  //       address: Pda [PublicKey(9DiaU9Jb6fDVBCcXyLN7YssqWjFJZDBkZEkLfgef7q1f)] {
  //         _bn: <BN: 7a1f79f6ce2caa35f236cf1895b6ac114a4dbe2c6f3e571d981e37b2e61c9c16>,
  //         bump: 254
  //       },
  //       isAssociatedToken: true,
  //       mintAddress: PublicKey [PublicKey(6LgT4rziQHPwx38HmgEd5Lwtp3oxqjZRQvcuvs5Wb3iT)] {
  //         _bn: <BN: 4f55135b2d270e8e2113b09736ce8fcbfe85a90c94e59c75930462dfcf86814c>
  //       },
  //       ownerAddress: PublicKey [PublicKey(9yYHVrCeqwwByrkUBUYmTcF4Wz7NbF5gi3RKFgJftD7Q)] {
  //         _bn: <BN: 855964e6b777261321e562a151925f46449f41a2ab8b6dbda61d913b6dd0bddb>
  //       },
  //       amount: { basisPoints: <BN: 1>, currency: [Object] },
  //       closeAuthorityAddress: null,
  //       delegateAddress: null,
  //       delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
  //       state: 1
  //     },
  //     edition: {
  //       model: 'nftEdition',
  //       isOriginal: true,
  //       address: Pda [PublicKey(3FXG75u9MSuFsYyvEUsQcFiJhhnAiUsCirKeEdqb1nW8)] {
  //         _bn: <BN: 216fb8837cead7646edf6724e4bb7aaa0722bc066753be40d566df4b55b83e8d>,
  //         bump: 252
  //       },
  //       supply: <BN: 0>,
  //       maxSupply: <BN: 0>
  //     }
  //   }
}

main();
