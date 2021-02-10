var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Yeaaaah !!!! Respond with a Resource');
});

module.exports = router;
