const mysql = require('mysql');

const config={
    host: '192.168.88.130',
    port: '3306',
    user: 'alex',
    password: '7112',
    database: 'API',
};

const pool = mysql.createPool(config);

module.exports = pool;