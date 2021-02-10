var express = require('express');
var app = express();


var server = app.listen(8081,"127.0.0.1", function () {
	// console.log("App is listening at address %s", server.address().address)
 	// console.log("App is listening at port %s", server.address().port)
	// console.log("App is listening at family %s", server.address().family)
})

app.route('/Node').get(function(req,res){
res.send('Tutorial is on Node');
console.log("The Tutorial loaded Node page");
});
// Browser UR: http://127.0.0.1:8081/Node



app.route('/Angular').get(function(req,res){
res.send('Tutorial is on Angular');
console.log("The Tutorial loaded Angular page");
});
// Browser UR: http://127.0.0.1:8081/Angular





app.get('/',function(req,res){
res.send('Tutorial Home Page Here');
console.log("The Tutorial loaded Home page");
});
// Browser UR: http://127.0.0.1:8081/

