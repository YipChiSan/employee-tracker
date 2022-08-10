const deptUtils = require('../helpers/deptUtils');
let deptList = deptUtils.getAllDepartments();
deptList = deptList.map((value) => value.id + ". " + value.name);

const deleteDeptQuestions = [
    {
        type:'list',
        message:'Which department do you want to delete?',
        choices: deptList,
        name: 'department',
    }
]

module.exports = deleteDeptQuestions;