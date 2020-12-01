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

connection.connect(function (err) {
  if (err) throw err;
});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "Add Employee",
        "Update Employee Role",
        "Update Employee Manager"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          viewAllEmployees();
          break;

        case "View All Employees By Department":
          viewByDepartment();
          break;

        // case "View All Employees by Manager":
        //  viewByManager();
        //   break;

        case "Add Employee":
          addEmployee();
          break;

        // case "Update Employee Role":
        //   updateEmployeeRole();
        //   break;

      }
    });
}


// View All
function viewAllEmployees() {
  var query = `select employees.id, employees.first_name, employees.last_name, roleTable.salary, roleTable.title, department.department_name, CONCAT(managers.first_name, ' ', managers.last_name) AS 'Manager'
  FROM employees 
  RIGHT JOIN roleTable 
  ON employees.role_id = roleTable.id 
  RIGHT JOIN department
  ON roleTable.department_id = department.id
  LEFT JOIN employees AS managers ON employees.manager_id = managers.id;`;
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    start();
  })
}

// View by Department
function viewByDepartment() {
  inquirer
    .prompt({
      name: "departChoice",
      type: "rawlist",
      message: "Which Department would you like to see?",
      choices: [
        { name: "Sales", value: 1 },
        { name: "Engineering", value: 2 },
        { name: "Finance", value: 3 },
        { name: "Legal", value: 4 },
      ]
    }).then(answers => {
      var query = `SELECT employees.id, employees.first_name, employees.last_name, roleTable.salary, roleTable.title
      FROM employees
      RIGHT JOIN roleTable
      ON employees.role_id = roleTable.id
      WHERE roleTable.department_id = ?`;
      connection.query(query, [answers.departChoice], function (err, res) {
        if (err) throw err;
        console.log('\n')
        console.table(res)
        console.log('\n')
      }
      )
      start();
    })
}

// View By Manager

// Add an Employee
async function addEmployee() {
  const { firstName, lastName, roleid } = await inquirer.prompt([
    {
      name: "firstName",
      message: "What is the new Employee's first name?",
      type: "input"
    },
    {
      name: "lastName",
      message: "What is the new Employee's last name?",
      type: "input"
    },
    // This function would not work if I included a function for adding roles
    {
      name: "roleid",
      message: "What is the new Employee's role?",
      type: "rawlist",
      choices: [
        { name: "Sales Lead", value: 1 },
        { name: "Account Manager", value: 2 },
        { name: "Lead Engineer", value: 3 },
        { name: "Engineer", value: 4 },
        { name: "Accounts Payable", value: 5 },
        { name: "Accounts Receivable", value: 6 },
        { name: "Finance Manager", value: 7 },
        { name: "Lawyer", value: 8 },
        { name: "Manager", value: 9 }
      ]
    }])

  connection.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ("${firstName}", "${lastName}", ${roleid})`, function (err, res) {
    if (err) throw err;
    console.log("Employee name: ", firstName, lastName, roleid);
    start();
  }
  )

}

// function updateEmployeeRole(){

// }




start();