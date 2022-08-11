const db = require('./createdb');
const getIDFromCombinedData = require('./getIDFromCombinedData');
const mysql = require('mysql2');

function getAllDepartments() {
    return db.query(`SELECT * FROM department`);
    
   
}

function addDepartment(name) {
    db.query(`INSERT INTO department (name) VALUES  (?),`, [name], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        return result;
    }
    }
)}

function deleteDept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    db.query(`DELETE FROM department where id = ?,`, [dept_id], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        return result;
    }
    }
)
}

function getSalariesBydept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    db.query(`SELECT SUM(role_table.salary) as total_salary, department.name as department_name
                FROM employee 
                INNER JOIN role_table 
                ON employee.role_id = role_table.id 
                INNER JOIN department
                ON role_table.department_id = department.id
                GROUP BY department_name
                HAVING department.id = ?`, [dept_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return result;
        }
        }
    );
}

getAllDepartments().then( ([rows]) => { console.log(rows)} ).then(() => db.end());
module.exports = {getAllDepartments, addDepartment, deleteDept, getSalariesBydept};
