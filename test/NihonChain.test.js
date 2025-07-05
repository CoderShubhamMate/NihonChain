import { expect } from "chai";
import { ethers } from "hardhat";

describe("NihonChain", function () {
    let NihonChain;
    let nihonChain;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        NihonChain = await ethers.getContractFactory("NihonChain");
        [owner, addr1, addr2] = await ethers.getSigners();
        nihonChain = await NihonChain.deploy();
        await nihonChain.deployed();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await nihonChain.owner()).to.equal(owner.address);
        });

        it("Should initialize with zero users", async function () {
            const userCount = await nihonChain.getUserCount();
            expect(userCount).to.equal(0);
        });
    });

    describe("User Management", function () {
        it("Should allow adding a user", async function () {
            await nihonChain.addUser(addr1.address);
            const userCount = await nihonChain.getUserCount();
            expect(userCount).to.equal(1);
        });

        it("Should not allow adding the same user twice", async function () {
            await nihonChain.addUser(addr1.address);
            await expect(nihonChain.addUser(addr1.address)).to.be.revertedWith("User already exists");
        });
    });

    // Additional tests for learning progress, badge issuance, etc. can be added here
});