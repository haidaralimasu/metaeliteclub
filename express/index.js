const cors = require("cors");
const express = require("express");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

const app = express();
app.use(cors());
const port = 8000;

const whitelisted = [
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
  "0xA9889aAC1c8d0e8d5F874CdC9D475D0Dfcf32EB1",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xF9eF71BF3F5834BB75C9DD20E041bDfEbE931fD2",
  "0xf9536F78D9bad7578b94d3469094d4f893aE3871",
  "0x376D63Ec528Cb7ffa39749aE6751adBa02AF19aC",
];

let leafNodes = whitelisted.map((addr) => keccak256(addr));
let merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

app.get("/get-proof/:useraddress", (req, res) => {
  const user = req.params.useraddress;
  const useraddr = user.toLowerCase();
  const wl = whitelisted.map((address) => address.toLowerCase());
  const id = wl.indexOf(useraddr);
  const addressOfUser = leafNodes[id];

  const hexProof = merkleTree.getHexProof(addressOfUser);
  res.json(hexProof);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
