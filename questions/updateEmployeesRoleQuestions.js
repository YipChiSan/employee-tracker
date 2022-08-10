const roles = require('../helpers/rolesUtils');
let roleList;
roleList = roles.getAllRoles();
roleList = roleList.map((value) => value.id + ". " + value.title);

const employeeUtils = require('../helpers/employeeUtils');
let employeeList;
employeeList = employeeUtils.getAllEmployees();
employeeList = employeeList.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

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