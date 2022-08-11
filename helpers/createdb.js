
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    database: 'employees_db',
    password: 'newpassword'
});

module.exports = db.promise();
