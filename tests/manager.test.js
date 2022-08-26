//manager test
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("returns officeNumber passed into constructor", () => {
      const expectedOfficeNumber = 8008008008;
      const manager = new Manager(
        "Mango Smith",
        256,
        "mango@smith.com",
        expectedOfficeNumber
      );
      expect(manager.getOfficeNumber()).toBe(expectedOfficeNumber);
    });
  });
});
