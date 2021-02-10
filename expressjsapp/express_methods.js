var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World....! This is express js first script called on plain call without any method.');
})
// Browser UR: http://127.0.0.1:8081/












var server = app.listen(8081,"127.0.0.1", function () {

	console.log("App is listening at address %s", server.address().address)
    console.log("App is listening at port %s", server.address().port)
	console.log("App is listening at family %s", server.address().family)
})
// These are shows on node terminal or say that command prompt screen.









app.get('/hello', function(req,res){
	res.send('Hey you have called the GET Method ');
	console.log("App is listening at GET :  address,port,family respectively %s,%s,%s \n",server.address().address,server.address().port, server.address().family)
})
// Browser UR: http://127.0.0.1:8081/hello








app.post('/hello', function(req,res){
	res.send('Hey you have called the POST Method ');
	console.log("App is listening at POST : address,port,family respectively %s,%s,%s \n",server.address().address,server.address().port, server.address().family)
})


// Add this command : curl -X POST "http://127.0.0.1:8081/hello"
// Example : nexususer@comopen12:~/expressjsapp$ curl -X POST "http://127.0.0.1:8081/hello"





app.all('/helloAll', function(req,res){
	res.send("Hey you have called the All Method.HTTP method doesn't have any effect on this route!");


	console.log("App is listening at ALL : address,port,family respectively %s,%s,%s \n",server.address().address,server.address().port, server.address().family)
})
// Browser UR: http://127.0.0.1:8081/helloAll
// Add this command : curl -X POST "http://127.0.0.1:8081/helloAll"
// Example : nexususer@comopen12:~/expressjsapp$ curl -X POST "http://127.0.0.1:8081/helloAll"
// This Is Call at All.