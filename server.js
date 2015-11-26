var express = require('express')
var path = require('path')
var Actions = require('./actions')

var app = express()

app.set('view engine', 'ejs');

// GET /users
app.get('/users', function (req, res) { Actions.getUser(req,res);});
app.get('/posts', function (req, res) { Actions.getPost(req,res);});

// USE middleware
app.use(express.static('public'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://localhost:%s', port)

})
