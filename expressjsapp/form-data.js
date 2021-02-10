var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var expressForm = express();
var formdata = expressForm.listen(3000, "127.0.0.1");

expressForm.set('view engine', 'pug');
expressForm.use(bodyParser.json());
expressForm.use(bodyParser.urlencoded({
	extended: true
}));
expressForm.use(upload.array());
expressForm.use(express.static('public_express_js'));

expressForm.get('/', function (req, res) {
	res.render(__dirname + '/form-data-view');
})

expressForm.post('/', function (req, res) {
	console.log(req.body);
	res.send("Received Request");
})


// Browser Hit URL : http://localhost:3000/
// And Check Command Prompt.