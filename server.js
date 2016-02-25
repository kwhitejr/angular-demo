var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(8000, function() {
  console.log('Listening to port', server.address().port);
});