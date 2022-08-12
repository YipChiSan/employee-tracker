const roles = require('../helpers/rolesUtils');
let roleList;
let db = require('../helpers/createdb');
roles.getAllRoles().then(([rows]) => {
    roleList = rows.map((value) => value.id + ". " + value.title);

    const deleteRoleQuestions = [
        {
            type:'list',
            message: "Which role do you want to delete?",
            choices: roleList,
            name: 'role',
        }
    ];

    module.exports = deleteRoleQuestions;
}).then(() => db.end());
