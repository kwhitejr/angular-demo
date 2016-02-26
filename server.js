var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/api', function (req, res, next) {
  var movies = [
    {title: "The GodMother", year: "2001"},
    {title: "The Frequalizer", year: "2003"},
    {title: "Peaddool", year: "2005"}
  ];
  res.json(movies);
});

var server = app.listen(8000, function() {
  console.log('Listening to port', server.address().port);
});