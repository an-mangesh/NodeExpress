var express = require('express');
var custom_pug_temp = express();

custom_pug_temp.set('view engine','pug');

custom_pug_temp.listen(3000,"127.0.0.1");

custom_pug_temp.get('/getPugTemplate',function(req,res){
	//console.log('\n The Project directory is : '+__dirname);
	res.render(__dirname+'/pug_content');
})

// Command Prompt : nodemon pug_custom_temp.js
// Browser Hit URL : http://127.0.0.1:3000/getPugTemplate