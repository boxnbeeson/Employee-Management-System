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
    connection.query("SELECT id,department_name FROM departments", 
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
    const questionsAboutNewEmployee = 
    [{
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
    },
    {
        type: "input",
        name: "roleNumber",
        message: "What is the employee's role id number? (Roles may be viewed from the initial screen. If number is unknown, you may update the employee's role number later.)"
    }]
    inquirer.prompt(questionsAboutNewEmployee).then(data =>
        connection.query("INSERT INTO employees SET ?",
        {
            first_name: data.firstName,
            last_name: data.lastName,
            role_id: data.roleNumber
        },
        function(err, res) {
            console.log("Employee Added!");
            runEMS();
        })
    );
};

function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "departmentName",
        message: "What is the new department's name?",
    }).then(data =>
    connection.query("INSERT INTO departments SET ?",
    {
        department_name: data.departmentName,
    },
    function(err, res) {
        console.log("Department Added!");
        runEMS();
    }));
};

function addRole() {
    const questionsAboutNewRole = 
    [{
        type: "input",
        name: "roleTitle",
        message: "What is the role's title?",
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the role's salary?",
    },
    {
        type: "input",
        name: "departmentId",
        message: "What is the Id number for the department this role will be in? (Departments may be viewed from the initial screen. If number is unknown, you may update the role's department number later."
    }]
    inquirer.prompt(questionsAboutNewRole).then(data =>
        connection.query("INSERT INTO roles SET ?",
        {
            role_title: data.roleTitle,
            role_salary: data.roleSalary,
            department_id: data.departmentId
        },
        function(err, res) {
            console.log("Role Added!");
            runEMS();
        })
    );
};

function exitApplication() {
    console.log('Goodbye!')
    console.log("Use CTRL + C to exit the application.")
};