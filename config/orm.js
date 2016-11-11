var connection = require('./connection.js');

var orm = 
{
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM '+ table;
		connection.query(queryString, function (err, result) {
			cb(result);
		});
	},
	insertOne: function( table, buger_name, cb) {
		var queryString = 'INSERT INTO '+table+'(burger_name, devoured) VALUES ("'+burger_name+'", FALSE)';
		console.log(queryString);
		connection.query(queryString, function (err, result) {
	//		cb(result);
		});
	},
	updateOne: function(table, burger_name, cb) {
		console.log('updateOne on orm.js', burger_name);
		var queryString = 'UPDATE '+table+' SET devoured=TRUE WHERE burger_name="'+burger_name+'"';
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			cb(result);
			console.log('update?');
		});
	}
};

module.exports = orm;