const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the NihonChain contract
    const NihonChain = await ethers.getContractFactory("NihonChain");
    const nihonChain = await NihonChain.deploy();
    await nihonChain.deployed();
    console.log("NihonChain deployed to:", nihonChain.address);

    // Deploy the NihonToken contract
    const NihonToken = await ethers.getContractFactory("NihonToken");
    const nihonToken = await NihonToken.deploy();
    await nihonToken.deployed();
    console.log("NihonToken deployed to:", nihonToken.address);

    // Deploy the BadgeNFT contract
    const BadgeNFT = await ethers.getContractFactory("BadgeNFT");
    const badgeNFT = await BadgeNFT.deploy();
    await badgeNFT.deployed();
    console.log("BadgeNFT deployed to:", badgeNFT.address);

    // Mint sample data
    const mintAmount = ethers.utils.parseUnits("1000", 18); // Mint 1000 NIHON tokens
    await nihonToken.mint(deployer.address, mintAmount);
    console.log(`Minted ${mintAmount.toString()} NIHON tokens to ${deployer.address}`);

    const badgeId = 1; // Example badge ID
    await badgeNFT.mint(deployer.address, badgeId);
    console.log(`Minted Badge NFT with ID ${badgeId} to ${deployer.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });