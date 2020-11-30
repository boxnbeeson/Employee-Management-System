var mysql= require('mysql');
var inquirer = require("inquirer");
var cTable = require("console.table");

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
    runEMS();
});

function runEMS() {
    inquirer.prompt([/* Pass your questions in here */], function( answers ) {
        // Use user feedback for... whatever!!
    });
}