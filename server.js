const cTable = require('console.table');
const inquirer = require('inquirer');
let db = require('./helpers/createdb');
const deptUtils = require('./helpers/deptUtils');
const employeeUtils = require('./helpers/employeeUtils');
const rolesUtils = require('./helpers/rolesUtils');
const utilsDict = require('./helpers/utilsDict');
let continueQuestion = [{
    type: 'confirm',
    message: 'Do you want to continue',
    name: "isContinued",
}];

const rootQuestions = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ["View all employees", 
                    "Add employees", 
                    "Update employee's role", 
                    "Update employee's manager", 
                    "View all employees of a manager",
                    "View all employees of a department",
                    "Delete employee",
                    "View all departments",
                    "Add department",
                    "Delete department",
                    "View summed salaries of all employees in a department",
                    "View all roles",
                    "Add role",
                    "Delete role",
                    "Quit"],
        name: "basicAction",
    }
];

let question;
function getInput(questions) {
    let table;
    return Promise.all([employeeUtils.getAllEmployees(), deptUtils.getAllDepartments(), rolesUtils.getAllRoles()])
            .then((values) => {
                const [[employeeRows], [deptRows], [roleRows]] = values;
                deptList = deptRows.map((value) => value.id + ". " + value.name);
                roleList = roleRows.map((value) => value.id + ". " + value.title);
                employeeList = employeeRows.map((value) => value.id + ". " + value.first_name + " " + value.last_name);
                inquirer.prompt(questions)
                    .then((answers) => {
                        if (answers.hasOwnProperty("isContinued")) {
                        if (answers["isContinued"]) {
                            return getInput(rootQuestions);
                        } else {
                            console.log("Bye");
                            db.end();
                            return;
                        }
                        }

                        if (answers["basicAction"]) {
                            question = answers["basicAction"];
                            switch (question) {
                                case "View all employees":
                                    
                                    table = cTable.getTable(employeeList);
                                    console.log(table);
                                    return getInput(continueQuestion);
                            
                                 case "Add employees":
                                    return getInput([
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
                                        choices: employeeList,
                                        name: 'manager',
                                    }
                                    ]);

                                case "Update employee's role":
                                    return getInput([
                                        {
                                            type:'list',
                                            message: "Which employee's role do you want to update?",
                                            choices: employeeList,
                                            name: 'employee',
                                        },
                                        {
                                            type: 'list',
                                            message: "What is the role of the employee?",
                                            choices: roleList,
                                            name: 'role',
                                        },
                                        ]);
                                
                                case "Update employee's manager":
                                    return getInput(
                                        [
                                            {
                                                type:'list',
                                                message: "Which employee's manager do you want to update?",
                                                choices: employeeList,
                                                name: 'employee',
                                            },
                                            {
                                                type:'list',
                                                message: "What is the manager of the employee?",
                                                choices: employeeList,
                                                name: 'manager',
                                            }
                                        ]
                                    );

                                case "View all employees of a manager":
                                    return getInput(
                                        [
                                            {
                                                type:'list',
                                                message: "Which manager are you going to view?",
                                                choices: employeeList,
                                                name: 'manager',
                                            }
                                        ]
                                    );

                                case "View all employees of a department":
                                    return getInput(
                                        [
                                            {
                                                type:'list',
                                                message: "Which department are you going to view?",
                                                choices: deptList,
                                                name: 'department',
                                            }
                                        ]
                                    );

                                case "Delete employee":
                                    return getInput([
                                        {
                                            type:'list',
                                            message: "Which employee do you want to delete?",
                                            choices: employeeList,
                                            name: 'employee',
                                        },
                                    ]);

                                case "View all departments":
                                    table = cTable.getTable(deptList);
                                    console.log(table);
                                    return getInput(continueQuestion);

                                case "Add department":
                                    return getInput(
                                        [
                                            {
                                                type: 'input',
                                                message: 'What is the name of the new department?',
                                                name: 'name',
                                            }
                                        ]
                                    );

                                case "Delete department":
                                    return getInput([
                                        {
                                            type:'list',
                                            message:'Which department do you want to delete?',
                                            choices: deptList,
                                            name: 'department',
                                        }
                                    ]);

                                case "View summed salaries of all employees in a department":
                                    return getInput(
                                        [
                                            {
                                                type:'list',
                                                message: "Which department's total salary are you going to view?",
                                                choices: deptList,
                                                name: 'department',
                                            }
                                        ]
                                    );

                                case "View all roles":
                                    table = cTable.getTable(roleList);
                                    console.log(table);
                                    return getInput(continueQuestion);

                                case "Add role":
                                    return getInput(
                                        [
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
                                        ]
                                    );

                                case "Delete role":
                                    return getInput(
                                        [
                                            {
                                                type:'list',
                                                message: "Which role do you want to delete?",
                                                choices: roleList,
                                                name: 'role',
                                            }
                                        ]
                                    );

                                default:
                                    console.log("Bye");
                                    db.end();
                                    return ;

                            };
                    
                        } else {
                            let values = [];
                            for (let key in answers) {
                                values.push(answers[key]);
                            }
                            let queryFunc = utilsDict.get(question);
                            queryFunc(...values).then(([rows]) => {
                                let table = cTable.getTable(rows);
                                console.log(table);
                                return getInput(continueQuestion);
                            });

                        }
                    });
                });
}






     getInput(rootQuestions);
    
    





