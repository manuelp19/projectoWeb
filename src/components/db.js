const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ROOT',
  database: 'tecmeetups'
});

module.exports = db;

