const deptUtils = require('../helpers/deptUtils');
let deptList = deptUtils.getAllDepartments();
deptList = deptList.map((value) => value.id + ". " + value.name);

const viewTotalSalaryQuestions = [
    {
        type:'list',
        message: "Which department's total salary are you going to view?",
        choices: deptList,
        name: 'department',
    }
];

module.exports = viewTotalSalaryQuestions;