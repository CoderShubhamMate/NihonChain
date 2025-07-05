const hre = require("hardhat");

async function main() {
    // Deploy the NihonChain contract
    const NihonChain = await hre.ethers.getContractFactory("NihonChain");
    const nihonChain = await NihonChain.deploy();
    await nihonChain.deployed();
    console.log("NihonChain deployed to:", nihonChain.address);

    // Deploy the NihonToken contract
    const NihonToken = await hre.ethers.getContractFactory("NihonToken");
    const nihonToken = await NihonToken.deploy();
    await nihonToken.deployed();
    console.log("NihonToken deployed to:", nihonToken.address);

    // Deploy the BadgeNFT contract
    const BadgeNFT = await hre.ethers.getContractFactory("BadgeNFT");
    const badgeNFT = await BadgeNFT.deploy();
    await badgeNFT.deployed();
    console.log("BadgeNFT deployed to:", badgeNFT.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });