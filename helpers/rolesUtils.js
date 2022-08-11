const db = require('./createdb');
const getIDFromCombinedData = require('./getIDFromCombinedData');

function getAllRoles() {
    db.promise().query(`SELECT * FROM role_table`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            return results;
        }
    });
}

function addRoles(title, salary, department_id) {
    department_id = getIDFromCombinedData(department_id);
    db.promise().query(`INSERT INTO role_table (title, salary, department_id) VALUES  (?, ?, ?),`, [title, salary, department_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return result;
        }
        }
    );
}

function deleteRoles(role_id) {
    role_id = getIDFromCombinedData(role_id);
    db.promise().query(`DELETE FROM role_table where id = ?,`, [role_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            return result;
        }
    }
    )
}

module.exports = {getAllRoles, addRoles, deleteRoles};