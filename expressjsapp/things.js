
// Ref. : https://www.tutorialspoint.com/expressjs/expressjs_routing.htm
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('Get Route  getting called on things');
});

//Browser Hit URL :  http://127.0.0.1:3000/things


router.post('/',function(req,res){
	console.log('POST Route getting called on things')
});
module.exports = router;

// New Command prompt or new tab Hit URL on same project directory : curl -X POST "http://localhost:3000/things"

