var mysql = require('mysql');

var pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgerdb'
});

module.exports = pool;