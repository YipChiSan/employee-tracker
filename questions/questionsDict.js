const addDeptQuestions = require('./addDeptQuestions');
const addEmployeesQuestions = require('./addEmployeesQuestions');
const addRoleQuestions = require('./addRoleQuestions');
const deleteDeptQuestions = require('./deleteDeptQuestions');
const deleteEmployeeQuestions = require('./deleteEmployeeQuestions');
const deleteRoleQuestions = require('./deleteRoleQuestions');
const updateEmployeeManagerQuestions = require('./updateEmployeesManagerQuestions');
const updateEmployeesRoleQuestions = require('./updateEmployeesRoleQuestions');
const viewEmployeesByDeptQuestions = require('./viewEmployeesByDeptQuestions');
const viewEmployeesByManagerQuestions = require('./viewEmployeesByManagerQuestions');
const viewTotalSalaryQuestions = require('./viewTotalSalaryQuestions');
const questionsDict = new Map();

function initialiseQuestionsDict () {
    questionsDict.set("Add employees", addEmployeesQuestions);
    questionsDict.set("Update employee's role", updateEmployeesRoleQuestions);
    questionsDict.set("Update employee's manager", updateEmployeeManagerQuestions);
    questionsDict.set("View all employees of a manager", viewEmployeesByManagerQuestions);
    questionsDict.set("View all employees of a department", viewEmployeesByDeptQuestions);
    questionsDict.set("Delete employee", deleteEmployeeQuestions);
    questionsDict.set("Add department", addDeptQuestions);
    questionsDict.set("Delete department", deleteDeptQuestions);
    questionsDict.set("View summed salaries of all employees in a department", viewTotalSalaryQuestions);
    questionsDict.set("Add role", addRoleQuestions);
    questionsDict.set("Delete role", deleteRoleQuestions);
    return questionsDict;
}

module.exports = initialiseQuestionsDict;