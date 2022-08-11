const rootQuestion = [
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

module.exports = {rootQuestion};