const mysql = require('mysql');
const util = require('util');

// Obter variáveis de ambiente
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASS = process.env.MYSQL_PASS;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
const MYSQL_HOST = process.env.MYSQL_HOST;

// Criar uma conexão ao banco de dados
const connection = mysql.createConnection({
  host: MYSQL_HOST, // Substitua por seu host se necessário
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DATABASE,
  ssl: 'preferred'
});

// Promisify para Node.js async/await.
connection.query = util.promisify(connection.query);

module.exports = connection;
