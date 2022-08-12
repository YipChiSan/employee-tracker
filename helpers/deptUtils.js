const db = require('./createdb');
const getIDFromCombinedData = require('./getIDFromCombinedData');
const mysql = require('mysql2');

function getAllDepartments() {
    return db.query(`SELECT * FROM department`);
}

function addDepartment(name) {
    return db.query(`INSERT INTO department (name) VALUES  (?)`, [name]);
}

function deleteDept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    return db.query(`DELETE FROM department where id = ?`, [dept_id]);

}

function getSalariesBydept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    return db.query(`SELECT total_salary, department_name
                FROM(SELECT SUM(role_table.salary) as total_salary, department.id, department.name as department_name
                FROM employee 
                INNER JOIN role_table 
                ON employee.role_id = role_table.id 
                INNER JOIN department
                ON role_table.department_id = department.id
                GROUP BY department_name
                HAVING department.id = ?) AS temp
`, [dept_id]);
}

//getSalariesBydept("1.aaa").then( ([rows]) => { console.log(rows)} ).then(() => db.end());
module.exports = {getAllDepartments, addDepartment, deleteDept, getSalariesBydept};
