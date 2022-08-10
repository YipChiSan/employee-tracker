const employeeUtils = require('../helpers/employeeUtils');
let managerList;
managerList = employeeUtils.getAllEmployees();
managerList = managerList.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

const updateEmployeesManagerQuestions = [
    {
        type:'list',
        message: "What is the manager of the employee?",
        choices: managerList,
        name: 'manager',
    }
];

module.exports = updateEmployeesManagerQuestions;