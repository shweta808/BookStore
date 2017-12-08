var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

Genre = require('./modules/genres');

mongoose.connect('mongodb://localhost:27017/bookstore',{ useMongoClient: true });
var db = mongoose.connection;

// app.get('/',function(req,res){
// 	res.send('Hi World');
// });

app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});

});

app.get('/api/genres/:_id',function(req,res){
	Genre.getGenreByID(req.params._id , function(err, genre){
		if(err)
			throw err;
		res.json(genre);
	});
});

app.post('/api/genres' , function(req,res){
	var genre = req.body ;
	console.log(genre);
	Genre.addGenre(genre , function(err , genre){
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

app.listen(3000);
console.log("server started on 3000 port");