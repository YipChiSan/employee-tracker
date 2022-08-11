const addDeptQuestions = require('./questions/addDeptQuestions');
const addEmployeesQuestions = require('./questions/addEmployeesQuestions');
const addRoleQuestions = require('./questions/addRoleQuestions');
const deleteDeptQuestions = require('./questions/deleteDeptQuestions');
const deleteEmployeeQuestions = require('./questions/deleteEmployeeQuestions');
const deleteRoleQuestions = require('./questions/deleteRoleQuestions');
const updateEmployeeManagerQuestions = require('./questions/updateEmployeesManagerQuestions');
const updateEmployeesRoleQuestions = require('./questions/updateEmployeesRoleQuestions');
const viewEmployeesByDeptQuestions = require('./questions/viewEmployeesByDeptQuestions');
const viewEmployeesByManagerQuestions = require('./questions/viewEmployeesByManagerQuestions');
const viewTotalSalaryQuestions = require('./questions/viewTotalSalaryQuestions');
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