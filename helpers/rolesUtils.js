const db = require('./createdb');
const getIDFromCombinedData = require('./getIDFromCombinedData');

function getAllRoles() {
    return db.query(`SELECT * FROM role_table`);
}

function addRoles(title, salary, department_id) {
    department_id = getIDFromCombinedData(department_id);
    return db.query(`INSERT INTO role_table (title, salary, department_id) VALUES  (?, ?, ?),`, [title, salary, department_id]);
}

function deleteRoles(role_id) {
    role_id = getIDFromCombinedData(role_id);
    return db.query(`DELETE FROM role_table where id = ?,`, [role_id]);
}

module.exports = {getAllRoles, addRoles, deleteRoles};