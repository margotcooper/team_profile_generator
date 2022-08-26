//engineer test
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGitHub", () => {
    it("returns GitHub repo passed into constructor", () => {
      const expectedGitHub = "mangosmith@github.com";
      const engineer = new Engineer(
        "Mango Smith",
        256,
        "mango@smith.com",
        expectedGitHub
      );
      expect(engineer.getGitHub()).toBe(expectedGitHub);
    });
  });
});
