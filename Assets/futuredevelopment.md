Due to time constraints, some aspects of the program were left out. Upon future development, the aspects below will be completed:

- Updating Employee managers
- View employees by manager
- Delete departments, roles, and employees
- View the total utilized budget of a department -- ie the combined salaries of all employees in that department
- Add department functionality to the add role feature.
- Add role functionality to the add Employee feature. Below is the code I was trying to get to work before I realized I was quickly running out of time.
- Add role selection functionality to the update role feature.
- Add update employee features 

function addEmployee() {
    class ROLE {
        constructor(id, title) {
            this.id = id;
            this.title = title;
        }
    };
    let roles = [];
    connection.query("SELECT id,role_title FROM roles", function(err, res) {
        var createdRole = new ROLE(res[i].id, res[i].role_title);
        for(var i = 0; i < res.length; i++) {
            roles.push(createdRole);
        }
        console.log(roles);
    });
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
        type: "list",
        name: "role",
        message: "To select the employee's role, type the id number that matches their role. If their role is not listed, leave blank, add their role to the database, and then update the employee afterwards.",
        choices: roles
    }]
inquirer.prompt(questionsAboutNewEmployee).then(data =>
    connection.query("INSERT INTO employees SET ?",
    {
        first_name: data.firstName,
        last_name: data.lastName,
        role_id: 1
    })
)};





function updateEmployeeRole() {
    var employeeSQL = "SELECT id,first_name,last_name FROM employees";
    var employeeArray = [];
    var roleSQL = "SELECT id,role_title FROM roles"
    var roleArray = [];
    function createEmployeeArray() {
        connection.query(employeeSQL, function(err,res) {
            for (var i = 0; i < res.length; i++) {
                employeeArray.push({ value: parseInt(res[i].id), name: res[i].first_name + "" + result[i].last_name});
              };
        })
    };
    function createRoleArray() {
        connection.query(roleSQL, function(err,res) {
            for (var i = 0; i < res.length; i++) {
                roleArray.push({ value: parseInt(res[i].id), name: res[i].role_title});
              };
        })
        console.log(roleArray);
    };
    createEmployeeArray();
    createRoleArray();
    const questionsAboutEmployeeRoleSwitch = 
    [
        {
            type: "list",
            name: "employeeName",
            message: "What is the name of the employee you would like to update?",
            choices: employeeArray
        },
        {
            type: "list",
            name: "roleName",
            message: "What what role would you like to give to this employee?",
            choices: roleArray 
        }
    ]


    inquirer.prompt(questionsAboutEmployeeRoleSwitch).then(data => {
        connection.query("UPDATE employee SET ? WHERE ?",
        [{
            role_id: data.roleName
        },
        {
            id: data.employeeName
        }],
        runEMS())
    })
};