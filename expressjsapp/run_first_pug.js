var express = require('express');
var myapp = express();
myapp.set('view engine','pug');                    // For Template Engine set Pug as view engine

myapp.listen(3000,"127.0.0.1");

console.log('\n The Project directory is : '+__dirname);

myapp.get('/first_pug_template_call',function(req,res){
		res.render(__dirname+ '/first_view');
})
// Command Prompt : nodemon run_first_pug.js
// Browser Hit URL : http://127.0.0.1:3000/first_pug_template_call


myapp.get('/second_pug_template_call',function(req,res){
	res.render(__dirname+ '/first_view',{
		name:'ExpressJs',
		url:'https://expressjs.com/'
	});

})
// Command Prompt : nodemon run_first_pug.js
// Browser Hit URL : http://127.0.0.1:3000/second_pug_template_call


myapp.get('/third_pug_template_call',function(req,res){
	res.render(__dirname+ '/first_view',{
		age:'27'
	});

})
// Command Prompt : nodemon run_first_pug.js
// Browser Hit URL : http://127.0.0.1:3000/third_pug_template_call
