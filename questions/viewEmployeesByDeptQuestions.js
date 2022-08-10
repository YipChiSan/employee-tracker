const deptUtils = require('../helpers/deptUtils');
let deptList = deptUtils.getAllDepartments();
deptList = deptList.map((value) => value.id + ". " + value.name);

const viewEmployeeByDeptQuestions = [
    {
        type:'list',
        message: "Which department are you going to view?",
        choices: deptList,
        name: 'department',
    }
];

module.exports = viewEmployeeByDeptQuestions;