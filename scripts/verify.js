const { ethers, run, network } = require("hardhat");

async function verify(contractAddress, args) {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Contract already verified!");
        } else {
            console.error("Verification failed:", error);
        }
    }
}

async function main() {
    const nihonChainAddress = "YOUR_NIHON_CHAIN_CONTRACT_ADDRESS";
    const nihonTokenAddress = "YOUR_NIHON_TOKEN_CONTRACT_ADDRESS";
    const badgeNFTAddress = "YOUR_BADGE_NFT_CONTRACT_ADDRESS";

    await verify(nihonChainAddress, []);
    await verify(nihonTokenAddress, []);
    await verify(badgeNFTAddress, []);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });