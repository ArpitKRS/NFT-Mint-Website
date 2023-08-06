const hre = require("hardhat");

async function main() {

  const roboPunksNFT = await hre.ethers.deployContract("RoboPunksNFT");

  await roboPunksNFT.waitForDeployment();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
