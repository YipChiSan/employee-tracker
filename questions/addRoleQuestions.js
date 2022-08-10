const deptUtils = require('../helpers/deptUtils');
let deptList = deptUtils.getAllDepartments();
deptList = deptList.map((value) => value.id + ". " + value.name);

const addRoleQuestions = [
    {
        type: 'input',
        message: 'What is the title of the new role?',
        name: 'title',
    },
    {
        type: 'number',
        message: 'What is the salary of the new role?',
        name: 'salary',
    },
    {
        type: 'list',
        message: 'What is the department of the new role?',
        choices: deptList,
        name: 'department',
    },
];

module.exports = addRoleQuestions;