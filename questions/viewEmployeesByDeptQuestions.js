const deptUtils = require('../helpers/deptUtils');
let db = require('../helpers/createdb');
let deptList;
deptUtils.getAllDepartments().then(([rows]) => {
    deptList = rows.map((value) => value.id + ". " + value.name);

    const viewEmployeeByDeptQuestions = [
    {
        type:'list',
        message: "Which department are you going to view?",
        choices: deptList,
        name: 'department',
    }
    ];

    module.exports = viewEmployeeByDeptQuestions;
}).then(() => db.end());
