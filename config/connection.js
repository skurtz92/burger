
// where you make connection to mysql database and export and used by O.R.M.

var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 4000,
	host: 'localhost',
	user: 'root',
	password: 'sprinkle1',
	database: 'burgers_dbb'
});

connection.connect(function(err) {
	if (err){
		console.error('error connection: ' + err.stack);
		return; 
	}
	console.log('connection as id ' + connection.threadId);
});

module.exports = connection;