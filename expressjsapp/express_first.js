var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World....! This is express js first script called on plain call without any method.');
})


var server = app.listen(8081,"127.0.0.1", function () {
// var server = app.listen(8081, function () {
// This is not returns the address properly.

   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})