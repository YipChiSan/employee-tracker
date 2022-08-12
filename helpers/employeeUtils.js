const getIDFromCombinedData = require('./getIDFromCombinedData');
const db = require('./createdb');

function getAllEmployees() {
    return db.query(`SELECT id, first_name, last_name FROM employee`);
}

function addEmployee(first_name, last_name, role_id, manager_id) {
    role_id = getIDFromCombinedData(role_id);
    manager_id = getIDFromCombinedData(manager_id);
    return db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES  (?, ?, ?, ?)`, [first_name, last_name,role_id, manager_id]);
}

function updateEmployeeRole(employee_id, role_id) {
    employee_id = getIDFromCombinedData(employee_id);
    role_id = getIDFromCombinedData(role_id);
    return db.query('UPDATE employee SET role_id = ? WHERE employee.id = ?;', [role_id, employee_id]);
}

function updateEmployeeManager(employee_id, manager_id) {
    employee_id = getIDFromCombinedData(employee_id);
    manager_id = getIDFromCombinedData(manager_id);
    return db.query('UPDATE employee SET manager_id = ? WHERE employee.id = ?;', [manager_id, employee_id]);
}

function getEmployeesByManager(manager_id) {
    manager_id = getIDFromCombinedData(manager_id);
    return db.query(`SELECT employee.id as id, employee.first_name as first_name, employee.last_name as last_name, role_table.title as title 
                FROM employee 
                LEFT JOIN role_table 
                ON employee.role_id = role_table.id 
                WHERE employee.manager_id = ?`, [manager_id]);
}

function getEmployeesByDept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    return db.query(`SELECT employee.id as id, employee.first_name as first_name, employee.last_name as last_name, role_table.title as title 
                FROM employee 
                INNER JOIN role_table 
                ON employee.role_id = role_table.id 
                INNER JOIN department
                ON role_table.department_id = department.id
                WHERE department.id = ?`, [dept_id]);
}

function deleteEmployee(employee_id) {
    employee_id = getIDFromCombinedData(employee_id);
    return db.query(`DELETE FROM employee WHERE id = ?`, [employee_id]);
}

module.exports = {getAllEmployees, addEmployee, updateEmployeeRole, updateEmployeeManager, getEmployeesByManager, getEmployeesByDept, deleteEmployee};