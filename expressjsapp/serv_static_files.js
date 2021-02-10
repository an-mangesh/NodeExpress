var express = require('express');
var servstatic = express();
servstatic.listen(3000,"127.0.0.1");
servstatic.set('view engine','pug');
servstatic.use(express.static('/home/nexususer/expressjsapp/'))
//The Paramter is root means path till project path.


//Img Path : file:///home/nexususer/expressjsapp/public_express_js/Avtar.png


//servstatic.get('/GetAvtar', (req, res) => res.sendFile(__dirname + '/public_express_js/Avtar.png'));
// Browser Hit URL : http://127.0.0.1:3000/GetAvtar
// This will Shows Image File At browser plain full screen.



servstatic.get('/',function(req,res){

	// res.send('Response At Browser');
	// console.log('Response At Console');
		console.log('\n The Project directory is : '+__dirname);
		// res.render(__dirname+'/serv_static_view');
		res.render(__dirname+'/serv_static_view',{imgPath: __dirname });


})
// Browser Hit URL : http://127.0.0.1:3000/