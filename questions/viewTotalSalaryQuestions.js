const deptUtils = require('../helpers/deptUtils');
let deptList;
let db = require('../helpers/createdb');
 deptUtils.getAllDepartments().then(([rows]) => {
deptList = rows.map((value) => value.id + ". " + value.name);

const viewTotalSalaryQuestions = [
    {
        type:'list',
        message: "Which department's total salary are you going to view?",
        choices: deptList,
        name: 'department',
    }
];

module.exports = viewTotalSalaryQuestions;
 }).then(() => db.end());
