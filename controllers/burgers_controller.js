// this creates functions that will do routing for the app, and logic of each route
var express = require('express');
var router = express.Router();
var burger = require('../mmodels/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create(['name', 'sleepy'], [req.body.name, req.body.sleepy], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ sleepy: req.body.sleepy }, condition, function () {
		res.redirect('/burger');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;