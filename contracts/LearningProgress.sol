describe("LearningProgress", function () {
  it("records and retrieves lessons", async function () {
    const [owner, user] = await ethers.getSigners();
    const LP = await ethers.getContractFactory("LearningProgress");
    const lp = await LP.deploy();
    await lp.deployed();

    // user records a lesson
    await lp.connect(user).recordLesson("Kanji 1");

    // retrieve
    const [times, names] = await lp.getLessons(user.address);
    expect(names[0]).to.equal("Kanji 1");
  });

  it("awards and retrieves badges", async function () {
    const [_, user] = await ethers.getSigners();
    const LP = await ethers.getContractFactory("LearningProgress");
    const lp = await LP.deploy();
    await lp.deployed();

    await lp.connect(user).awardBadge("Hiragana Master");
    const [times, names] = await lp.getBadges(user.address);
    expect(names[0]).to.equal("Hiragana Master");
  });
});
