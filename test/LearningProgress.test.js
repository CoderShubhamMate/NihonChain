const { expect } = require("chai");

describe("LearningProgress", function () {
    let contract;
    let user1;

    beforeEach(async function () {
        const [admin, otherUser] = await ethers.getSigners();
        user1 = otherUser;

        const LearningProgress = await ethers.getContractFactory("LearningProgress");
        contract = await LearningProgress.deploy();
        await contract.deployed();
    });

    it("should allow user to complete a lesson", async function () {
        await contract.connect(user1).completeLesson(1);
        const completed = await contract.hasCompletedLesson(user1.address, 1);
        expect(completed).to.be.true;
    });

    it("should increment lessonsCompleted counter", async function () {
        await contract.connect(user1).completeLesson(1);
        const count = await contract.getLessonsCompleted(user1.address);
        expect(count).to.equal(1);
    });

    it("should emit a badge event after 5 lessons", async function () {
        for (let i = 1; i <= 4; i++) {
            await contract.connect(user1).completeLesson(i);
        }

        await expect(contract.connect(user1).completeLesson(5))
            .to.emit(contract, "BadgeAwarded")
            .withArgs(user1.address, "Milestone Badge");
    });
});
