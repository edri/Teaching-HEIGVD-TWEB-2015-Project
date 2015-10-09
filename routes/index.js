var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
	console.log("asdfasf");
});

/* GET home page. */
router.get('/', (req, res, next) => {

	res.render('index', { title: 'Pollock' });
});

module.exports = router;
