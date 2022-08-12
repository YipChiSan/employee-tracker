const roles = require('../helpers/rolesUtils');
const employeeUtils = require('../helpers/employeeUtils');
let db = require('../helpers/createdb');
let roleList;
let managerList;

Promise.all([roles.getAllRoles(), employeeUtils.getAllEmployees()])
            .then((values) => {
                [[roleRows], [employeeRows]] = values;
                roleList = roleRows.map((value) => value.id + ". " + value.title);
                managerList = employeeRows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);
                const addEmployeeQuestions = [
                    {
                        type: 'input',
                        message: "What is the employee's first name?",
                        name: 'first_name',
                    }, 
                    {
                        type: 'input',
                        message: "What is the employee's last name?",
                        name: 'last_name',
                    },
                    {
                        type: 'list',
                        message: "What is the role of the employee?",
                        choices: roleList,
                        name: 'role',
                    },
                    {
                        type:'list',
                        message: "What is the manager of the employee?",
                        choices: managerList,
                        name: 'manager',
                    }
                ];

                module.exports = addEmployeeQuestions;
            }).then(() => db.end());