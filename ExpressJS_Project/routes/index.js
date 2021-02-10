const express = require('express');
const router = express.Router();
const msg = require('../shared/shared');
const shared1 = require('../shared/shared1');
const customcall = require('../shared/customCall');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express JS' });
});


// Query Param(?:).
router.get('/user', (req, res) => {
  console.log(`The Name : `, req.query.name);
});
// Browser HIT : http://localhost:4000/user?name=Test



// Params(/).
router.get('/user/:id', (req, res) => {
  //res.send('<b>URL Building</b>' + lineBreak + '1. Simple : - The get request has received id  is : ' + req.params.id);
  console.log(`The ID Received Is :` + req.params.id);
});
// Browser HIT URL : http://localhost:4000/user/07

// Export Function
router.get('/getShared', (req, res, next) => {
  msg('Hello World');

});

// Export Function as a Class
router.get('/getSharedDetails', (req, res, next) => {
  const share_data = new shared1('AbCD', 'WXYZ');
  console.log(share_data.fullName());
});


// Node.js Local Module
router.get('/getcustomcall', (req, res, next) => {
  customcall.info('Express And Node.js started');
});
// Ref. : https://www.tutorialsteacher.com/nodejs/nodejs-local-modules

module.exports = router;
