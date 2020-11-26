var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "B1ueshiba!",
  database: "tracker_DB"
});

connection.connect(function(err) {
  if (err) throw err;
});

function start() {
  inquirer
  .prompt({
    name: "toDo",
    type: "rawlist",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View All Employees by Manager",
      "Add Employee",
      "Update Employee Role",
      "Update Employee Manager"
    ]
  })
  .then(function(answer) {
    switch (answer.action) {
    case "View All Employees":
      // viewAllEmployees
      break;

    case "View All Employees By Department":
      // viewByDepartment
      break;

    case "View All Employees by Manager":
      // viewByManager
      break;

    case "Add Employee":
      // addEmployees
      break;

    case "Update Employee Role":
      // updateEmployeeRole
      break;

    case "Update Employee Manager":
      // updateEmployeeManager
      break;
    }
  });
}



function viewAllEmployees(){
  connection.query("select * from employees", function(err, res){
    if(err) throw err;
    console.table(res);
  })
}

viewAllEmployees();