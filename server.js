var mysql= require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "employee_management_system"
});
 
connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    console.log("Employee Management System");
    runEMS();
});

function runEMS() {
    inquirer.prompt({
        type: "list",
        name: "startingQuestions",
        message: "Hello! What would you like to do today?",
        choices: [
            "View all Departments",
            "View all Roles",
            "View Roles by Department",
            "View all Employees",
            "View Employees by Department",
            "View Employees by Role",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
            "Update Employee Manager",
            "Exit Application",
        ]
    }).then(function(answer) {
        switch (answer.startingQuestions) {
            case "View all Departments":
                viewDepartments();
                break;

            case "View all Roles":
                viewRoles();
                break;

            case "View Roles by Department":
                viewRolesByDepartment();
                break;

            case "View all Employees":
                viewEmployees();
                break;

            case "View Employees by Department":
                viewEmployeesByDepartment();
                break;

            case "View Employees by Role":
                viewEmployeesByRole();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Add Role":
                addRole();
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                break;

            case "Update Employee Manager":
                updateEmployeeManager();
                break;

            case "Exit Application":
                exitApplication();
                break;
        };
    });
}

function viewDepartments() {
    connection.query("SELECT department_name FROM departments", 
    function(err, res) {
        console.table(res);
        runEMS();
    });
};

function viewRoles() {
    connection.query("SELECT id,role_title,role_salary FROM roles", 
    function(err, res) {
        console.table(res);
        runEMS();
    });
};

function viewRolesByDepartment() {
    connection.query("SELECT roles.id,role_title,department_name FROM roles RIGHT JOIN departments ON roles.department_id = departments.id;",
    function(err, res) {
        console.table(res);
        runEMS();
    });
};

function viewEmployees() {
    connection.query("SELECT id,first_name,last_name FROM employees",
    function(err, res) {
        console.table(res);
        runEMS();
    });
};

function viewEmployeesByDepartment() {
    connection.query("SELECT employees.id,first_name,last_name,department_name FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;", function(err, res) {
        console.table(res);
        runEMS();
    });
};

function viewEmployeesByRole() {
    connection.query("SELECT employees.id,first_name,last_name,role_title FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;",
    function(err, res) {
        console.table(res);
        runEMS();
    });
};

function addEmployee() {

};

function addDepartment() {

};

function addRole() {

};

function updateEmployeeManager() {

};

function updateEmployeeManager() {
    
};

function exitApplication() {

};