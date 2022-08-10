const roles = require('../helpers/rolesUtils');
let roleList;
roleList = roles.getAllRoles();
roleList = roleList.map((value) => value.id + ". " + value.title);

const updateEmployeesRoleQuestions = [
        {
            type: 'list',
            message: "What is the role of the employee?",
            choices: roleList,
            name: 'role',
        },
];

module.exports = updateEmployeesRoleQuestions;