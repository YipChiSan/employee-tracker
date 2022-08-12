const employeeUtils = require('../helpers/employeeUtils');
let managerList;
let db = require('../helpers/createdb');
employeeUtils.getAllEmployees().then(([rows]) => {
managerList = rows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

const updateEmployeesManagerQuestions = [
    {
        type:'list',
        message: "Which employee's manager do you want to update?",
        choices: managerList,
        name: 'employee',
    },
    {
        type:'list',
        message: "What is the manager of the employee?",
        choices: managerList,
        name: 'manager',
    }
];

module.exports = updateEmployeesManagerQuestions;
}).then(() => db.end());
