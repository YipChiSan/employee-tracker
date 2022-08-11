const cTable = require('console.table');
const createddb = require('./helpers/createdb');
const deptUtils = require('./helpers/deptUtils');
const employeeUtils = require('./helpers/employeeUtils');
const getIDFromCombinedData = require('./helpers/getIDFromCombinedData');
const rolesUtils = require('./helpers/rolesUtils');
const addDeptQuestions = require('./questions/addDeptQuestions');
const addEmployeesQuestions = require('./questions/addEmployeesQuestions');
const addRoleQuestions = require('./questions/addRoleQuestions');
const deleteDeptQuestions = require('./questions/deleteDeptQuestions');
const deleteEmployeeQuestions = require('./questions/deleteEmployeeQuestions');
const deleteRoleQuestions = require('./questions/deleteRoleQuestions');
const rootQuestions = require('./questions/rootQuestions');
const updateEmployeeManagerQuestions = require('./questions/updateEmployeesManagerQuestions');
const updateEmployeesRoleQuestions = require('./questions/updateEmployeesRoleQuestions');
const viewEmployeesByDeptQuestions = require('./questions/viewEmployeesByDeptQuestions');
const viewEmployeesByManagerQuestions = require('./questions/viewEmployeesByManagerQuestions');
const viewTotalSalaryQuestions = require('./questions/viewTotalSalaryQuestions');
const fs = require('fs');