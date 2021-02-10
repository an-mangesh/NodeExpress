var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

require('../model/industry');
const Industry = mongoose.model('Industry');

router.get('/', function (req, res, next) {
  res.send('respond with a custom resource');
});
router.get('/getAll', function (req, res) {
  Industry.find((err, docs) => {
    if (!err) {
      ///res.render("getdata", { title: 'ExpressJS Custom', list: docs });
      console.log(docs);
    }
    else {
      console.log('Error in retrieving list :' + err);
    }
  });
});






module.exports = router;
