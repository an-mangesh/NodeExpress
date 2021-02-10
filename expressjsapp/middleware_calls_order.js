var express = require('express');
var myapp = express();
myapp.listen(3000,"127.0.0.1");

myapp.use(function(req,res,next){
	console.log('Start @ Console');
	next();
})

myapp.get('/',function(req,res,next){
	res.send('Middle @ Browser Response');
	next();
})


myapp.use('/',function(req,res){
	console.log('End @ Console');
})
