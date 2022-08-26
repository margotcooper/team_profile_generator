//Employee test
const Employee = require("./Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("returns name passed into constructor", () => {
      const expectedName = "Mango Smith";
      const employee = new Employee(
        expectedName,
        256,
        "mango@smith.com",
        "employee"
      );
      expect(employee.getName()).toBe(expectedName);
    });
  });

  describe("getId", () => {
    it("returns id passed into constructor", () => {
      const expectedId = 256;
      const employee = new Employee(
        "Mango Smith",
        expectedId,
        "mango@smith.com",
        "employee"
      );
      expect(employee.getId()).toBe(expectedId);
    });
  });

  describe("getEmail", () => {
    it("returns email passed into constructor", () => {
      const expectedEmail = "mango@smith.com";
      const employee = new Employee(
        "Mango Smith",
        256,
        expectedEmail,
        "employee"
      );
      expect(employee.getEmail()).toBe(expectedEmail);
    });
  });

  describe("getRole", () => {
    it("returns role passed into constructor", () => {
      const expectedRole = "employee";
      const employee = new Employee(
        "Mango Smith",
        256,
        "mango@smith.com",
        expectedRole
      );
      expect(employee.getRole()).toBe(expectedRole);
    });
  });
});
