const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

// Whitelisted addresses
let whitelisted = [
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
];

let leafNodes = whitelisted.map((addr) => keccak256(addr));
let merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkleTree.getRoot();

// Gets merkle tree
console.log(merkleTree.toString());

// selecting address from array
const address = leafNodes[0];

// gives proof for particular address
const hexProof = merkleTree.getHexProof(address);

console.log(hexProof);
