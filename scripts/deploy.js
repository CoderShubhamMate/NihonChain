const hre = require("hardhat");

async function main() {
  const LearningProgress = await hre.ethers.getContractFactory("LearningProgress");
  const learningProgress = await LearningProgress.deploy();
  await learningProgress.deployed();

  console.log(`LearningProgress deployed to: ${learningProgress.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
