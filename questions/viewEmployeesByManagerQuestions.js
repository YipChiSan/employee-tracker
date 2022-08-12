const employeeUtils = require('../helpers/employeeUtils');
let managerList;
let db = require('../helpers/createdb');
employeeUtils.getAllEmployees().then(([rows]) => {
managerList = rows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

const viewEmployeeByManagerQuestions = [
    {
        type:'list',
        message: "Which manager are you going to view?",
        choices: managerList,
        name: 'manager',
    }
];

module.exports = viewEmployeeByManagerQuestions;
}).then(() => db.end());
