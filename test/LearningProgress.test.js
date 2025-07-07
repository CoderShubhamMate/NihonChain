const { expect } = require("chai");

describe("LearningProgress", function () {
  it("should allow user to complete a lesson", async function () {
    const [owner, user] = await ethers.getSigners();
    const LearningProgress = await ethers.getContractFactory("LearningProgress");
    const contract = await LearningProgress.deploy();
    await contract.deployed();

    await contract.connect(user).completeLesson(1);
    expect(await contract.hasCompletedLesson(user.address, 1)).to.equal(true);
  });
});
