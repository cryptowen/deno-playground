import { Contract, JsonRpcProvider, Wallet } from "npm:ethers@^6";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";

const env = await load();

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
  const provider = new JsonRpcProvider(env.ENDPOINT_URL);
  const wallet = new Wallet(env.PRIVATE_KEY!, provider);
  console.log(await provider.getBalance(wallet.address));
  //   const busdAddr = '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
  //   const busd = new Contract(busdAddr, ERC20_ABI, provider);
  //   const symbol = await busd.symbol();
  //   console.log('symbol', symbol);
  //   const allowance = await busd.allowance('0x6836CbaCbBd1E798cC56802AC7d8BDf6Da0d0980', '0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840');
  //   console.log('allowance', allowance.toString());
}

main();
