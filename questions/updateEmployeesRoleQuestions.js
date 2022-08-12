const roles = require('../helpers/rolesUtils');
let roleList;

const employeeUtils = require('../helpers/employeeUtils');
let employeeList;
employeeList = employeeUtils.getAllEmployees();
let db = require('../helpers/createdb');
Promise.all([roles.getAllRoles(), employeeUtils.getAllEmployees()]).then((values) => {
    [[roleRows], [employeeRows]] = values;
    roleList = roleRows.map((value) => value.id + ". " + value.title);
    employeeList = employeeRows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

    const updateEmployeesRoleQuestions = [
        {
            type:'list',
            message: "Which employee's role do you want to update?",
            choices: employeeList,
            name: 'employee',
        },
        {
            type: 'list',
            message: "What is the role of the employee?",
            choices: roleList,
            name: 'role',
        },
];

module.exports = updateEmployeesRoleQuestions;
}).then(() => db.end());
