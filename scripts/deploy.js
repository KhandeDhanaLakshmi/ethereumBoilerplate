const { FixedNumber, BigNumber } = require("ethers");
async function main() {
  const MyErcToken = await ethers.getContractFactory("ERCToken");
  const initialSupply = BigNumber.from(100000);
  const myToken = await MyErcToken.deploy(initialSupply);
  await myToken.deployed();

  console.log("MyErcToken deployed to:", myToken.address);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
