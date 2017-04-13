var mysql = require('mysql');

function createDBConnection(){
  return connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'projeto_node'
  });
}

//wraper
module.exports = function(){
  return createDBConnection;
}
