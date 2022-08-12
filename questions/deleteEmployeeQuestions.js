const employeeUtils = require('../helpers/employeeUtils');
let employeeList;
let db = require('../helpers/createdb');
employeeUtils.getAllEmployees().then(([rows]) => {
    employeeList = rows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);

    const deleteEmployeeQuestions = [
        {
            type:'list',
            message: "Which employee do you want to delete?",
            choices: employeeList,
            name: 'employee',
        },
    ];

    module.exports = deleteEmployeeQuestions;
}).then(() => db.end());
