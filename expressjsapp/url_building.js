var express = require('express');
var myapp = express();
myapp.listen(3000, "127.0.0.1");
var lineBreak = "<br><br>";


myapp.get('/:id', function (req, res) {
	res.send('<b>URL Building</b>' + lineBreak + '1. Simple : - The get request has received id  is : ' + req.params.id);

})

//Browser Hit URL :  http://127.0.0.1:3000/Test123


myapp.get('/tutorial/:name/:id', function (req, res) {
	res.send('<br>2. Simple complex : <br>The received id is : ' + req.params.id + '<br>The received name is : ' + req.params.name);

})

//Browser Hit URL :  http://127.0.0.1:3000/tutorial/Expressjs/07



myapp.get('/usercontact/:phone([0-9]{10})', function (req, res) {
	res.send('<b>Pattern Matched Routes Checking </b>' + lineBreak + ' The Contach number is : ' + req.params.phone);

})

//Browser Hit URL : http://127.0.0.1:3000/usercontact/7778889990


myapp.get('*', function (req, res) {
	res.send('<b> Inavalid URL Handling : </b>' + lineBreak + " The Requested URL Is Incorrect,kindly try again...! Or Recheck parameters which are sent");
})

//Browser Hit URL : http://127.0.0.1:3000/test/test


