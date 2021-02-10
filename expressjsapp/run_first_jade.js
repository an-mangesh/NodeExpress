var express = require('express');
myjadeapp = express();

myjadeapp.listen(3000,"127.0.0.1");

myjadeapp.set('view engine','jade');

myjadeapp.get('/first_jade_template_call',function(req,res){
res.render(__dirname+'/first_view',{title:'Jade Templating Engine',greeting:'Heyyyy Hi Express Dev'});
})

// Command Prompt : nodemon run_first_jade.js
// Browser Hit URL : http://127.0.0.1:3000/first_jade_template_call