const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your (the manager) name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
  ])
  .then((manager) => {
    console.table(manager);
    //adding a card
    //create a card for each employee
  });

  inquirer.prompt([
    //put engineer questions including duplicating manager questions
    {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
          },
  ]);

  inquirer.prompt([
    //put intern questions including duplicating manager questions
    {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of your school?",
          },
  ]);
  inquirer.prompt([
  {
    type: "list",
    name: "addEmployee",
    message: "What type of employee would you like to add next?",
    choices: ["Engineer", "Intern"],
  }]);
  if (addEmployee) = "Engineer";
  .then

//make choice depending on user answer, defines what choice to make next (intern or engineer)
//if, then, new functions

//do not use employee class, that was just a helper/base class.
//use manager, engineer, intern classes
