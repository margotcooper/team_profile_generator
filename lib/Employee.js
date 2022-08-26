class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  //look at activity 24 for reference to this
  //? - do I put all the methods into one method to call at the bottom?

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

//? how do I make a new instance for each employee? and how do I grab the input from the employee?
const newEmployee = new Employee();
