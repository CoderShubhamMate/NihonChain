const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NihonToken", function () {
    let NihonToken;
    let nihonToken;
    let owner;
    let addr1;
    let addr2;
    let addrs;

    beforeEach(async function () {
        NihonToken = await ethers.getContractFactory("NihonToken");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

        nihonToken = await NihonToken.deploy();
        await nihonToken.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await nihonToken.owner()).to.equal(owner.address);
        });

        it("Should assign the total supply of tokens to the owner", async function () {
            const ownerBalance = await nihonToken.balanceOf(owner.address);
            expect(await nihonToken.totalSupply()).to.equal(ownerBalance);
        });
    });

    describe("Transactions", function () {
        it("Should transfer tokens between accounts", async function () {
            await nihonToken.transfer(addr1.address, 50);
            const addr1Balance = await nihonToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await nihonToken.connect(addr1).transfer(addr2.address, 50);
            const addr2Balance = await nihonToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });

        it("Should fail if sender doesn’t have enough tokens", async function () {
            const initialOwnerBalance = await nihonToken.balanceOf(owner.address);

            await expect(
                nihonToken.connect(addr1).transfer(owner.address, 1)
            ).to.be.revertedWith("Not enough tokens");

            expect(await nihonToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
        });

        it("Should update balances after transfers", async function () {
            const initialOwnerBalance = await nihonToken.balanceOf(owner.address);

            await nihonToken.transfer(addr1.address, 100);
            await nihonToken.transfer(addr2.address, 50);

            const finalOwnerBalance = await nihonToken.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

            const addr1Balance = await nihonToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(100);

            const addr2Balance = await nihonToken.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);
        });
    });
});