const db = require('./createdb');


function getAllDepartments() {
    db.query(`SELECT * FROM department`, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.log(results);
    });
}

function addDepartment(name) {
    db.query(`INSERT INTO department (name) VALUES  (?),`, [name], (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    }
)}

function deleteDept(dept_id) {
    db.query(`DELETE FROM department where id = ?,`, [dept_id], (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
    }
)
}

function getSalariesBydept(dept_id) {
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
        }
        console.log(result);
        }
    );
}

module.exports = {getAllDepartments, addDepartment, deleteDept, getSalariesBydept};
