const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BadgeNFT", function () {
    let BadgeNFT;
    let badgeNFT;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        BadgeNFT = await ethers.getContractFactory("BadgeNFT");
        [owner, addr1, addr2] = await ethers.getSigners();
        badgeNFT = await BadgeNFT.deploy();
        await badgeNFT.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await badgeNFT.owner()).to.equal(owner.address);
        });

        it("Should mint a badge to the owner", async function () {
            const tx = await badgeNFT.mintBadge(owner.address, "Badge 1");
            await tx.wait();
            expect(await badgeNFT.balanceOf(owner.address)).to.equal(1);
        });
    });

    describe("Transactions", function () {
        it("Should transfer a badge from one address to another", async function () {
            const tx = await badgeNFT.mintBadge(owner.address, "Badge 1");
            await tx.wait();
            await badgeNFT.transferFrom(owner.address, addr1.address, 1);
            expect(await badgeNFT.balanceOf(addr1.address)).to.equal(1);
            expect(await badgeNFT.balanceOf(owner.address)).to.equal(0);
        });

        it("Should fail if sender does not own the badge", async function () {
            const tx = await badgeNFT.mintBadge(owner.address, "Badge 1");
            await tx.wait();
            await expect(
                badgeNFT.connect(addr1).transferFrom(owner.address, addr2.address, 1)
            ).to.be.revertedWith("ERC721: transfer caller is not owner nor approved");
        });
    });
});