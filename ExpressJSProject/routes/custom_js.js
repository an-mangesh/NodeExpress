var express = require('express');
var router = express.Router();


// var mongoConfig = require('../mongo_db_config.js');

var Mongodb = require('mongodb');
var MongoClient = Mongodb.MongoClient;
var mongodb_config_url = "mongodb://localhost:27017/express_app_db";



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('custom', { title: 'Express JS Tutorial Custom Call' });
});

router.get('/second', function (req, res, next) {
  res.render('custom', { title: 'Express JS Tutorial Second Custom Call' });
});

router.get('/getRecords', function (req, res, next) {
  Mongodb.connect(mongodb_config_url, { useNewUrlParser: true, useUnifiedTopology: true }, function (error, mongoDB) {
    if (error) {
      throw error;
    }
    else {
      var mongodbFind = mongoDB.db('express_app_db');
      //mongodbFind.collection("Industry").findOne({}, function (err, result) {
      mongodbFind.collection("Industry").find({}).toArray(function (err, result) {

        if (error)
          throw error;
        else
          console.log(result);
        // JSON.stringify(result)
        //res.render('custom', { title: 'Express JS Get Call', data: JSON.stringify(result) });
        res.render('custom', { title: 'Express JS Get Call', ResultData: result });
        mongoDB.close();
      });
    }
  });
});
module.exports = router;
