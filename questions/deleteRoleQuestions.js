const roles = require('../helpers/rolesUtils');
let roleList;
roleList = roles.getAllRoles();
roleList = roleList.map((value) => value.id + ". " + value.title);

const deleteRoleQuestions = [
    {
        type:'list',
        message: "Which role do you want to delete?",
        choices: roleList,
        name: 'role',
    }
];

module.exports = deleteRoleQuestions;