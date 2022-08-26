//intern test
const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("returns school passed into constructor", () => {
      const expectedSchool = "BYU";
      const intern = new Intern(
        "Mango Smith",
        256,
        "mango@smith.com",
        expectedSchool
      );
      expect(intern.getSchool()).toBe(expectedSchool);
    });
  });
});
