// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

//Returns the Ethere balance of a given address.
async function getBalance(address){
  const balanceBigInt =await  hre.waffle.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}


//logs the Ether balances for a list of addresses
async function printBalances(addresses) {
  let idx=0;
  for(const address of addresses) {
    console.log(`Addresses ${idx} balance: `,await getBalance(address));
    idx++;
  }
}

//logs the memos stored on-chain from  coffee purchases
async function printMemos(memos) {
  for (const memo of memos) {
    const timestamp =memo.timestamp;
    const tipper =memo.name;
    const tipperAddress =memo.time;
    const message =memo.message;
    console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`)
  }
}


async function main() {
 
  //Get example accounts
  cont [owner, tipper, tipper2,tipper3]= await hre.ethers.getSigners();


  //get the contract to deploy 

  //Deploy contract

  //check balances before the coffee purchase

  //buy the owner a few coffee

  //Check balances

  //Withdraw funds

  //Cehck balances after withdraw

  //read all the memos
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
