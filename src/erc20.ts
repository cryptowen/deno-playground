import { Contract, JsonRpcProvider } from "npm:ethers@^6";
// import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

// const env = await load();

const ENDPOINT_URL = "https://bsc.nodereal.io";

const ERC20_ABI = [
  // Read-Only Functions
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function allowance(address owner, address spender) view returns (uint256)",

  // Authenticated Functions
  "function transfer(address to, uint amount) returns (bool)",

  // Events
  "event Transfer(address indexed from, address indexed to, uint amount)",
];

async function main() {
  const provider = new JsonRpcProvider(ENDPOINT_URL);
  const busdAddr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
  const busd = new Contract(busdAddr, ERC20_ABI, provider);
  const symbol = await busd.symbol();
  console.log("symbol", symbol);
  const balance = await busd.balanceOf(
    // "0x69E26f6Dac726C08630376E1ca04bf0008364138",
    "0x61Dd481A114A2E761c554B641742C973867899D3",
  );
  console.log("balance", balance.toString());
}

main();
