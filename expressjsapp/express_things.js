var express = require('express');
var app = express();

var router = express.Router();


var server = app.listen(8081,"127.0.0.1", function () {
	// console.log("App is listening at address %s", server.address().address)
 	// console.log("App is listening at port %s", server.address().port)
	// console.log("App is listening at family %s", server.address().family)
})

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;