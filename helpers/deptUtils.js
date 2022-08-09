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

module.exports = {getAllDepartments, addDepartment, deleteDept};
