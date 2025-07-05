async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying with account:", deployer.address);

    const LearningProgress = await ethers.getContractFactory("LearningProgress");
    const learningProgress = await LearningProgress.deploy();
    await learningProgress.deployed();

    console.log("LearningProgress deployed to:", learningProgress.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
