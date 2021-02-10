var express = require('express');
var myapp= express();
myapp.listen(3000,"127.0.0.1");
var lineBreak = "<br><br>";

myapp.use(function(req,res,next){
console.log('The new request is received at : '+Date.now());
next();
})
//Browser Hit URL : http://127.0.0.1:3000/     and check at console,browser gives error maybe.




myapp.use('/date',function(req,res,next){
	console.log('The date is : '+Date.now());
	next();
})

 myapp.get('/date',function(req,res){
 	res.send('Date is called');
 });
 //Browser Hit URL : http://127.0.0.1:3000/date     and check at browser and console too.

