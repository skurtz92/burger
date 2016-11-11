// set up model for how to interface with a database

var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res)
		});
	},
	create: function (burgerName, cb) { //take away cols, vals 
		orm.insertOne('burgers', ['burger_name', 'devoured'], [name, false], cb);

	},

	update: function (id, cb){
		var condition = 'id=' + id;
		orm.updateOne('burgers', {devoured : true}, condition, cb); 
			cb(res);
		}
	};

module.exports = burger;