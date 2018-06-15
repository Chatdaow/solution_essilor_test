const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var mongojs = require('./db');
var db = mongojs.connect;
var ObjectId = require('mongodb').ObjectID;

app.use(bodyParser.urlencoded(
	{extended: true}
));
app.use(bodyParser.json());

app.get('/api/books/', function(request, response) {
    db.Book.find(function(err,fetching) {
			response.json(fetching);
	})
})

app.get('/api/books/:bookid', function(request, response) {
    db.Book.find({ "_id": ObjectId(request.params.bookid) }, function(err,fetching) {
			response.json(fetching);
	})
})

app.post('/api/books', function(request, response)  {
    db.Book.insert(request.body);
	response.send(request.body);
})



app.listen(83, function() {
  console.log('listening on 83');
})