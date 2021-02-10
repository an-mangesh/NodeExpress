
var express = require('express');
var expApp = express();
var bodyParser = require('body-parser');

expApp.listen(3000, function () {
  //console.log('This is CRUD Node with ExpressJS And MongoDb');
});

expApp.get('/', function (req, res) {
  res.send('This is App Get Request');
});
// Browser HIT URL : localhost:3000