const mysql = require('mysql');
let pool; 
if(process.env.JAWSDB_URL){
    pool= mysql.createPool(process.env.JAWSDB_URL)
}else{
    pool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgerdb'
});
}
module.exports = pool;