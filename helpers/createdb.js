function createdb () {
    const mysql = require('mysql2');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'test',
        database: 'employees_db',
        password: 'newpassword'
    });
}