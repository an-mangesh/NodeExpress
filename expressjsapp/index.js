var express = require('express');
var myapp = express();
var things = require('./things.js');


var bodyParser = require('body-parser');
myapp.use(bodyParser.urlencoded({extended:false}))					 // Parse URL Encoded Data
myapp.use(bodyParser.json())                                         // Parse JOSN Data

var cookieParser = require('cookie-parser');
myapp.use(cookieParser())


var multer = require('multer');
var upload = multer();


// myapp.set('view engine','pug');                  // For Template Engine set Pug as view engine
// myapp.set('views','./views');                   // These are already added in the run_first_pug.js file too

var server = myapp.listen(3000,"127.0.0.1");

myapp.get('/',function(req,res){
	res.send('Hey app is loaded.');
	console.log('App is loaded at console')
	console.log("App is listening at address %s", server.address().address)
 	console.log("App is listening at port %s", server.address().port)
	console.log("App is listening at family %s", server.address().family)
});
// Browser Hit URL : http://127.0.0.1:3000/

myapp.get('/getapp',function(req,res){
	res.send('Hey app calls getapp method.');
});
// Browser Hit URL : http://127.0.0.1:3000/getapp


myapp.post('/postapp',function(req,res){
	res.send('Hey app calls postapp method check at console too');
	console.log("Hey app calls postapp method")
});
// New Command prompt Hit URL on same project directory : curl -X POST "http://localhost:3000/postapp"



myapp.all('/alloneresp',function(req,res){
	res.send('Hey app calls alloneresp method check response.');
});
//Browser Hit URL :  http://127.0.0.1:3000/alloneresp/



myapp.all('/alloneconsole',function(req,res){
	console.log('Hey app calls alloneconsole method check console.')
});
// New Command prompt or new tab Hit URL on same project directory : curl -X POST "http://localhost:3000/alloneconsole"



myapp.use('/things',things);
// This is using things.js file and calling methods of things.js files.
