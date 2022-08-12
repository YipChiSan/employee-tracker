const deptUtils = require('../helpers/deptUtils');
let db = require('../helpers/createdb');
let deptList;
deptUtils.getAllDepartments().then(([rows]) => {
    deptList = rows.map((value) => value.id + ". " + value.name);

    const deleteDeptQuestions = [
        {
            type:'list',
            message:'Which department do you want to delete?',
            choices: deptList,
            name: 'department',
        }
    ]

    module.exports = deleteDeptQuestions;
}).then(() => db.end());
