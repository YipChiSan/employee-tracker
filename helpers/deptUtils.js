const db = require('./createdb');
const getIDFromCombinedData = require('./getIDFromCombinedData');


function getAllDepartments() {
    db.promise().query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return results;
        }
    });
}

function addDepartment(name) {
    db.promise().query(`INSERT INTO department (name) VALUES  (?),`, [name], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        return result;
    }
    }
)}

function deleteDept(dept_id) {
    dept_id = getIDFromCombinedData(dept_id);
    db.promise().query(`DELETE FROM department where id = ?,`, [dept_id], (err, result) => {
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
    db.promise().query(`SELECT SUM(role_table.salary) as total_salary, department.name as department_name
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

module.exports = {getAllDepartments, addDepartment, deleteDept, getSalariesBydept};
